declare global {
  interface Window {
    gtag: Gtag
  }
}

export interface Gtag {
  (...args: GtagFunctionArgs): void
}

export type GtagFunctionArgs =
  | [GtagCommand, EventName | EventParams | CustomParams]
  | [GtagCommand, string, EventParams | CustomParams]

export type GtagCommand = 'config' | 'set' | 'js' | 'event' | 'consent'

export interface EventParams {
  [key: string]: unknown
}

export interface CustomParams {
  [key: string]: unknown
}

export type EventName =
  | 'click'
  | 'submit'
  | 'purchase'
  | 'page_view'
  | 'screen_view'
// Add other standard event names as needed

export type SendGAEventDto = {
  action: EventName
  category: string
  label: string
}

export type GtagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

export const analyticsConfig = {
  gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
  cookieName: 'c_cookie_consent'
}

const logGAWarning = (message: string) => {
  console.warn(`[Tracking] Warning: ${message}`)
}

const getGtag = () => {
  if (!process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID) {
    logGAWarning('Google Analytics is not enabled')
    return null
  }
  if (!window.gtag) {
    logGAWarning(`GTag does not exist`)
    throw new Error('GTag does not exist')
  }
  return window.gtag
}

const withGtag = (callback: (gtag: Gtag) => void) => {
  const gtag = getGtag()
  if (!gtag) return
  callback(gtag)
}

export const sendGAEvent = (event: GtagEvent) =>
  withGtag((gtag) => {
    gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value
    })
  })

export const grantConsentForEverything = () =>
  withGtag((gtag) => {
    gtag('consent', 'update', {
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted'
    })
  })

export const markFeatureUsage = (feature: string) =>
  performance.mark('mark_feature_usage', {
    detail: { feature }
  })

export const pageview = (url: string) =>
  withGtag((gtag) => {
    gtag('config', analyticsConfig.gtmId!, {
      page_path: url
    })
  })
