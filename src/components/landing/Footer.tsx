import React from "react";
import { Link } from "react-router-dom";
import { AppStoreButtons } from "./AppStoreButtons";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-stretch overflow-hidden">
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col items-center -mb-[300px] mt-[35px] md:mt-[20px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75a2afd5ddae8eb88d5bb2580c7eb64c7db72c458a302bd8eb8b73e7183d7ff9?placeholderIfAbsent=true"
            alt="Perch app icon"
            className="aspect-[1] object-contain w-[63px] rounded-[16px]"
          />
          <h2 className="text-black text-[45px] font-semibold leading-[45px] text-center mt-5 max-w-[450px] mx-auto max-md:text-[32px] max-md:leading-[38px]">
            Try Perch out for<br />yourself
          </h2>
          <div className="mt-5 w-[450px] max-w-[90%]">
            <AppStoreButtons />
          </div>
        </div>
        <div className="flex flex-col items-center mt-[370px] md:mt-[380px]">
          <nav className="flex items-center gap-4 md:gap-6 text-sm md:text-base text-[#666666] opacity-40 font-semibold whitespace-nowrap leading-none">
            <Link
              to="/about"
              className="hover:text-[rgba(36,188,138,1)] hover:opacity-100 transition-all"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="hover:text-[rgba(36,188,138,1)] hover:opacity-100 transition-all"
            >
              Blog
            </Link>
            <Link
              to="/careers"
              className="hover:text-[rgba(36,188,138,1)] hover:opacity-100 transition-all"
            >
              Careers
            </Link>
          </nav>
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://twitter.com/perchapp"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-100 transition-opacity"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fecfeb2c47076adbf1d9911739ad49a8fa8a14547a6ffb5b90b6cada20ffc8b?placeholderIfAbsent=true"
                alt="Twitter"
                className="aspect-[1] object-contain w-[22px] self-stretch shrink-0 my-auto"
              />
            </a>
            <a
              href="https://instagram.com/perchapp"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-100 transition-opacity"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5ef6bc2a24e1772fb069cebe3a592e4f4705adb1dfda33c85c264d4997946b5?placeholderIfAbsent=true"
                alt="Instagram"
                className="aspect-[1] object-contain w-[23px] self-stretch shrink-0 my-auto"
              />
            </a>
          </div>
        </div>
        <div className="w-full relative">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a8c0ef6cf5c8cf87b35002ca26fbf8329a057988463aa81a06d7bbf6884ff7f?placeholderIfAbsent=true"
            alt="Footer background"
            className="w-full object-contain"
          />
        </div>
      </div>
    </footer>
  );
};
