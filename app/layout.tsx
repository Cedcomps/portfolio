import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cédric Compagnon 👔 Product Manager, Technical Product Owner | B2B and B2C SaaS',
  description: 'Cédric Compagnon helps companies identify a relevant problem in order to develop the best solution.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-TS6LLE8BY1" />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-TS6LLE8BY1');
      `}
    </Script>
    <Script id="clarity">
    {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "j8gmu1wdo9");
      `}
    </Script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
