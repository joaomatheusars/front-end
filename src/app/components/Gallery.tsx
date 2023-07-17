'use client';


import React from "react";
import Image from 'next/image'

const Gallery = () =>{

    return (
        <div className="mt-48 text-grayMenu flex justify-center items-center flex-col font-light">
            <div className="flex flex-col gap-10 justify-center items-center">
                <h1 className="font-bold text-4xl">Galley</h1>
                <h3>View gallery of our products and make yourself satisfied with our creation.</h3>
            </div>
            
            <div className="flex mt-20 gap-10">
                <div className="flex flex-col pt-52">
                    <Image src='/scotterleft.svg' alt="asd" width={633} height={485} />
                    <div className="flex flex-col gap-10">
                        <button className="p-5 border-[2px] border-grayButton rounded-md font-bold w-[80%] mt-10">Battery Images</button>
                        <button className="p-5 border-[2px] border-grayButton rounded-md font-bold w-[80%] ">Spare Parts Images</button>
                        <button className="p-5 border-[2px] border-grayButton rounded-md font-bold w-[80%] ">Charging Cable Images</button>
                    </div>                    
                </div>
                <div className="flex flex-col gap-20">
                    <Image src='/scooterright01.svg' alt="asd" width={633} height={485} />
                    <Image src='/scooterright02.svg' alt="asd" width={633} height={485} />
                </div>
            </div>

        </div>
    )
}

export default Gallery;
