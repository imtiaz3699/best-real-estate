'use client'
import Image from 'next/image'
import React from 'react'

function Testimonials() {
const testimonials = [
    {
        img:'/elipses-1.png',
        name:'Collins Maniar',
        description:'My esperience on this platform has been top norh and i have benefited alot from this platform, i want to thank the management for this wonderful piece',
    },
    {
        img:'/lipses-2.png',
        name:'Chiddiam Andrew',
        description:'My esperience on this platform has been top norh and i have benefited alot from this platform, i want to thank the management for this wonderful piece',
    },
    {
        img:'/elipses-3.png',
        name:'Bruce Darkart',
        description:'My esperience on this platform has been top norh and i have benefited alot from this platform, i want to thank the management for this wonderful piece',
    },
    {
        img:'/ellipses-4.png',
        name:'Bath Markakos',
        description:'My esperience on this platform has been top norh and i have benefited alot from this platform, i want to thank the management for this wonderful piece',
    },
]
  return (
    <div className=' text-center'>
      <h1 className='text-red1 text-[18px]'>Testimonials</h1>
      <div className='text-[43px] font-bold leading-[53.7px] '>Our Clients Experience</div>
      <div className='grid grid-cols-4 py-20 px-20 place-items-center mt-[60px]'>

        {
            testimonials.map((test,idx)=> {
                return <div className='w-[283px] py-[20px] shadow-2xl px-[28px]' key = {idx}>
                <div className='flex flex-row items-center gap-[20px]'>
                    <div className='w-[75px] h-[75px] relative rounded-full'>
                        <Image alt="" src = {test.img} layout = 'fill' objectFit="cover" objectPosition="center"/>
                    </div>
                    <div className='text-[13px] font-bold leading-[16px]'>{test.name}</div>
                </div>
                <div className='w-[231px] text-[10px] font-bold text-left mt-[11px]'>{test.description}</div>
                <div className='bg-red1 text-white w-[105px] mt-[13px] flex items-center justify-center text-[8px] font-bold rounded-md h-[25px]'>View Via Facebook</div>
            </div>
            })
        }
        
      </div>
      <div className='bg-red1  w-full px-20 py-20'>
        <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-col text-left text-white'>
                <h1 className='text-[29px] font-bold'>NEWS LETTERS</h1>
                <p className='text-[14px] font-bold leading-[17px]'>Signup for News Letters and get the Latest news and Update</p>
            </div>
            <div className='bg-white w-[528px] h-[57px] rounded-[11px] flex flex-row items-center justify-between px-[16px] '>
                <input type="text" className='outline-none text-red1 font-bold text-[16px]' placeholder='Search'/>
                <div className='w-[122px] h-[35px] text-white bg-red1 rounded-[6px] flex flex-row items-center justify-center'>Subscribe</div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonials
