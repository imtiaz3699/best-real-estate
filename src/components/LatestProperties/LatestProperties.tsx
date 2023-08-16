'use client'
import Image from "next/image"
export default  function  LatestProperties () {
    return <div className="bg-[#FFF3F3] py-20 text-black text-white">
    <div className="flex w-full h-full flex-col items-center container mx-auto">
<div className="flex flex-row justify-between w-full ">
    <div>
        <p  className="text-[9px]" >Browse Hot Offcrs</p>
        <h1 className="font-bold text-[24px] leading-[31px]">Latest Properties</h1>
    </div>
    <div className="flex flex-row items-center gap-[2px]">
        <div className="w-[102px] h-[28px] text-[12px] font-normal flex justify-center text-white items-center bg-red1 text-center">
            All Categories
        </div>
        <div className="w-[63px] h-[28px] text-center text-[9px] font-normal flex justify-center bg-white items-center text-center ">For Sale</div>
        <div className="w-[63px] h-[28px] text-center text-[9px] font-normal flex justify-center bg-white items-center text-center ">For Rent</div>
    </div>
</div>
<div className="grid grid-cols-3 place-items-center gap-[25px] pt-[29px]">
        <div className="w-[414px]">
                <div className="w-full h-[263px] pl-[16px] pr-[48px] pt-[21px] pt-[21px] pb-[11px] rounded-t-r-[20px] rounded-t-l-[20px] flex flex-col justify-between" style = {{backgroundImage:'url(/card-Img.png)'}}>
                    <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center text-[9px] gap-[5px] leading-[11.25px]">
                        <div className="w-[35px] h-[18px] bg-red1 flex flex-row items-center justify-center">Sale</div>
                        <div className="bg-[#FB4343] w-[62px] h-[18px] flex flex-row items-center justify-center">Apartment</div>
                    </div>
                    <div className="flex flex-col items-center gap-[10px] ">
                        <div className="bg-white w-[28px] h-[26px] bg-white rounded-[1px] flex items-center justify-center">
                        <Image src = "/heart.png" alt = "Like Button" width = {20} height = {20}/>
                        </div>
                        <div className="bg-white w-[28px] h-[26px] bg-white rounded-[1px] flex items-center justify-center">
                        <Image src = "/share.png" alt = "Like Button" width = {20} height = {20}/>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-row items-center justify-between ">
                        <div className="flex flex-row items-center gap-[9px]">
                                    <Image alt = "Location" width={30} height = {30} src = "/location.png"/>
                                <h1 className="font-bold text-[10px] leading-[12.5px] text-white drop-shadow-2xl shadow-slate-500">No 70 wall brick st. Califinia, USA</h1>
                        </div>
                        <div className="flex flex-row items-center gap-[4px]">
                                <Image alt = "Camera" width ={30} height = {30} src = "/Camera.png" />
                                <h1 className="font-bold text-[10px] leading-[12.5px] text-white">80</h1>
                        </div>
                    </div>
                    
                </div>
                    <div className="px-[23px] pt-[29px] pb-[20px] bg-white">
                        <h1 className="text-[22px] font-semibold leading-[27px]">Classic House For Sale</h1> 
                        <div className="font-semibold text-[22px] leading-[27px] text-[#FB4343]">$6000</div>
                        <div className="max-w-[367px]  text-[12px] font-semibold leading-[15px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla...</div>
                        <div className="flex flex-row items-center gap-[15px]">
                            <div className="flex flex-row items-center gap-[5px]">  
                                <Image alt = "Bed" width ={30} height = {30} src = "/bed.png"/>
                                <span>4</span>
                            </div>
                            <div className="flex flex-row items-center gap-[5px]">
                            <Image alt = "Bath Tub" width ={26} height = {26} src = "/Bathtub.png"/>
                                <span>2</span>
                            </div>
                            <div className="flex flex-row items-center gap-[5px]">
                            <Image alt = "Orthogonal View" width ={38} height = {38} src = "/Orthogonal-View.png"/>
                                <span>450 ft3</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between px-[23px] py-[6px] border-t-gray-500 border-t-2 bg-white">
                        <div className="flex flex-row items-center gap-[9px]">
                        <Image alt = "Logo" width ={27} height = {27} src = "/Ellipse-1.png"/>
                        <p>Mary Jane</p>
                        </div>
                    </div>
        </div>


</div>




    </div>
    
    </div>
}