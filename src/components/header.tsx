import Image from "next/image";
import { useState } from "react";
import HeaderLogo from "../../public/headerLogo.svg";
import HeaderGplay from "../../public/headerGplay.svg";
import HeaderAppStore from "../../public/headerAppStore.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-white w-full relative">
      {/* Header Bar */}
      <header className="flex justify-between items-center w-full max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <span className="cursor-pointer grow-[3.5]">
          <Image
            width={120}
            height={40}
            alt="NoMoo logo"
            src={HeaderLogo}
            className="cursor-pointer"
          />
        </span>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex justify-center gap-8 text-[15px] font-medium text-[#222] grow-1">
          <span className="text-[#0AAD0B] font-semibold relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-[#0AAD0B] after:rounded-full after:content-['']">
            Home
          </span>
          <span className="hover:text-[#0AAD0B] cursor-pointer">How it works?</span>
          <span className="hover:text-[#0AAD0B] cursor-pointer">Key Features</span>
          <span className="hover:text-[#0AAD0B] cursor-pointer">FAQs</span>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2 grow-2 justify-end">
          <Image width={36} height={36} alt="Google Play" src={HeaderGplay} className="cursor-pointer" />
          <Image width={36} height={36} alt="App Store" src={HeaderAppStore} className="cursor-pointer" />
          <button className="ml-2 px-4 py-2 rounded-md bg-[#0AAD0B] text-white font-bold text-[15px] shadow hover:bg-[#09990a] transition">
            Join the waitlist
          </button>
        </div>

        {/* Hamburger Icon - Show only when menu is closed */}
        {!isMenuOpen && (
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 bg-[#0AAD0B] rounded-md p-2 z-50"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-5 h-0.5 bg-white dark:bg-white" />
            <span className="block w-5 h-0.5 bg-white dark:bg-white mt-1" />
            <span className="block w-5 h-0.5 bg-white dark:bg-white mt-1" />
          </button>
        )}
      </header>

      {/* Full-Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-white z-40 flex flex-col px-6 py-6">
          {/* Close Icon */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-black text-3xl font-light z-50"
            aria-label="Close menu"
          >
            &times;
          </button>

          {/* Mobile Navigation Content */}
          <nav className="mt-14 flex flex-col gap-4 text-[#222] font-medium text-[16px]">
            <span className="text-[#0AAD0B] font-semibold">Home</span>
            <span className="hover:text-[#0AAD0B] cursor-pointer">How it works?</span>
            <span className="hover:text-[#0AAD0B] cursor-pointer">Key Features</span>
            <span className="hover:text-[#0AAD0B] cursor-pointer">FAQs</span>
          </nav>

          {/* App Store Buttons */}
          <div className="flex gap-3 mt-6">
            <Image width={40} height={40} alt="Google Play" src={HeaderGplay} className="cursor-pointer" />
            <Image width={40} height={40} alt="App Store" src={HeaderAppStore} className="cursor-pointer" />
          </div>

          {/* CTA */}
          <button className="mt-6 w-full px-4 py-3 rounded-md bg-[#0AAD0B] text-white font-bold text-[16px] shadow hover:bg-[#09990a] transition">
            Join the waitlist
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
