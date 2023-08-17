'use client'
import Image from "next/image"
export default function MeetOurAgents () {
    const socialIcons = [
        {
            img:'/Facebook.png',
            url:'',
        },
        {
            img:'/Twitter.png',
            url:'',
        },
        {
            img:'/Instagram.png',
            url:'',
        },
    ]
    const agentData = [
        {
            img:"/Rectangle-57.png",
            name:'Anna Banks',
            position:'Comodor Real Etstate agency Limited',
            description:'I have been in the agency bussiness with a couple of good experiences, sold several houses around stack citu USA',
            number:'',
            email:'',
        },
        {
            img:"/Rectangle 72.png",
            name:'Shelly Cyrills',
            position:'Comodor Real Etstate agency Limited',
            description:'I have been in the agency bussiness with a couple of good experiences, sold several houses around stack citu USA',
            number:'',
            email:'',
        },
        {
            img:"/Rectangle 79.png",
            name:'James Miller',
            position:'Comodor Real Etstate agency Limited',
            description:'I have been in the agency bussiness with a couple of good experiences, sold several houses around stack citu USA',
            number:'',
            email:'',
        },
    ]
    const numbers = [
        {
            number:'590',
            name:"Agents & Agency",
        },
        {
            number:'1,567',
            name:"Happy Client every year",
        },
        {
            number:'990',
            name:"Awards Won",
        },
        {
            number:'2,390',
            name:"New Listing Every Week",
        },
    ]
    return <>
<div className=" py-20 text-center ">
    <h1 className="text-red1 text-[20px] font-bold">OUR REGISTERED AGENTS</h1>
    <div className="text-[43px] font-bold leading-[53px]">Meet Our Agents</div>
    <div className=" grid grid-cols-3 place-items-center py-20 px-20">

        {
            agentData.map((agent,index)=> {
                    return <div className="w-[414px] text-left flex flex-col drop-shadow-2xl shadow-2xl" key = {index}>
                    <div className="w-[414px] px-[40px] h-[263px] relative rounded-t-[15px]">
                    <Image alt = "" src = {agent.img} className="z-0" layout="fill" objectFit="cover" objectPosition="center"/>
                    <div className="relative mt-[30px] z-10 flex flex-row justify-between items-start">
                    <h1 className="w-[62px] h-[21px] bg-red1 rounded-[3px] flex flex-row items-center justify-center text-white text-[9px]">5 Listing</h1>
                    <div   className="flex flex-col items-center gap-[5px]">
                   {
                    socialIcons.map((element,idx)=> {
                        return   <div key = {idx} className="w-[22px] flex items-center justify-center h-[21px] bg-red1">
                            <Image alt = '' src = {element.img} width={16} height={13}/>
                        </div>
                    
                    })
                   }
                   </div> 
                    </div>
                    </div>
                    <div className="py-[14px] px-[32px]">
                        <div className="flex flex-row items-center justify-between">
                        <div>
                        <h1 className="text-[24px] font-bold leading-[30px] ">{agent.name}</h1>
                        <div className="font-normal text-[15px] leading-[18px]">{agent.position}</div>
                        </div>
                            <Image alt = "" src = "/Checked-User-Male.png" width={30} height={28}/>
                        </div>
                        <div className="w-[333px] text-[15px] mt-[16px] text-[#6F6666]">{agent.description}</div>
                        <div className="flex flex-row items-center justify-between py-[16px] border-t-2 border-t-gray-500">
                        <div className="w-[113px] h-[31px] flex justify-center items-center text-white rounded-[3px] bg-red1">View Profile</div>
                        <div className="flex flex-row items-center gap-[13px]">
                            <Image alt = '' src = "/Hang Up.png" width={30} height = {30}/>
                            <Image alt = '' src = "/Group Message.png" width={30} height = {30}/>
                        </div>
                        </div>
                    </div>
                </div>
            })
        }
    


    </div>

    <div className="w-full bg-red1 flex flex-row items-center px-20 justify-between py-20">
           {
            numbers.map((num,idx)=> {
                return <div className="flex flex-col items-center text-white " key ={idx}>
                            <div className="text-[36px] font-bold">{num.number}</div>
                            <div>{num.name}</div>
                </div>
            })
           } 
    </div>
</div>
    
    </>


}