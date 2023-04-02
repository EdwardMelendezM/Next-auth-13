'use client'
import Header from './Header'
import Footer from './Footer'
// import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

interface Props{
  newData:ReactNode
}
export default function ThemePage ({ newData }:Props) {
  return (
  // <ThemeProvider enableSystem attribute='class'>
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow container mx-auto px-4 sm:px-6'>
        {newData}
      </main>
      <Footer />
    </div>
  // </ThemeProvider>
  )
};
