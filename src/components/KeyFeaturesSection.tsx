import React from 'react'

const features = [
  'Live availability and instant booking',
  'Verified plant-based menus',
  'Smart filters based on your values',
  'Curated vegan & vegetarian delivery',
  'AI-powered meal ratings',
  'CO₂ score for each dish',
]

const ArrowIcon = () => (
  <img
    src="/keyFeaturesSection/arrow.svg"
    alt="arrow"
    className="inline-block align-middle mr-2 w-5 h-5"
  />
)

const KeyFeaturesSection = () => {
  return (
    <div className='w-full bg-white dark:bg-white flex flex-col items-center p-[8%] md:p-0'>
      <div className='flex flex-col justify-center items-center mb-12 md:px-[20%]'>
        <p className='text-[#0AAD0B] text-xl'>Key Features</p>
        <p className='text-bold font-bold text-black text-center text-[25px] md:text-[35px]'>Delivery That&apos;s Better for You and the Planet</p>
        <p className='text-[#898989] text-sm md:text-base text-center'>Craving comfort food without the carbon guilt? NoMoo connects you with plant-based delivery options near you, complete with our sustainability scores.</p>
      </div>
      <div className='w-full flex flex-col md:flex-row md:px-[5%]  items-center '>
        {/* Left: Phone and Map Image */}
        <div className=' flex justify-start items-center w-full mb-8 md:mb-0'>
          {/* Replace with your own image if available */}
       <img
        src={"/keyFeaturesSection/mapAndPhone.svg"} 
        alt={"mapAndPhoneSvg"}
        className='w-[60%] h-full'
       ></img>
        </div>
        {/* Right: Text and Features */}
        <div className='w-full md:w-[60%]  flex-col  items-start justify-center'>
          <ul className='mb-6 space-y-9 w-full'>
            {features.map((f, i) => (
              <li
                key={i}
                className='flex items-center text-base sm:text-lg text-black'
              >
                <ArrowIcon />
                {f}
              </li>
            ))}
          </ul>
          <a
            href='#'
            className='inline-flex items-center px-6 py-2 bg-[#0AAD0B] text-white font-semibold rounded-md hover:bg-[#009e3a] transition text-sm'
          >
            Experience it now
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
    </div>
  )
}

export default KeyFeaturesSection
