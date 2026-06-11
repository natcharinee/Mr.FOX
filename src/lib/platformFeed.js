const FOXY_CONFIG = {
  feedUrl: 'https://www.foxy.club/Feed/SearchMobile',
  proxyPrefix: '/api/foxy',
  role: 'FOXY Creator',
  platform: 'FOXY',
  idPrefix: 'foxy',
}

export function createPlatformFeedSearcher(page = 1, pageSize = 30) {
  return {
    search: '',
    page: { current: page, size: pageSize },
    DomainId: 1,
    includeInactiveRecord: false,
    getAllRecord: false,
    MasterDataStatus: 0,
    CategoryFilter: { ViewGroupId: 0, CategoryId: 0, SubCategoryId: 0 },
    UserFilter: { RoleId: 0 },
    RecipientFilter: { ActivateStatus: 0, ApproveStatus: 0, Status: 0 },
    RecipientSearchFilter: {
      Languages: 0,
      Sexes: { Id: 0 },
      Province: { Id: 0 },
      Favorite: false,
      Avariable: false,
    },
    ViewGroup: { Id: 0 },
    searchMode: '',
    StatementFilter: { UserId: '', Year: 0, Month: 0 },
    ReviewHistoryFilter: {
      CallerId: '',
      Role: '',
      DomainGlobalId: 0,
      ActionMenu: '',
      IsCaller: false,
      IsRecipient: false,
      IsSale: false,
      RecipientProfileId: '',
    },
    RecipientVote: '',
    IsFeedFollow: '',
    IsSortLate: '',
    sharer: '',
    HuntId: '',
    HunterType: '',
    SortType: '',
    mainFeedIndex: true,
    filterMediaType: '',
    filterCateType: '',
    sortRank: '',
    filterPicture: '',
    externalId: '',
    filterSortBy: '',
    filterPeriod: '',
    filterMediaTypeSource: '',
    filterCountry: '',
    filterNationality: '',
    filterCategoryId: '',
    filterSubCategoryId: '',
  }
}

function serializeForm(data, prefix = '') {
  return Object.entries(data).flatMap(([key, value]) => {
    const formKey = prefix ? `${prefix}[${key}]` : key

    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      return serializeForm(value, formKey)
    }

    return [`${encodeURIComponent(formKey)}=${encodeURIComponent(value ?? '')}`]
  })
}

export function serializePlatformSearcher(searcher) {
  return serializeForm(searcher).join('&')
}

function decodeHtml(text) {
  return text
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
}

export function shouldSkipCreatorName(name) {
  const upper = name.toUpperCase()
  return upper.includes('OFFICIAL') || upper.includes('ADMIN')
}

export function parsePlatformFeedHtml(html, { role, platform, idPrefix }) {
  const pattern =
    /background:\s*url\((https:\/\/d2rlibv51pwtjl[^)]+)\)[\s\S]*?gallery-image[^>]*src="([^"]+)"[^>]*alt="([^"]+)"[^>]*square="([^"]+)"/gi

  const creators = []
  const seenNames = new Set()
  const seenProfileIds = new Set()
  let match

  while ((match = pattern.exec(html)) !== null) {
    const name = decodeHtml(match[3].trim())
    if (!name || seenNames.has(name) || shouldSkipCreatorName(name)) continue

    const profile = match[1]
    const profileId = profile.match(/cloudfront\.net\/([^/]+)\//)?.[1] ?? name
    if (seenProfileIds.has(profileId)) continue

    seenNames.add(name)
    seenProfileIds.add(profileId)

    creators.push({
      id: `${idPrefix}-${profileId}`,
      name,
      role,
      platform,
      image: `${profile.split('?')[0]}?tr=w-800,h-1000,cm-pad_resize`,
      profile,
      feedImage: match[2],
    })
  }

  return creators
}

function resolveFeedUrl(config) {
  if (typeof window !== 'undefined') {
    return `${config.proxyPrefix}/Feed/SearchMobile`
  }

  return config.feedUrl
}

export async function fetchFoxyCreators({ limit = 20, pageSize = 30 } = {}) {
  const config = FOXY_CONFIG
  const body = serializePlatformSearcher(createPlatformFeedSearcher(1, pageSize))
  const response = await fetch(resolveFeedUrl(config), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest',
    },
    body,
  })

  if (!response.ok) {
    throw new Error(`${config.platform} feed request failed (${response.status})`)
  }

  const html = await response.text()
  const creators = parsePlatformFeedHtml(html, config).slice(0, limit)

  if (!creators.length) {
    throw new Error(`No creators found in ${config.platform} feed response`)
  }

  return creators
}
