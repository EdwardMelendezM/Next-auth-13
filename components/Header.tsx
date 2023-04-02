'use client'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import Logo from './Logo'
import { useEffect, useState } from 'react'

export default function Header () {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
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
        {renderThemeChange()}
      </div>
    </header>
  )
};
