import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="self-center flex w-full max-w-[1336px] items-center relative px-4 pt-[10px] max-md:max-w-full">
      {/* Logo - Centered on mobile */}
      <Link to="/" className="md:static absolute left-1/2 transform -translate-x-1/2 md:translate-x-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fa36700fa548644e2e140878e86d21a652057e1e7bd41314d2fabd85ede5c4c?placeholderIfAbsent=true"
          alt="Perch Logo"
          className="aspect-[2.91] object-contain w-14"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center ml-auto gap-6">
        <div className="flex items-center gap-8 text-sm text-[rgba(17,17,17,1)] font-semibold whitespace-nowrap tracking-[-0.14px] leading-none">
          <Link
            to="/about"
            className="hover:text-[rgba(36,188,138,1)] transition-colors"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="hover:text-[rgba(36,188,138,1)] transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/careers"
            className="hover:text-[rgba(36,188,138,1)] transition-colors"
          >
            Careers
          </Link>
        </div>
        {/* App Store Buttons - Hidden on mobile */}
        <div className="flex items-center gap-2 justify-center">
          <button className="bg-[#24BC8A] border border-[rgba(255,255,255,0.12)] shadow-[0px_0.1px_1px_0px_rgba(0,0,0,0.10),0px_0.1px_1px_0px_rgba(0,0,0,0.10),0px_0.2px_2px_0px_rgba(0,0,0,0.08),0px_1px_4px_0px_rgba(0,0,0,0.06),0px_-2px_12px_0px_rgba(255,255,255,0.25)_inset] self-stretch flex min-h-[38px] items-center gap-2 justify-center w-[38px] h-[38px] my-auto px-3 rounded-[12px] hover:opacity-90 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfb9b4edb9d5db4a6bf5e64f292dbff0fcaf600595da4677977c5162b7fd5936?placeholderIfAbsent=true"
              alt="App Store"
              className="aspect-[0.82] object-contain w-3.5 shadow-[0px_1px_1px_rgba(0,0,0,0.1)] self-stretch my-auto"
            />
          </button>
          <button className="bg-[#24BC8A] border border-[rgba(255,255,255,0.12)] shadow-[0px_0.1px_1px_0px_rgba(0,0,0,0.10),0px_0.1px_1px_0px_rgba(0,0,0,0.10),0px_0.2px_2px_0px_rgba(0,0,0,0.08),0px_1px_4px_0px_rgba(0,0,0,0.06),0px_-2px_12px_0px_rgba(255,255,255,0.25)_inset] self-stretch flex min-h-[38px] items-center gap-2 justify-center w-[38px] h-[38px] my-auto px-3 rounded-[12px] hover:opacity-90 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f13b95158c3dfc6858ae06df9c1e2db15c2c97201cf4955f877a063cc291dc3c?placeholderIfAbsent=true"
              alt="Play Store"
              className="aspect-[0.93] object-contain w-3.5 shadow-[0px_1px_1px_rgba(0,0,0,0.1)] self-stretch my-auto"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden absolute right-4 flex items-center justify-center w-[38px] h-[38px] rounded-[12px]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-20 px-5">
          <div className="flex flex-col items-center gap-8 text-lg font-semibold">
            <Link
              to="/about"
              className="hover:text-[rgba(36,188,138,1)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/blog"
              className="hover:text-[rgba(36,188,138,1)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/careers"
              className="hover:text-[rgba(36,188,138,1)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
