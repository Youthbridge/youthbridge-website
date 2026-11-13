import type { Metadata } from 'next'
import { Geist, Geist_Mono, Oswald } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import { CookieBanner } from '@/components/cookie-banner'
import { ThirdPartyScripts } from '@/components/third-party-scripts'
import { JsonLd } from '@/components/seo-jsonld'
import { SITE_NAME, SITE_URL, SOCIAL_PROFILES } from '@/lib/seo'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'YouthBridge – Leadership-Projekt & Jugendverband in Bayern',
    template: '%s',
  },
  description:
    'YouthBridge vereint Leadership-Projekt und Jugendverband unter dem Dach der Europäischen Janusz Korczak Akademie e.V. in München, Nürnberg und ganz Bayern.',
  keywords: [
    'YouthBridge',
    'YouthBridge München',
    'YouthBridge Bayern',
    'YouthBridge Franken',
    'YouthBridge-UNI',
    'Jugendverband Bayern',
    'Leadership Programm Jugendliche',
    'Antisemitismusprävention',
    'Radikalisierungsprävention',
    'Demokratiebildung',
    'Europäische Janusz Korczak Akademie',
  ],
  authors: [{ name: 'YouthBridge / Europäische Janusz Korczak Akademie e.V.' }],
  creator: 'YouthBridge Bayern',
  publisher: 'Europäische Janusz Korczak Akademie e.V.',
  category: 'Jugendarbeit & Politische Bildung',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    title: 'YouthBridge – Leadership-Projekt & Jugendverband in Bayern',
    description:
      'YouthBridge vereint Leadership-Projekt und Jugendverband unter dem Dach der Europäischen Janusz Korczak Akademie e.V. in München, Nürnberg und ganz Bayern.',
    url: SITE_URL,
    siteName: SITE_NAME,
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
    title: 'YouthBridge – Leadership-Projekt & Jugendverband in Bayern',
    description:
      'YouthBridge vereint Leadership-Projekt und Jugendverband unter dem Dach der Europäischen Janusz Korczak Akademie e.V. in München, Nürnberg und ganz Bayern.',
    images: ['/sharing-preview.jpg'],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'NGO',
      '@id': `${SITE_URL}/#organization`,
      name: 'YouthBridge Bayern',
      alternateName: ['YouthBridge München', 'YouthBridge Franken', 'YouthBridge-UNI'],
      url: SITE_URL,
      logo: `${SITE_URL}/youthbridge-horizontal-logo.png`,
      image: `${SITE_URL}/sharing-preview.jpg`,
      email: 'youthbridge@ejka.org',
      foundingDate: '2017',
      description:
        'YouthBridge ist ein Leadership-Projekt und Jugendverband unter dem Dach der Europäischen Janusz Korczak Akademie e.V. zur Prävention von Antisemitismus, Diskriminierung und Radikalisierung in Bayern.',
      parentOrganization: {
        '@type': 'Organization',
        name: 'Europäische Janusz Korczak Akademie e.V.',
      },
      areaServed: [
        { '@type': 'City', name: 'München' },
        { '@type': 'City', name: 'Nürnberg' },
        { '@type': 'AdministrativeArea', name: 'Bayern' },
      ],
      sameAs: SOCIAL_PROFILES,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'YouthBridge',
      inLanguage: 'de-DE',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`font-sans antialiased ${geist.variable} ${geistMono.variable} ${oswald.variable}`}>
        <JsonLd data={organizationJsonLd} />
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
