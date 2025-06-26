import React from 'react'

const features = [
  {
    icon: '/HowItWorksSection/ingredientScanner.svg',
    title: 'Ingredient Scanner',
    desc: 'It quickly identifies and analyzes product ingredients using a camera or barcode, providing information like allergens or nutrition.',
  },
  {
    icon: '/HowItWorksSection/realTimeMenuScanner.svg',
    title: 'Real-time Menu Analyzer',
    desc: 'It instantly evaluates menu items, often in a restaurant setting, to provide immediate insights on factors like nutritional content, allergens, or pricing.',
  },
  {
    icon: '/HowItWorksSection/smartSuggestions.svg',
    title: 'Smart Substitution Suggestions',
    desc: 'It automatically recommends alternative items or ingredients based on various factors like availability, dietary needs, or preferences.',
  },
]

const HowItWorksSection = () => {
  return (
    <section className='w-full flex flex-col items-center py-10 py-20 bg-white px-[10%] lg:px[40%] '>
      <div className='w-full flex flex-col lg:flex-row justify-between lg:items-start'>
        {/* Left: Title and Subtitle */}
        <div className=' min-w-0 mr-2'>
          <div className='text-[#00C853] font-semibold text-base mb-2'>
            How It Works?
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 leading-tight'>
            AI That Knows What&apos;s on
            <br className='hidden sm:block' /> Your Plate
          </h2>
        </div>
        {/* Right: Description and Button */}
        <div className=' flex flex-col bg-green'>
          <p className='text-[#444] text-sm sm:text-base max-w-xl mb-4 '>
            Our proprietary AI scans ingredients, recipes, and menus to
            determine if dishes are vegan, vegetarian, or can easily become so.
            Whether you&apos;re ordering in or dining out, we help you make
            informed, ethical food choices.
          </p>
          <a
            href='#'
            className='w-full md:w-[60%] flex items-center px-5 py-2 border border-[#00C853] text-[#00C853] font-semibold rounded-md hover:bg-[#00C853] hover:text-white transition text-sm'
          >
            Join 8900+ users on the waitlist
            <svg
              className='ml-2'
              width='16'
              height='16'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                d='M5 12h14M13 6l6 6-6 6'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
        </div>
      </div>
      {/* Features */}
      <div className=' w-full flex flex-col xl:flex-row justify-between items-start gap-8 mt-10 mx-auto'>
        <div className='flex flex-col items-start flex-1 min-w-[200px] max-w-xs'>
          <div className='mb-3'>
            <img 
              src={features[0].icon} 
              alt={features[0].title}
              width="36"
              height="36"
            />
          </div>
          <div className='font-bold text-base sm:text-lg mb-1 text-black'>
            {features[0].title}
          </div>
          <div className='text-gray-500 text-xs sm:text-sm'>{features[0].desc}</div>
        </div>
        
        <div className='flex flex-col items-start flex-1 min-w-[200px] max-w-xs'>
          <div className='mb-3'>
            <img 
              src={features[1].icon} 
              alt={features[1].title}
              width="33"
              height="33"
            />
          </div>
          <div className='font-bold text-base sm:text-lg mb-1 text-black'>
            {features[1].title}
          </div>
          <div className='text-gray-500 text-xs sm:text-sm'>{features[1].desc}</div>
        </div>
        
        <div className='flex flex-col items-start flex-1 min-w-[200px] max-w-xs'>
          <div className='mb-3'>
            <img 
              src={features[2].icon} 
              alt={features[2].title}
              width="23"
              height="23"
            />
          </div>
          <div className='font-bold text-base sm:text-lg mb-1 text-black'>
            {features[2].title}
          </div>
          <div className='text-gray-500 text-xs sm:text-sm'>{features[2].desc}</div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
