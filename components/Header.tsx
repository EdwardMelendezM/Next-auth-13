'use client'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import Logo from './Logo'
import { useEffect, useState } from 'react'
import { useSession, signIn } from 'next-auth/react'
// import { DefaultSession } from 'next-auth'
export default function Header () {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { data: session, status } = useSession()
  useEffect(() => {
    setMounted(true)
  }, [])
  function renderThemeChange () {
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (<SunIcon className='w-7 h-7 ' role='button' onClick={() => setTheme('light')} />)
    } else {
      return (<MoonIcon className='w-7 h-7 ' role='button' onClick={() => setTheme('dark')} />)
    }
  }
  return (
    <header className='border-b-4 border-gray-100 dark:border-gray-700'>
      <div className='container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center'>
        {/* Aqui estaara el logo */}
        <Logo />
        <div className='flex items-center space-x-3'>

          {renderThemeChange()}
          {status === 'unauthenticated'
            ? (
              <div>
                {!session
                  ? (
                    <button type='button' onClick={() => signIn()}>Sign in</button>
                    )
                  : (
                    <div className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap'>
                      <img src={session?.user?.image} alt={session?.user?.name} className='rounded-full border-2 border-blue-600 w-8 h-8' />
                      <p className=''>Hello, {session?.user?.name.split(' ')?.[0]} there</p>
                    </div>
                    )}
              </div>
              )
            : null}
        </div>
      </div>
    </header>
  )
};
