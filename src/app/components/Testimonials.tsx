'use client';


import React from "react";
import Image from 'next/image'

const Testimonials = () =>{

    return (
        <div className="mt-48 text-grayMenu flex justify-center items-center flex-col font-light bg-bgbg">
            <div className="flex flex-col gap-10 justify-center items-center p-16">
                <h1 className="font-bold text-4xl">Testimonials</h1>
            </div>
            <div className="flex gap-6 justify-centers items-start">
                <div className="flex flex-col w-80 p-10 h-80 justify-center items-center gap-3 border-bgray border hover:bg-white hover:shadow-lg">
                    <Image src={'/starts.svg'} width={100} height={100} alt="asd" />
                    <p className="text-center">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</p>
                    <div className="flex gap-8 mt-8">
                        <Image src={'/p1.svg'} width={48} height={48} alt="asd" />
                        <p className="font-bold">Serhiy Hipskyy <br /><span className="text-sm font-light">CEO Universal</span></p>
                    </div>
                </div>
                <div className="flex flex-col w-80 p-10 h-80 justify-center items-center gap-3 border-bgray border hover:bg-white hover:shadow-lg">
                    <Image src={'/starts.svg'} width={100} height={100} alt="asd" />
                    <p className="text-center">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
                    <div className="flex gap-8 mt-8">
                        <Image src={'/p2.svg'} width={48} height={48} alt="asd" />
                        <p className="font-bold">Justus Menke<br /><span className="text-sm font-light">CEO Eronaman</span></p>
                    </div>
                </div>
                <div className="flex flex-col w-80 p-10 h-80 justify-center items-center gap-3 border-bgray border hover:bg-white hover:shadow-lg">
                    <Image src={'/starts.svg'} width={100} height={100} alt="asd" />
                    <p className="text-center">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
                    <div className="flex gap-8 mt-8">
                        <Image src={'/p3.svg'} width={48} height={48} alt="asd" />
                        <p className="font-bold">Britain Eriksen<br /><span className="text-sm font-light">CEO Universal</span></p>
                    </div>
                </div>
            </div>

            <div className="flex p-10 gap-8">
                <button className="border-bgray border rounded-full p-3 hover:shadow-lg"><Image src={'/leftseta.svg'} width={15} height={15} alt="asd" /></button>
                <button className="bg-grayButton p-3 rounded-full hover:shadow-lg"><Image src={'/rightseta.svg'} width={15} height={15} alt="asd" /></button>
            </div>
        </div>
    )
}

export default Testimonials;
