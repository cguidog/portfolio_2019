import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" type="image" />
        <title>I am Guido</title>
      </Head>
      <body>
      <Script id="gtag_script" src="https://www.googletagmanager.com/gtag/js?id=G-Y82ZSGRY20" strategy="lazyOnload"></Script>
        <Script id="gtag" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Y82ZSGRY20');`}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
