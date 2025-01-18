'use client'

import { motion } from 'framer-motion'
import CookieConsent from 'react-cookie-consent'

import { analyticsConfig, grantConsentForEverything } from '@/lib/analytics'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <motion.div
        initial={{ y: '100vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="fixed inset-x-0 bottom-0 z-50"
      >
        <CookieConsent
          disableStyles={true}
          cookieName={analyticsConfig.cookieName}
          buttonText="Acknowledge"
          onAccept={grantConsentForEverything}
          location="bottom"
          containerClasses="shadow md:max-w-sm right-0 fixed bg-brand border border-black rounded p-4 m-4"
          buttonClasses="px-8 py-1.5 *:text-lg rounded px-4 py-1.5 text-sm font-semibold transition bg-black text-white w-full text-center hover:bg-black/50 transition-colors ease-in-out duration-100 mt-2"
        >
          <p className="w-full pb-2 text-center text-xs md:max-w-xs">
            By using this site, you agree to the use of cookies for a better
            experience.
          </p>
        </CookieConsent>
      </motion.div>
    </>
  )
}
