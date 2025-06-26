import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#F5FFF5] to-white border-t border-[#E6F6E6] pt-8 pb-4 px-4">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left: Logo and Description */}
        <div className="flex flex-col gap-3 min-w-[200px] flex-1">
          <img src="/footerAssets/logowithname.svg" alt="NoMoo Logo" className="h-8 mt-2 mb-1 self-start" />
          <p className="text-[#444] text-xs sm:text-sm max-w-xs mb-2">
            Your all-in-one app to discover, order, and book plant-powered meals while making a real impact on the planet.
          </p>
          <div className="flex gap-2">
            {['linkedin', 'facebook', 'twitter', 'instagram'].map((platform) => (
              <a key={platform} href="#" className="hover:opacity-80" aria-label={platform}>
                <img src={`/footerAssets/${platform}.svg`} alt={platform} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-col gap-2 min-w-[140px] flex-1">
          <div className="font-semibold text-[#222] mb-2">Quick links</div>
          {['Home', 'How it works?', 'Key features', 'FAQs'].map((link) => (
            <a key={link} href="#" className="text-[#444] text-sm hover:text-[#00C853]">
              {link}
            </a>
          ))}
        </div>

        {/* Right: Newsletter */}
        <div className="flex flex-col gap-2 min-w-[240px] flex-1">
          <div className="font-semibold text-[#222] mb-2">Subscribe to our newsletter</div>
          <form className="flex flex-col sm:flex-row gap-2 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border border-[#E6F6E6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C853]"
            />
            <button
              type="submit"
              className="bg-[#00C853] text-white font-semibold rounded-md px-4 py-2 text-sm hover:bg-[#009e3a] transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[#888] text-xs max-w-xs">
            Informative insights and practical knowledge to align your values team effectively. No jargon. No clutter.
            No corporate jumble. Just a friendly newsletter, delivered bi-monthly.
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-3 mt-8 pt-4 text-xs text-[#888] border-t border-[#E6F6E6]">
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          <a href="#" className="hover:text-[#00C853]">Terms &amp; Conditions</a>
          <a href="#" className="hover:text-[#00C853]">Privacy Policy</a>
        </div>
        <div className="text-center">
          © 2025 <span className="text-[#00C853] font-semibold">NoMoo</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
