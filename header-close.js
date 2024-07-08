import React from "react";

export const HCloseBtn = ({fill, width}) => {

  return  <div className={`max-w-[${width}px] w-full flex justify-between`}>
        <span></span>
        <svg class="h-6 w-6 cursor-pointer translate-x-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={fill} aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </div>
}
