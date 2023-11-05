import Script from 'next/script'
 
function Gtag() {
  return (
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-TS6LLE8BY1" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-TS6LLE8BY1');
        `}
      </Script>
    </div>
  )
}
 
export default Gtag