function hashString(value = '') {
  let hash = 0
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0
  }
  return hash
}

export function formatCompactCount(value) {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000
    return `${millions >= 10 ? Math.round(millions) : millions.toFixed(1).replace(/\.0$/, '')}M`
  }
  if (value >= 10_000) return `${Math.round(value / 1000)}K`
  if (value >= 1_000) return `${(value / 1000).toFixed(1).replace(/\.0$/, '')}K`
  return `${value}`
}

export function formatBaht(value) {
  return `฿${value.toLocaleString('en-US')}`
}

export function buildCreatorStats(profileId, feedStats = {}) {
  const hash = hashString(profileId || '')
  const likes = feedStats.likes ?? 0
  const views = feedStats.views ?? 0
  const memberViews = feedStats.memberViews ?? 0
  const coins = feedStats.coins ?? 0

  const followers =
    18_000 + (hash % 140) * 1_000 + memberViews * 140 + likes * 900 + views * 12
  const monthlyIncome =
    48_000 + (hash % 200) * 1_000 + views * 220 + memberViews * 380 + coins * 1_200 + likes * 2_800

  return {
    followers,
    monthlyIncome,
    followersLabel: formatCompactCount(followers),
    monthlyIncomeLabel: formatBaht(monthlyIncome),
  }
}

export function enrichCreatorStats(creator) {
  const profileId = creator.profileId || creator.id?.replace(/^foxy-/, '') || creator.name
  const stats = buildCreatorStats(profileId, creator.feedStats)

  return {
    ...creator,
    profileId,
    ...stats,
  }
}
