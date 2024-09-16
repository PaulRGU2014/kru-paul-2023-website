"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { ReactNode } from "react"

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {

  return  (
      <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}>
        {children}
      </GoogleReCaptchaProvider>
  )
}