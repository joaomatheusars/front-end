'use client';

import Image from "next/image";
import React from "react";

const HeaderMenu = () =>{

    return (
        <div className="flex justify-between  p-5 text-xs font-light border-b-[1px]">
            <Image src='/logo.svg' alt="logo" width={48} height={32}/>
            <div className="flex gap-10 justify-center items-center text-grayMenu">
                <span>PRODUCTS</span>
                <span>GALLERY</span>
                <span>CONTACT</span>
            </div>
            <div className="flex items-center justify-center gap-3">
                <button className="bg-white p-2  rounded-sm drop-shadow-lg">LOG IN</button>
                <button className="bg-grayButton text-white p-2 rounded-sm drop-shadow-lg">SING UP</button>
            </div>
        </div>
    )
}

export default HeaderMenu;