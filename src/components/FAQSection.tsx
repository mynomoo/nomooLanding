import React, { useState } from 'react'

const faqs = [
  { q: 'Convallis metus nisi habitasse sit?', a: 'Answer content here.' },
  { q: 'Proin bibendum vivamus in viverra ante. Aliquam malesuada tortor nec mauris aliquam vel.', a: 'Answer content here.' },
  { q: 'Sodales velit lacus ut nulla et posuere. Turpis nec tempus diam mauris.', a: 'Answer content here.' },
  { q: 'Lectus risus neque neque enim. Risus lobortis proin consequat consequat faucibus ornare.', a: 'Answer content here.' },
  { q: 'Mattis feugiat elementum bibendum vel morbi arcu. Tristique proin malesuada enim eget commodo.', a: 'Answer content here.' },
  { q: 'Lacus interdum egestas consectetur nec sit. Vestibulum facilisis nunc non morbi donec ut tristique sit.', a: 'Answer content here.' },
  { q: 'Lacus bibendum enim amet lacinia ornare risus justo. Tellus at gravida sem commodo posuere tortor.', a: 'Answer content here.' },
  { q: 'Lacus bibendum enim amet lacinia ornare risus justo. Tellus at gravida sem commodo posuere tortor.', a: 'Answer content here.' },
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
    <section className='w-full overflow-hidden flex flex-col items-center py-10 sm:py-20 bg-white px-4 sm:px-6'>
      <div className='max-w-5xl w-full mx-auto text-center mb-8'>
        <div className='text-[#00C853] font-semibold text-base mb-2'>FAQs</div>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2'>
          Answers to some of your questions
        </h2>
        <p className='text-[#888] text-sm sm:text-base'>
          Don&apos;t find the answers you were looking for? Contact us at{' '}
          <a href='mailto:nomoo@gmail.com' className='text-[#00C853] font-semibold'>
            nomoo@gmail.com
          </a>
        </p>
      </div>

      <div className='max-w-5xl w-full flex flex-wrap gap-4'>
        {faqs.map((faq, index) => {
          const isOpen = openFaqIndex === index
          return (
            <div
              key={index}
              className='bg-white border border-gray-200 rounded-lg p-4 flex flex-col cursor-pointer transition hover:shadow w-full sm:w-[calc(50%-0.5rem)]'
              onClick={() => setOpenFaqIndex(isOpen ? null : index)}
            >
              <div className='flex items-center justify-between'>
                <span className='font-semibold text-sm sm:text-base text-black'>
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
