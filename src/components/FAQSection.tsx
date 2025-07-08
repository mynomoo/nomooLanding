import React, { useState } from 'react'

const faqs = [
  { q: 'What is NoMoo?', a: 'NoMoo is a smart app designed to help vegans, vegetarians, and eco-conscious eaters find and enjoy plant-based food options using AI, geo-location, and user insights.' },
  { q: 'Is NoMoo affordable compared to other delivery and booking apps?', a: 'Yes, NoMoo offers competitive rates, often with lower associated costs compared to other apps in the market.' },
  { q: 'How does the restaurant finder work?', a: 'Using real-time geo-location, NoMoo shows nearby vegan and vegetarian-friendly restaurants, with filters for cuisine, price, ratings, and dietary preferences.' },
  { q: 'What is the Smart Menu Scanner?', a: `NoMoo's proprietary AI can instantly scan and analyze restaurant menus. It highlights vegan and vegetarian options and even shows dishes that can be modified by removing certain ingredients — helping users make smart choices when booking a table or ordering delivery.` },
  { q: 'Does NoMoo offer delivery services?', a: 'Yes, NoMoo enables users to order food for delivery from partner restaurants. The delivery service is reliable and comparable to other major delivery apps.' },
  { q: 'Does NoMoo track the environmental impact of meals?', a: 'Yes. NoMoo calculates the estimated carbon footprint of your meal to support more eco-friendly food choices.' },
  { q: 'Is there a way to get personalized food recommendations?', a: 'Absolutely. Based on your dietary preferences, restrictions, and history, NoMoo suggests dishes and restaurants tailored to your lifestyle.' },
  { q: 'Can I leave reviews or read others\' experiences?', a: 'Yes. Users can rate dishes and restaurants and share insights with the NoMoo community, helping others make informed choices.' },
  { q: 'Can NoMoo help with food allergies?', a: 'Yes, allergy detection is part of the premium features, helping users avoid ingredients they are allergic to when analyzing menus.' },
  { q: 'How do restaurants benefit from NoMoo?', a: 'Restaurants can subscribe to NoMoo to increase visibility, certify menu items, and access data insights on customer preferences and sustainability trends.' },
]

const PlusIcon = () => (
  <svg width='20' height='20' fill='none' viewBox='0 0 20 20'>
    <path d='M10 4v12M4 10h12' stroke='#00C853' strokeWidth='2' strokeLinecap='round' />
  </svg>
)

const MinusIcon = () => (
  <svg width='20' height='20' fill='none' viewBox='0 0 20 20'>
    <path d='M4 10h12' stroke='#00C853' strokeWidth='2' strokeLinecap='round' />
  </svg>
)

const FAQSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <section className='w-full overflow-hidden flex flex-col items-center py-10 sm:py-20 bg-white dark:bg-white px-4 sm:px-6'>
      <div className='max-w-5xl w-full mx-auto text-center mb-8'>
        <div className='text-[#00C853] font-semibold text-base mb-2'>FAQs</div>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2'>
          Answers to some of your questions
        </h2>
        <p className='text-[#888] text-sm sm:text-base'>
          Don&apos;t find the answers you were looking for? Contact us at{' '}
          <a href='mailto:info@mynomoo.com' className='text-[#00C853] font-semibold'>
          info@mynomoo.com
          </a>
        </p>
      </div>

      <div className='max-w-5xl w-full flex flex-wrap gap-4'>
        {faqs.map((faq, index) => {
          const isOpen = openFaqIndex === index
          return (
            <div
              key={index}
              className='bg-white dark:bg-white border border-gray-200 rounded-lg p-4 flex flex-col cursor-pointer transition hover:shadow w-full sm:w-[calc(50%-0.5rem)]'
              onClick={() => setOpenFaqIndex(isOpen ? null : index)}
            >
              <div className='flex items-center justify-between'>
                <span className='font-semibold mr-2 text-sm sm:text-base text-black'>
                  {faq.q}
                </span>
                <span>{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
              </div>
              {isOpen && (
                <div className='text-gray-500 text-xs sm:text-sm mt-2 text-left'>
                  {faq.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQSection
