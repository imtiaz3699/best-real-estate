
export default function HeroSection () {
    return <div className="w-full h-[389px] bg-cover text-black flex flex-col justify-center" style={{ backgroundImage: "url(/slide.jpg)" }}>
        <div className="flex flex-col  ml-20 text-white">
            <div className="font-bold text-[14px] leading-[17.42px] ">Reald Estate Searching Platform</div>
            <div className="text-[30.55px] font-bold leading-[30px]">Find The House of Your Dreams<br />Using Our Platform </div>
            </div> 
            <div className="w-[674px] ml-20 h-[54px] mt-[50px] rounded-[9px] border-4 border-[#FFFFFF70] ">
                <div className="w-full h-full flex flex-row items-center bg-white rounded-[9px]">

                <div className="w-[153px] h-full flex flex-col justify-center border-r-2 border-r-gray-500">
                    <input type="text" className="text-[9px] font-normal leading-[11.65px] w-full h-full outline-none pl-3 " placeholder="What are you looking for? "/>
                </div>
                <div className="w-[105px] h-full flex flex-row items-center gap-[18px] px-[15px] border-r-2 border-r-gray-500">
                <h1 className="text-[9px] font-normal leading-[11.65px] ">All Status</h1>                    
                <img src="/dropDown.png" alt="" />
                </div>
                <div className="w-[105px] h-full flex flex-row items-center justify-center gap-[18px] px-[5px] border-r-2 border-r-gray-500">
                <h1 className="text-[9px] font-normal leading-[11.65px] ">All Contries</h1>                    
                <img src="/dropDown.png" alt="" />
                </div>
                <div className="w-[105px] h-full flex flex-row items-center justify-center gap-[18px] px-[5px] border-r-2 border-r-gray-500">
                <h1 className="text-[9px] font-normal leading-[11.65px] ">All Contries</h1>                    
                <img src="/dropDown.png" alt="" />
                </div>
                
                <div className="w-[105px]"></div>

                <div className="w-[105px] h-full flex flex-row items-center justify-center bg-red1 gap-[18px] px-[5px] border-r-2 border-r-gray-500">
                    <h1 className="text-[13px] leading-[16.14px]">Search</h1>
                </div>
                </div>  
            </div>
            
                        
            


    </div>
}