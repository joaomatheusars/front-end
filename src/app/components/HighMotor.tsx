'use client';


import React from "react";
import Image from 'next/image'

const HighMotor = () =>{

    return (
        <div className="mt-48 text-grayMenu flex justify-center items-center flex-col font-light">
            <div className="flex flex-col gap-10 justify-center items-center">
                <h1 className="font-bold text-4xl">High Efficiency Motor</h1>
                <h3>More torque for powerful riding with 22% maximum hill climbing capability.</h3>
            </div>
            
            <div className="relative h-[792px] w-[1408px] " style = {{objectFit: "cover", }}>
                <Image src={"/hemimg.svg"} alt="Full Stack Week" fill />
            </div>  
        </div>
    )
}

export default HighMotor;
