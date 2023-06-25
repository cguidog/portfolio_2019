import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" href="/favicon.png" type="image"/>
      <title>I am Guido</title>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-Y82ZSGRY20" />
        <Script id="gtag" strategy="lazyOnload" dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-Y82ZSGRY20');`
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
