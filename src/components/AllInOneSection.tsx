import React from 'react'
import Image from 'next/image'
import AppStore from '../../public/heroSection/appStore.svg'
import Gplay from '../../public/heroSection/google_play.png'

const AllInOneSection = () => {
  return (
    <section className='w-full hidden mdf:flex justify-center bg-white px-4 py-14'>
      <div className='w-[1420px] h-[416px] bg-[#014421] rounded-[24px] flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-[52px] py-[52px]'>
        {/* Left Section */}
        <div className='flex-1 flex flex-col justify-center text-white z-10 pr-10'>
          <p className='text-base mb-2 opacity-80'>All in One</p>
          <h2 className='text-3xl md:text-[32px] font-bold mb-3 leading-snug'>
            One App. All Your Plant-Based
            <br className='hidden sm:block' /> Living Needs.
          </h2>
          <p className='text-white text-sm sm:text-base mb-6 opacity-90 max-w-[500px]'>
            NoMoo unites dining, delivery, and impact tracking into a single
            seamless experience—designed for conscious eaters and curious
            explorers alike.
          </p>
          <div className='flex gap-4 flex-wrap'>
            <a
              href='#'
              className='bg-[#0AAD0B] hover:bg-[#09990a] transition text-white font-semibold rounded-md px-6 py-2 flex items-center gap-3 shadow'
            >
              <Image
                width={20}
                height={20}
                alt='App Store'
                src={AppStore}
                className='w-7 h-7'
              />
              <span className='flex md:flex-col leading-tight'>
                <span className='text-xs md:text-[10px] md:font-extralight'>
                  Download on the
                </span>
                <span className='text-xs md:text-sm'>App Store</span>
              </span>
            </a>
            <a
              href='#'
              className='bg-[#0AAD0B] hover:bg-[#09990a] transition text-white font-semibold rounded-md px-6 py-2 flex items-center gap-3 shadow'
            >
              <Image
                width={20}
                height={20}
                alt='Google Play'
                src={Gplay}
                className='w-7 h-7'
              />
              <span className='flex md:flex-col leading-tight'>
                <span className='text-xs md:text-[10px] md:font-extralight'>
                  Get it on
                </span>
                <span className='text-xs md:text-sm'>Google Play</span>
              </span>
            </a>
          </div>
        </div>

        {/* Right: Phone */}
        <div className='absolute right-[-40px] bottom-[-10px] z-0 hidden md:block'>
          <img
            src='/inOneSection/oneSection.svg'
            alt='App preview'
            className='w-auto h-[480px] mr-16 object-contain opacity-90'
          />
        </div>
      </div>
    </section>
  )
}

export default AllInOneSection
