// import GreenChoicesSection from './greenChoicesSection'


const ImpactTrackingSection = () => {
  return (
    <>
    {/* Large Screen */}
    <div className="hidden lg:flex justify-center items-center md:p-2 lg:p-[5%] bg-white dark:bg-white">
      <img
        src="/section3/lgScreen.svg"
        alt="Section 3 Large Screen"
        className="w-[107%] h-[107%]"
      />
    </div>
    {/* Medium Screen */}
    <div className="w-full flex-col hidden md:flex lg:hidden justify-center p-4 items-center bg-white dark:bg-white">
    <img
      src="/section3/lgScreen.svg"
      alt="Section 3 Medium Screen"
      className="w-full h-[40%]"
    />   
  </div>
  {/* Phone View */}
  <div className="w-full p-2 md:hidden bg-white dark:bg-white">
  </div>
    <img
      src="/section3/mobileScreen.svg"
      alt="Section 3 Mobile Screen"
      className="w-[160%] h-[160%] md:hidden "
    />
  </>
  );
};

export default ImpactTrackingSection
