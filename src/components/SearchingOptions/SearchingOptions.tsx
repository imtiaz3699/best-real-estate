'use client'
import Image from "next/image";

export default function  SearchingOptions() {
    return <div className="bg-white h-[42px] bg-white">
    <div className="flex flex-row items-center justify-between h-full w-full container mx-auto">
        <div className="flex flex-row items-center gap-[8px] ">
            <h1 className="font-bold text-[9px] leading-[11.65px] text-red1">Home</h1>
            <Image src= "/redDot.png" alt="Dot" width={5} height= {5}/>
            <h1 className="font-bold text-[9px] leading-[11.65px] text-red1">Property Search</h1>
        </div>
        <div className="font-bold border w-[81px] h-[21px] flex flex-row items-center justify-center">
            <h1 className="font-bold text-[9px] leading-[11.65px] text-red1">Search </h1>
            <Image src = "/plane.png" alt = "Search Button" width = {20} height={20}/>
        </div>
    </div>
    </div>
}