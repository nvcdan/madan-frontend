import '@/app/styles/globals.css';
import { Playfair_Display, Lato, Marck_Script } from 'next/font/google';
import  "bootstrap/dist/css/bootstrap.min.css";
import Bootstrap from './Bootstrap';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-playfair-display',
  display: 'swap',        
});

const marckScript = Marck_Script({
  subsets: ['latin'],
  weight: ['400'], 
  variable: '--font-marck',
  display: 'swap',        
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'], 
  variable: '--font-lato',
  display: 'swap',        
});



export const metadata = {
  title: 'MADAN | Invitații digitale, meniuri QR, gestiune',
  description: 'Invitații digitale, meniuri QR, gestiune, pentru evenimentul tău',
  keywords: ['Invitații digitale', 'Meniuri QR', 'Gestiune evenimente', 'MADAN'],
  openGraph: {
    title: 'MADAN | Invitații digitale, meniuri QR, gestiune',
    description: 'Invitații digitale, meniuri QR, gestiune, pentru evenimentul tău',
    url: 'https://www.madan.ro',
    siteName: 'MADAN',
    images: [
      {
        url: 'https://www.madan.ro/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MADAN - Invitații digitale',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MADAN | Invitații digitale, meniuri QR, gestiune',
    description: 'Invitații digitale, meniuri QR, gestiune, pentru evenimentul tău',
    images: ['https://www.madan.ro/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={`${playfairDisplay.variable, lato.variable, marckScript.variable}`}>
      <Bootstrap/>
      <body>{children}</body>
    </html>
  );
}