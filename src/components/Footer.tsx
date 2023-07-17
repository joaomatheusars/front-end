'use client';

import Image from "next/image";
import React from "react";

const Footer = () =>{

    return (
        <div>
            <div className="mt-20 flex flex-col justify-center items-center text-grayMenu text-center">
                <div className="text-grayMenu text-center container">
                    <h1 className="font-bold text-[50px]">Subcribe To Newsletter</h1>
                    <h4 className="font-light text-[20px]">Subscribe to our newsletter to get amazing offers in future.</h4>
                </div>
                <div className="mt-10 flex justify-center items-center gap-10 container">
                    <input className="p-5 bg-grayInput rounded-md w-[400px]" type="text" placeholder="Enter your email." />
                    <button className="bg-grayButton text-white p-5 rounded-lg drop-shadow-lg">Get start</button>
                </div>
            </div>
            
            <div className="bg-grayFooter mt-40 text-whiteFooter h-full">
                <div className="flex">

                    <div className="mt-[-100px] flex justify-center items-center">
                        <Image src='/fotter-img.svg' alt="asd" width={729} height={551} />
                    </div>

                    <div className="flex justify-center gap-24 items-start mt-14 w-full">
                        <div>
                            <h2 className="font-bold text-[1.5rem] mb-8">About</h2>
                            <div className="flex flex-col gap-5">
                                <span>Company</span>
                                <span>Teams</span>
                                <span>Profile</span>
                                <span>Careers</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-[1.5rem] mb-8">Resources</h2>
                            <div className="flex flex-col gap-5">
                                <span>Contact</span>
                                <span>Application</span>
                                <span>FQA Features</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-[1.5rem] mb-8">Legals</h2>
                            <div className="flex flex-col gap-5">
                                <span>Copyright Privacy</span>
                                <span>Policy Disclaimer </span>
                                <span>Terms</span>
                                <div className="flex gap-5">
                                <Image src='/facebook.svg' alt="asd" width={32} height={32} />
                                <Image src='/twitter.svg' alt="asd" width={32} height={32} />
                                <Image src='/instagramm.svg' alt="asd" width={32} height={32} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center w-full p-5">
                    <h2>@Copyright 2021. All rights reserved.</h2>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;