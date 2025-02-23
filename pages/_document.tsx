import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
          <meta name="description" content="C'est une entreprise qui propose des services de Développement d'Applications (Mobile, Web et Desktop), de Conception UI/UX, d'IoT (Internet des Objets) et de Maintenance." />
          <meta name="robots" content="index, follow" />
          <meta name='tags' content='web,app,ui,maintenance,company,EcoMind,profile' />
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
      </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document
