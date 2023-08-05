
'use client'

import Button from "./button/page"
import Input from "./input/page"

import Image from "next/image"
// import usericon from '/usericon.png'

export default function Navbar () {
const navData = [
    {
        name:'Home',
        url:'',
    },
    {
        name:'About Us',
        url:'',
    },
    {
        name:'Property',
        url:'',
    },
    {
        name:'Agency',
        url:'',
    },
    {
        name:'Services',
        url:'',
    },
    {
        name:'Contact Us',
        url:'',
    },
]

    return <>
    <div className="w-full py-[29px] px-[54px] flex flex-row items-center justify-center bg-white gap-10">
        <div>
            <img src="/logo.png" alt="" />
        </div>
        <Input
        className="text-red1 border-2 rounded-md border-red1 outline-none px-3 py-1"
        placeholder="Search"
        type = "text"
        />
        <div className="flex flex-row items-center gap-[22px] text-red1 text-[12px] leading-[14.9px]">
            {
                navData.map((element,idx)=> {
                    return <div className="cursor-pointer">{element.name}</div>
                })
            }
        </div>


        <div className="flex flex-row items-center gap-[14px]">
            <div className="flex flex-row items-center gap-[14px] pl-[14px] border-l-2 border-gray-100">
                <Image src = '/usericon.svg' alt = 'user icon' width= {19} height={19}></Image>
                <div className="text-[12px] leading-[14.9px] text-red1">Sign in</div>
            </div>
            <div className="flex flex-row items-center gap-[14px] px-[14px] border-r-2 border-l-2 border-gray-100">
                <Image src = '/Geography.svg' width = {30} height = {30} alt = 'geography'/>
                <Image src = '/Polygon 1.svg' width = {14} height = {14} alt = 'geography'/>
            </div>
        </div>

        
        <div>
            <Button className="px-[16px] py-[4px] flex flex-row items-center gap-[12px] bg-red1 rounded-[5px]">
              <Image src = "/Joyent.svg" width = {30} height = {30} alt = "Button icon"/> 
              Add Properties 
            </Button>
        </div>
    </div>
    </>
}