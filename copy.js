import React from "react";

export const CopySVG = ({ copy, onClick, color }) => {

    return (<>
        {copy ?
            <svg 
            onClick={onClick}
            className="w-5 h-5  mt-1 ml-1.5 cursor-pointer" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke={color} strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="3"
                    d="M1 5.917 5.724 10.5 15 1.5" />
            </svg>

            :
            <svg 
            onClick={onClick}
            className="w-5 h-5 mt-1  ml-1.5 cursor-pointer" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill={color} viewBox="0 0 18 20">
                <path
                    d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
            </svg>
        }
    </>)
}
