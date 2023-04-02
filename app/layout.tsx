import React from 'react'
// import Provider from './Provider'
import './../styles/globals.css'
import ThemePage from '@/components/ThemePage'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode,
}) {
  const meta = {
    title: 'The Bloggin Platform for Developers',
    description: 'Start your developer blog, share ideas, and connect with the dev community',
    type: 'website'
  }

  return (

    <html lang='es'>
      <head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        {/* Open Graph  */}
        <meta property='og:url' content='http://localhost:3000' />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Blog for dev' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />

        {/* <link rel='icon' href='./favicon' /> */}
      </head>
      {/* <Provider> */}

      <body>
        <ThemePage newData={children} pageProps={{ session: 's' }} />
      </body>
      {/* </Provider> */}

    </html>

  )
}
