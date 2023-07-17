'use client';


import React from "react";
import Image from 'next/image'

const InforProduct = () =>{

    return (
        <div className="mt-48 text-grayMenu flex justify-center items-center flex-col font-light">
            <div className="flex flex-col gap-10 justify-center items-center">
                <h1 className="font-bold text-4xl">Product Information</h1>
                <h3>Our Scooter has following unique design and technology features:</h3>
            </div>
            <div className="flex gap-28">
                <Image src='/infoimg.svg' alt='asd' width={748} height={706} />
                
                <div className="flex items-start justify-center flex-col gap-10">
                    <div className="flex justify-center items-center gap-3">
                        <Image src='/iconcheck.svg' height={32} width={32} alt="asd" />
                        <p>Lightweight aircraft grade aluminium frame</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <Image src='/iconcheck.svg' height={32} width={32} alt="asd" />
                        <p>Car grade lithium battery</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <Image src='/iconcheck.svg' height={32} width={32} alt="asd" />
                        <p>Self-balanced</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <Image src='/iconcheck.svg' height={32} width={32} alt="asd" />
                        <p>Plug n play</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <Image src='/iconcheck.svg' height={32} width={32} alt="asd" />
                        <p>Quick release adapter</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <Image src='/iconcheck.svg' height={32} width={32} alt="asd" />
                        <p>RFID key card</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default InforProduct;