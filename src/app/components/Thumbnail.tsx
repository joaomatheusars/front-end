'use client';

import Image from "next/image";
import React from "react";
import { Calistoga } from 'next/font/google'

const calistoga = Calistoga({subsets: ['latin-ext'], weight:[ '400']})

const Thumbnail = () =>{

    return (
        <div className="ml-5 mt-5 gap-5 justify-center items-center text-grayMenu">
            <div className="flex ml-5 mt-5 gap-5 justify-center items-center text-grayMenu">
                <div>
                    <h1 className=" border-b-[5px] font-light text-[80px] ">LET'S RIDE <br /><span className="font-bold">THE FUTURE.</span></h1>
                    <h2 className="mt-32 text-[22px]">Simple and sleek design with users <br />in mind.</h2>
                    <div className="flex  gap-20 mt-5">
                        <div className="flex items-center gap-5 mt-5">
                        <button><Image src='arrow.svg' alt="asd" width={32} height={32} className="bg-grayButton h-9 w-9 p-2"/></button>
                        <span className="font-bold"> Buy now</span>
                        </div>
                        
                        <div className="flex gap-9 items-center justify-center">
                            <p className="font-semibold">Watch our <br />video how <br />it works</p>
                            <Image src='whw.svg' alt="asd" width={80} height={80} />
                        </div>                    
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <Image src='/01.svg' alt="asd" width={855} height={646} />
                    
                    <div className="flex pr-8 mt-[-50px] justify-center items-center gap-10">
                        <div className={calistoga.className}>
                            <h1 className="opacity-100 text-[150px]">01</h1>   
                        </div>
                        <div className="border border-black rounded-full flex items-center justify-center">
                            <button className="p-5 rounded-l-full"><Image src='/leftarrow.svg' alt="asd" width={5} height={5} /></button>
                            <button className="border-l-black p-5 rounded-r-full border-l-transparent"><Image src='/rightarrow.svg' alt="asd" width={5} height={5} /></button>
                        </div>
                    </div>                
                </div>
            </div>
            

            <div className="mr-5 flex justify-center gap-10 items-center">
                <div className="h-36 w-48 flex flex-col justify-center items-center shadow-md rounded-md p-5 gap-2">
                    <h1 className="font-bold text-[2.5rem]">105 <span className="text-[1rem]">lbs</span></h1>
                    <h4 className="font-light">Net weight</h4>
                </div>
                <div className="h-36 w-48 flex flex-col justify-center items-center shadow-md rounded-md p-5 gap-2">
                    <h1 className="font-bold text-[2.5rem]">26 <span className="text-[1rem]">mph</span></h1>
                    <h4 className="font-light">Top Speedt</h4>
                </div>
                <div className="h-36 w-48 flex flex-col justify-center items-center shadow-md rounded-md p-5 gap-2">
                    <h1 className="font-bold text-[2.5rem]">38 <span className="text-[1rem]">miles</span></h1>
                    <h4 className="font-light">Max Range</h4>
                </div>
                <div className="h-36 w-48 flex flex-col justify-center items-center shadow-md rounded-md p-5 gap-2">
                    <h1 className="font-bold text-[2.5rem]">89 <span className="text-[1rem]">nm</span></h1>
                    <h4 className="font-light">Max Torques</h4>
                </div>
                <div className="h-36 flex flex-col justify-center items-center shadow-md rounded-md p-5 gap-2">
                    <h1 className="font-bold text-[2.5rem]">22% <span className="text-[1rem]">slope</span></h1>
                    <h4 className="font-light">Hill Climbing</h4>
                </div>
                <div className="h-36 w-48 flex flex-col justify-center items-center shadow-md rounded-md p-5 gap-2">
                    <h1 className="font-bold text-[2.5rem]">2x</h1>
                    <h4 className="font-light">Hydralic Disc Brakes</h4>
                </div>
            </div>
        </div>
    )
}

export default Thumbnail;