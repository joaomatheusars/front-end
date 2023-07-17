'use client';


import React from "react";
import Image from 'next/image'

const MultipleAccessories = () =>{

    return (
        <div className="mt-48 text-grayMenu flex justify-center items-center flex-col font-light">
            <div className="flex flex-col gap-10 justify-center items-center">
                <h1 className="font-bold text-4xl">Multiple Accessories</h1>
                <h3>There are multiple modes for the scooter for your multiple needs.</h3>
            </div>
            <div className="mt-14 flex  justify-between gap-52">                
                <div className="flex items-start justify-center flex-col gap-10">
                    <h1 className="font-bold text-3xl">Golf Bag Rock</h1>
                    <div className="flex justify-center items-center gap-3">
                        <Image src='/iconcheck.svg' height={32} width={32} alt="asd" />
                        <p>Material : Aluminium alloy</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <Image src='/iconcheck.svg' height={32} width={32} alt="asd" />
                        <p>Color : Black</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <Image src='/iconcheck.svg' height={32} width={32} alt="asd" />
                        <p>Capacity : 45lbs</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <Image src='/iconcheck.svg' height={32} width={32} alt="asd" />
                        <p>Ease : Steady & adjustable</p>
                    </div>    
                </div>
                <div>
                    <Image src={'/ma01img.svg'} alt="asd" height={487} width={878} />
                </div>
            </div>


            <div className="mt-14 flex  justify-between gap-52"> 
                <div>
                    <Image src={'/ma02img.svg'} alt="asd" height={487} width={878} />
                </div>           
                <div className="flex items-start justify-center flex-col gap-10">
                    <h1 className="font-bold text-3xl">Shopping Rack</h1>
                    <div className="flex justify-center items-center gap-3">
                        <Image src='/iconcheck.svg' height={32} width={32} alt="asd" />
                        <p>Material : Aluminium alloy</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <Image src='/iconcheck.svg' height={32} width={32} alt="asd" />
                        <p>Color : Black</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <Image src='/iconcheck.svg' height={32} width={32} alt="asd" />
                        <p>Capacity : 45lbs</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <Image src='/iconcheck.svg' height={32} width={32} alt="asd" />
                        <p>Ease : Quick & adjustable</p>
                    </div>    
                </div>
            </div>

            <div className="mt-5 font-bold text-2xl border rounded-md p-5 border-grayFooter">
                <button>More Accessories Coming Soon</button>
            </div>
        </div>
    )
}

export default MultipleAccessories;
