import { TagIcon } from '@heroicons/react/24/outline'
export default function Header () {
  return (
    <header className='border-b-4 border-gray-100'>
      <div className='container mx-auto px-4 sm:px-6 py-4'>
        {/* Aqui estaara el logo */}
        <p className='flex items-center space-x-1 text-blue-600'>
          <TagIcon className='w-8 h-8 flex-shrink-0' />
          <span className='font-bold text-lg tracking-tight'> Blog for dev</span>
        </p>
      </div>
    </header>
  )
};
