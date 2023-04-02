'use client'
import Header from './Header'
import Footer from './Footer'
// import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

interface Props{
  newData:ReactNode,
  pageProps:{
    session:any
  }
}
export default function ThemePage ({ newData, pageProps }:Props) {
  return (
  // <ThemeProvider enableSystem attribute='class'>
    <SessionProvider session={pageProps.session}>

      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow container mx-auto px-4 sm:px-6'>
          {newData}
        </main>
        <Footer />
      </div>
    </SessionProvider>
  // </ThemeProvider>
  )
};
