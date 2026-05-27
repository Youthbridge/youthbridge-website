import type { Metadata } from 'next'
import { Geist, Geist_Mono, Oswald } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import { CookieBanner } from '@/components/cookie-banner'
import { ThirdPartyScripts } from '@/components/third-party-scripts'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://youthbridge-website.vercel.app'),
  title: 'YouthBridge',
  description: 'YouthBridge – Das Erfolgskonzept aus NYC in Bayern. Seit 2017 in München.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'YouthBridge',
    description: 'YouthBridge – Das Erfolgskonzept aus NYC in Bayern. Seit 2017 in München.',
    siteName: 'YouthBridge',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/sharing-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'YouthBridge Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouthBridge',
    description: 'YouthBridge – Das Erfolgskonzept aus NYC in Bayern. Seit 2017 in München.',
    images: ['/sharing-preview.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`font-sans antialiased ${geist.variable} ${geistMono.variable} ${oswald.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        
        {/* Hidden anchor element for Google Translate widget */}
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        
        {/* Dynamic, GDPR-compliant Script & Analytics Manager */}
        <ThirdPartyScripts />
        
        {/* GDPR-compliant Cookie Consent Banner */}
        <CookieBanner />
      </body>
    </html>
  )
}
