'use client';


import React from "react";
import Image from 'next/image'

const Colors = () =>{

    return (
        <div className="mt-48 text-grayMenu flex justify-center items-center flex-col font-light">
            <div className="flex flex-col gap-10 justify-center items-center">
                <h1 className="font-bold text-4xl">Colors</h1>
                <h3>Checkout our products colors.</h3>
            </div>
            <div className="flex flex-col mt-16">
                
                <Image src={'/colors.svg'} alt="asd" width={1050} height={800} />
                <div className="flex justify-around mt-[-80px]">
                    <div>
                        <Image src={'/1.svg'} alt="asd" width={264} height={264} />
                    </div>
                    <div>
                        <Image src={'/2.svg'} alt="asd" width={264} height={264} />
                    </div>
                    <div>
                        <Image src={'/3.svg'} alt="asd" width={264} height={264} />
                    </div>
                    <div>
                        <Image src={'/4.svg'} alt="asd" width={264} height={264} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Colors;
