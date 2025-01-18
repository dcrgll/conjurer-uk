'use client'

import { Suspense, useEffect, useState } from 'react'
import { getCookieConsentValue } from 'react-cookie-consent'

import { analyticsConfig, grantConsentForEverything } from '@/lib/analytics'

import { GoogleTagManagerScripts } from './google-tag-manager-script'

export const GoogleTagManager = () => {
  const [isGtagLoaded, setIsGtagLoaded] = useState(false)
  const [hasSetConsent, setHasSetConsent] = useState(false)

  // Handle Consent
  useEffect(() => {
    if (isGtagLoaded && !hasSetConsent) {
      // Get historic consent value
      const consent = getCookieConsentValue(analyticsConfig.cookieName)

      if (consent === 'true') {
        grantConsentForEverything()
      }

      setHasSetConsent(true)
    }
  }, [isGtagLoaded, hasSetConsent])

  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${analyticsConfig.gtmId}`}
          height="0"
          width="0"
          style={{
            display: 'none',
            visibility: 'hidden'
          }}
        ></iframe>
      </noscript>
      {/* We need to use Suspense in order to access useSearchParams (see https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout) */}
      <Suspense>
        <GoogleTagManagerScripts
          gaId={analyticsConfig.gtmId!}
          onLoadCallback={() => setIsGtagLoaded(true)}
        />
      </Suspense>
    </>
  )
}
