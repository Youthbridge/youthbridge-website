import type { Metadata } from 'next'
import { Geist, Geist_Mono, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: 'YouthBridge',
  description: 'YouthBridge – Das Erfolgskonzept aus NYC in Bayern. Seit 2017 in München.',
  icons: {
    icon: '/icon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'YouthBridge',
    description: 'YouthBridge – Das Erfolgskonzept aus NYC in Bayern. Seit 2017 in München.',
    images: [
      {
        url: '/hero-bg.jpg',
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
    images: ['/hero-bg.jpg'],
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
        <Analytics />
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'de',
                  includedLanguages: 'de,en',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
