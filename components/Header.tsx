import Logo from './Logo'
export default function Header () {
  return (
    <nav className='border-b-4 border-gray-100'>
      <div className='container mx-auto px-4 sm:px-6 py-4'>
        {/* Aqui estaara el logo */}
        <Logo />
      </div>
    </nav>
  )
};
