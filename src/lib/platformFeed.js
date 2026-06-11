import { enrichCreatorStats } from './creatorStats'

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

function parseFeedCardStats(cardHtml) {
  return {
    likes: Number.parseInt(cardHtml.match(/class="score top[^"]*"[^>]*>\s*(\d+)/)?.[1] ?? '0', 10),
    views: Number.parseInt(cardHtml.match(/countView-[^"]+">(\d+)/)?.[1] ?? '0', 10),
    memberViews: Number.parseInt(cardHtml.match(/countViewMember-[^"]+">(\d+)/)?.[1] ?? '0', 10),
    coins: Number.parseInt(cardHtml.match(/totalGiftCoin-[^"]+">(\d+)/)?.[1] ?? '0', 10),
  }
}

export function parsePlatformFeedHtml(html, { role, platform, idPrefix }) {
  const cards = html.split(/<div class="card">/i).slice(1)
  const creators = []
  const seenNames = new Set()
  const seenProfileIds = new Set()

  for (const card of cards) {
    const name = decodeHtml(card.match(/UserName">([^<]+)/)?.[1]?.trim() ?? '')
    if (!name || seenNames.has(name) || shouldSkipCreatorName(name)) continue

    const profileId = card.match(/loadModalDetailProfile\('([a-f0-9-]+)'\)/)?.[1]
    if (!profileId || seenProfileIds.has(profileId)) continue

    const profileMatch = card.match(/background:\s*url\((https:\/\/d2rlibv51pwtjl[^)]+)\)/i)
    const feedImageMatch = card.match(
      /gallery-image[^>]*src="([^"]+)"[^>]*alt="([^"]+)"[^>]*square="([^"]+)"/i,
    )
    if (!profileMatch || !feedImageMatch) continue

    seenNames.add(name)
    seenProfileIds.add(profileId)

    const profile = profileMatch[1]
    const feedStats = parseFeedCardStats(card)

    creators.push(
      enrichCreatorStats({
        id: `${idPrefix}-${profileId}`,
        profileId,
        name,
        role,
        platform,
        image: `${profile.split('?')[0]}?tr=w-800,h-1000,cm-pad_resize`,
        profile,
        feedImage: feedImageMatch[1],
        feedStats,
      }),
    )
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
