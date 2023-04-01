
export default function HomeLayout () {
  return (
    <section className='flex flex-col justify-center  item-center  space-y-10 mt-12 sm:mt-24 md:mt-32'>
      <div className='space-y-4 max-w-4xl mx-auto text-center'>
        <h1 className='text-4xl sm:text-7xl font-bold capitalize'>
          <span className='block'>The blogging platform</span>
          <span className='block'>For developers</span>
        </h1>
        <h2 className='text-xl sm:text-2xl'>
          Start your developer blog, share ideas, and connect with dev community!
        </h2>
      </div>
      {/* CTA */}
      <button
        type='button'
        className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-md border-2 text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap '
      >
        Start your blog for free
      </button>
    </section>
  )
}
