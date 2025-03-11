import React from "react";

export const AppStoreButtons = () => {
  return (
    <div className="flex items-center gap-4 text-white font-semibold leading-none justify-center flex-wrap">
      <a 
        href="https://apps.apple.com/app/perch-read-better/id6450953714"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#24BC8A] border border-[rgba(255,255,255,0.12)] shadow-[0px_0.1px_1px_0px_rgba(0,0,0,0.10),0px_0.1px_1px_0px_rgba(0,0,0,0.10),0px_0.2px_2px_0px_rgba(0,0,0,0.08),0px_1px_4px_0px_rgba(0,0,0,0.06),0px_-2px_12px_0px_rgba(255,255,255,0.25)_inset] flex items-center gap-2 justify-center h-[42px] px-6 rounded-[12px] hover:opacity-90 transition-opacity"
      >
        <svg width="14" height="16" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.3212 9.53812C12.3072 7.27312 14.1772 6.18812 14.2622 6.13612C13.1912 4.58912 11.4852 4.36112 10.8862 4.33612C9.41423 4.17812 8.00023 5.22812 7.25323 5.22812C6.49023 5.22812 5.32523 4.35812 4.08923 4.38712C2.48323 4.41612 1.00523 5.34812 0.208227 6.80312C-1.43077 9.77912 -0.220773 14.1731 1.34323 16.3991C2.11723 17.4851 3.02823 18.7061 4.24823 18.6571C5.43723 18.6031 5.89523 17.9051 7.32523 17.9051C8.74023 17.9051 9.16523 18.6571 10.4142 18.6281C11.7072 18.6031 12.4952 17.5171 13.2412 16.4191C14.1352 15.1591 14.5052 13.9271 14.5192 13.8661C14.4902 13.8561 12.3382 12.9781 12.3212 9.53812Z" fill="white"/>
          <path d="M10.0772 2.87411C10.7052 2.09411 11.1172 1.02811 10.9892 0.00012207C10.1102 0.0371221 9.04323 0.626122 8.38723 1.38812C7.80123 2.06412 7.30523 3.16512 7.44823 4.16012C8.42323 4.23812 9.42023 3.63811 10.0772 2.87411Z" fill="white"/>
        </svg>
        <span className="text-[14px]">App Store</span>
      </a>
      <a 
        href="https://play.google.com/store/apps/details?id=com.perchapp"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#24BC8A] border border-[rgba(255,255,255,0.12)] shadow-[0px_0.1px_1px_0px_rgba(0,0,0,0.10),0px_0.1px_1px_0px_rgba(0,0,0,0.10),0px_0.2px_2px_0px_rgba(0,0,0,0.08),0px_1px_4px_0px_rgba(0,0,0,0.06),0px_-2px_12px_0px_rgba(255,255,255,0.25)_inset] flex items-center gap-2 justify-center h-[42px] px-6 rounded-[12px] hover:opacity-90 transition-opacity"
      >
        <svg width="15" height="17" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.477539 0.682617C0.291016 0.869141 0.177734 1.16797 0.177734 1.5293V17.4668C0.177734 17.8281 0.291016 18.127 0.477539 18.3135L0.537109 18.373L9.33984 9.57031V9.42578L0.537109 0.623047L0.477539 0.682617Z" fill="white"/>
          <path d="M12.3242 12.5547L9.33984 9.57031V9.42578L12.3242 6.44141L12.3984 6.48633L15.9453 8.49219C16.8516 9.01172 16.8516 9.98438 15.9453 10.5039L12.3984 12.5098L12.3242 12.5547Z" fill="white"/>
          <path d="M12.3984 12.5098L9.33984 9.5L0.477539 18.3135C0.775391 18.6406 1.25391 18.6855 1.80273 18.3584L12.3984 12.5098Z" fill="white"/>
          <path d="M12.3984 6.48633L1.80273 0.637695C1.25391 0.310547 0.775391 0.355469 0.477539 0.682617L9.33984 9.5L12.3984 6.48633Z" fill="white"/>
        </svg>
        <span className="text-[14px]">Google Play</span>
      </a>
    </div>
  );
};
