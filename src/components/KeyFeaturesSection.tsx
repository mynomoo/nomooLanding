import React, { useState } from 'react'

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<'loading' | 'success' | string | null>(null);

  async function submitEmailToWishlist(email: string, source: string) {
    const res = await fetch('/api/wishlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source }),
    });
    return res.json();
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const result = await submitEmailToWishlist(email, 'keyfeatures-modal');
    if (result.success) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus(result.error || 'error');
    }
  };

  return (
    <div className='w-full bg-white dark:bg-white flex flex-col items-center p-[8%] md:p-0'>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-gradient-to-b from-[#F5FFF5] to-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Join the Waitlist</h2>
            <p className="mb-4 text-gray-700 text-center">Experience NoMoo first! Enter your email to join our exclusive waitlist and be the first to know when we launch.</p>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="rounded-md border border-[#E6F6E6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C853]"
                required
              />
              <button
                type="submit"
                className="bg-[#0AAD0B] text-white font-semibold rounded-md px-4 py-2 text-sm hover:bg-[#009e3a] transition"
                disabled={status === 'loading'}
              >
                Join Now
              </button>
              {status === 'success' && <p className="text-green-600 text-sm">Thank you for joining!</p>}
              {status && status !== 'success' && status !== 'loading' && <p className="text-red-600 text-sm">{status}</p>}
            </form>
          </div>
        </div>
      )}
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
            onClick={e => { e.preventDefault(); setIsModalOpen(true); }}
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
