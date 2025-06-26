// import GreenChoicesSection from './greenChoicesSection'


const GreenChoicesSection = () => {
  return (
    <>
  {/* Large Screen */}
    <div className="hidden lg:flex justify-center items-center md:p-2 lg:p-8 bg-white dark:bg-white">
      <img
        src="/section2/section2LargeScreen.svg"
        alt="Section 2"
        className="w-[90%] h-[90%]"
      />
    </div>

    {/* Medium Screen */}
     <div  className="hidden md:flex dark:bg-white justify-center my-8 lg:hidden bg-white dark:bg-white">
    <img
      src="/section2/mediumScreenSection2.svg"
      alt="Section 2"
      className="w-[80%] h-[80%] hidden md:flex lg:hidden"
    />
     </div>
     <div  className="hidden md:flex justify-center my-8 lg:hidden bg-white dark:bg-white">
        <img
      src="/section2/mediumScreenSection2b.svg"
      alt="Section 2"
      className="w-[80%] h-[80%] hidden md:flex lg:hidden"
    />
     </div>
    
  {/* Phone View */}
  <div className="w-full p-2 md:hidden bg-white dark:bg-white">
  </div>
  {/* <div className="w-full bg-green-300  flex-col h-[100%] md:hidden flex-col justify-center "> */}
 
    <img
      src="/section2/smallScreenSection2b.svg"
      alt="Section 2A"
      className="w-full h-full md:hidden dark:bg-white"
    />
    
    

  </>
  );
};

export default GreenChoicesSection
