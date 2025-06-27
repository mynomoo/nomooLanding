import Image from "next/image";
import AppStore from "../../public/heroSection/appStore.svg";
import Gplay from "../../public/heroSection/google_play.png";
import CowFace from "../../public/heroSection/Frame.png";
import ScrollDown from "../../public/heroSection/scrolldown.svg";
// import GreenChoicesSection from './greenChoicesSection'

const AppStoreImage = AppStore;
const GplayImage = Gplay;
const CowFaceImage = CowFace;
const ScrollDownImage = ScrollDown;
const HeroSection = () => {
  return (
    <>
      {/* <nav className="flex md:hidden justify-center gap-6 text-[15px] font-medium text-[#222] mb-2">
        <span className="text-[#0AAD0B] font-semibold border-b-2 border-[#0AAD0B] pb-1">
          Home
        </span>
        <span className="hover:text-[#0AAD0B] cursor-pointer">
          How it works?
        </span>
        <span className="hover:text-[#0AAD0B] cursor-pointer">
          Key Features
        </span>
        <span className="hover:text-[#0AAD0B] cursor-pointer">FAQs</span>
      </nav> */}

      {/* Hero Section */}
      <main className="flex flex-col items-center flex-1 w-full max-w-7xl mx-auto px-4">
        {/* Bookings/Delivery/Pickup */}
        <div className="flex gap-4 text-[#0AAD0B] font-medium text-lg mt-8 mb-8  md:mt-4 md:mb-2">
          <span>Bookings</span>
          <span className="text-[#222]">•</span>
          <span>Delivery</span>
          <span className="text-[#222]">•</span>
          <span>Pickup</span>
        </div>
        {/* Headline */}
        <h1 className="text-center text-4xl md:text-5xl font-bold leading-tight mb-2">
          <span className="text-[#0AAD0B] block md:inline">NoMoo</span>
          <span className="text-[#131313] font-stretch-50%">
            {" "}
            <span className="hidden md:inline">- </span> The Smartest
            <br className="hidden md:block" /> Way to Go{" "}
            <span className="block md:inline"> Plant-Based</span>
          </span>
        </h1>
        {/* Subheadline */}
        <p className="text-center text-[#888] text-md max-w-2xl mb-6 font-light pt-5">
          Your all-in-one app to discover, order, and book plant-powered meals
          <br />
          while making a real impact on the planet.
        </p>
        {/* App Store Buttons */}
        <div className="flex flex-col-reverse md:flex-row gap-3 mb-[25%] md:mb-6">
          <a
            href="#"
            className="bg-[#0AAD0B] hover:bg-[#09990a] transition text-white font-semibold rounded-md px-7 py-2 flex justify-center  items-center gap-3 shadow"
          >
            <Image
              width={20}
              height={20}
              alt="App Store"
              src={AppStoreImage}
              className="w-7 h-7"
            />
            <span className="flex md:flex-col flex leading-tight">
              <span className="text-xs mr-1 md:mr-0 md:text-[10px] md:font-extralight">
                Download on the
              </span>
              <span className="text-xs md:text-sm">App Store</span>
            </span>
          </a>
          <a
            href="#"
            className="bg-[#0AAD0B] hover:bg-[#09990a] transition text-white font-semibold rounded-md px-7 py-2 flex justify-center items-center gap-3 shadow"
          >
            <Image
              width={20}
              height={20}
              alt="Google Play"
              src={GplayImage}
              className="w-7 h-7"
            />
            <span className="flex md:flex-col leading-tight">
              <span className="text-xs mr-1 md:mr-0 md:text-[10px] md:font-extralight">
                Get it on
              </span>
              <span className="text-xs md:text-sm">Google Play</span>
            </span>
          </a>
        </div>
        {/* Hero Phone Image */}
        <div className="relative flex w-screen items-center justify-center mt-10">
          {/* Gradient background behind the phone image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2  h-[400px] bg-gradient-to-t from-[#F5FFF5] to-white z-0 pointer-events-none w-full" />
          <Image
            width={500}
            alt="App preview"
            src={CowFaceImage}
            className=" mt-4 z-10 h-full"
          />
        </div>
        {/* Scroll Down Indicator */}
        <div className="absolute hidden lg:flex right-2 bottom-2 lg:right-[5%] lg:top-[80%] flex flex-col items-center gap-2 z-20">
          {/* <span className="text-xs md:text-sm text-[#888] -rotate-90 mb-4 md:mb-8">
            Scroll Down
          </span> */}

          {/* <Image
            width={32}
            height={32}
            alt="Scroll Down"
            src={ScrollDownImage}
            className="w-8 md:w-10 lg:w-12 h-auto mt-1 md:mt-2 mb-2 md:mb-4 z-10"
          /> */}
        </div>
      </main>
    </>
  );
};

export default HeroSection;
