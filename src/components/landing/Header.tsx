import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="self-center flex w-full max-w-[1336px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
      <Link to="/">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fa36700fa548644e2e140878e86d21a652057e1e7bd41314d2fabd85ede5c4c?placeholderIfAbsent=true"
          alt="Perch Logo"
          className="aspect-[2.91] object-contain w-14 shrink-0 my-auto mt-[5px] ml-[8px]"
        />
      </Link>
      <nav className="flex items-stretch gap-6">
        <div className="flex items-center gap-8 text-sm text-[rgba(17,17,17,1)] font-semibold whitespace-nowrap tracking-[-0.14px] leading-none my-auto">
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
        <div className="flex items-center gap-2 justify-center">
          <button className="bg-[#24BC8A] border border-[rgba(255,255,255,0.12)] shadow-[0px_0.1px_1px_0px_rgba(0,0,0,0.10),0px_0.1px_1px_0px_rgba(0,0,0,0.10),0px_0.2px_2px_0px_rgba(0,0,0,0.08),0px_1px_4px_0px_rgba(0,0,0,0.06),0px_-2px_12px_0px_rgba(255,255,255,0.25)_inset] self-stretch flex min-h-[38px] items-center gap-2 justify-center w-[38px] h-[38px] my-auto px-3 rounded-[12px] hover:opacity-90 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfb9b4edb9d5db4a6bf5e64f292dbff0fcaf600595da4677977c5162b7fd5936?placeholderIfAbsent=true"
              alt="Menu icon"
              className="aspect-[0.82] object-contain w-3.5 shadow-[0px_1px_1px_rgba(0,0,0,0.1)] self-stretch my-auto"
            />
          </button>
          <button className="bg-[#24BC8A] border border-[rgba(255,255,255,0.12)] shadow-[0px_0.1px_1px_0px_rgba(0,0,0,0.10),0px_0.1px_1px_0px_rgba(0,0,0,0.10),0px_0.2px_2px_0px_rgba(0,0,0,0.08),0px_1px_4px_0px_rgba(0,0,0,0.06),0px_-2px_12px_0px_rgba(255,255,255,0.25)_inset] self-stretch flex min-h-[38px] items-center gap-2 justify-center w-[38px] h-[38px] my-auto px-3 rounded-[12px] hover:opacity-90 transition-opacity">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f13b95158c3dfc6858ae06df9c1e2db15c2c97201cf4955f877a063cc291dc3c?placeholderIfAbsent=true"
              alt="Settings icon"
              className="aspect-[0.93] object-contain w-3.5 shadow-[0px_1px_1px_rgba(0,0,0,0.1)] self-stretch my-auto"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};
