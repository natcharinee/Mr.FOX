/** สัดส่วนรูปแรก (slide-0) — ใช้ล็อกขนาดสไลด์ทุกรูปให้เท่ากัน */
export const HERO_ASPECT_RATIO = '1007 / 1024'

/** เพิ่มรูปสไลด์ Hero ที่นี่ — วางไฟล์ใน public/images/hero/ แล้วเพิ่ม object ใหม่ */
export const heroSlides = [
  { id: 'featured', src: '/images/hero/slide-0.png', altKey: 'featured' },
  { id: 'cats', src: '/images/hero/slide-3.png', altKey: 'cats' },
  { id: 'portrait', src: '/images/hero/slide-4.png', altKey: 'portrait' },
  { id: 'party', src: '/images/hero/slide-5.png', altKey: 'party' },
]

export const PLATFORM_PREVIEW_COUNT = 8

export const platforms = [
  { id: 'foxy', name: 'FOXY', logo: '/images/platforms/foxy.png' },
  { id: 'cupe', name: 'CupE', logo: '/images/platforms/cupe.png' },
  { id: 'cliq', name: 'CLIQ' },
  { id: 'himbo', name: 'Himbo' },
  { id: 'lesbie', name: 'Lesbie' },
  { id: 'tomboi', name: 'Tomboi' },
  { id: 'bargirl', name: 'BarGirl' },
  { id: 'silom', name: 'Silom' },
  { id: 'cosplayPlus', name: 'Cosplay Plus' },
  { id: 'expatIdols', name: 'Expat Idols' },
  { id: 'beautyQueen', name: 'Beauty Queen' },
  { id: 'naksueksa', name: 'นักศึกษา' },
]

export const creatorBenefitIds = ['monetization', 'branding', 'strategy', 'marketing', 'protection', 'analytics']

export const solutionIds = ['management', 'marketing', 'production', 'technology', 'payment']

export const featureCardIds = ['api', 'payments', 'analytics', 'subscriptions']

export const successStories = [
  { name: 'Creator A', followers: '250K+', growth: '+340%', platform: 'FOXY' },
  { name: 'Creator B', followers: '180K+', growth: '+220%', platform: 'CupE' },
  { name: 'Creator C', followers: '420K+', growth: '+510%', platform: 'CLIQ' },
  { name: 'Creator D', followers: '95K+', growth: '+180%', platform: 'Cosplay Plus' },
]

export const timeline = [
  { year: '2019', key: 'timeline2019' },
  { year: '2025', key: 'timeline2025' },
  { year: '2026', key: 'timeline2026' },
]

export const careerIds = ['developer', 'designer', 'marketing', 'creatorManager']

export const newsCategoryKeys = ['catEconomy', 'catMarketing', 'catTrends', 'catUpdates']

export const articleKeys = ['article1', 'article2', 'article3', 'article4']

export const articleCategories = ['catEconomy', 'catMarketing', 'catTrends', 'catUpdates']

export const partnerIds = ['agencies', 'studios', 'production', 'technology']

export const trustKeys = ['ageVerification', 'moderation', 'privacy', 'safety', 'antiFraud']

export const faqKeys = ['q1', 'q2', 'q3', 'q4']

export const stats = [
  { valueKey: 'platformsValue', labelKey: 'platforms' },
  { valueKey: 'creatorsValue', labelKey: 'creators' },
  { valueKey: 'monthlyViewsValue', labelKey: 'monthlyViews' },
  { valueKey: 'distributionValue', labelKey: 'distribution' },
]

export const contactSubjectKeys = ['subjectBusiness', 'subjectPartnership', 'subjectCreator', 'subjectPress']
