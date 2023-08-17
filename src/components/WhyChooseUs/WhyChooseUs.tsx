"use client";
import Image from "next/image";

export default function WhyChooseUs() {
  const data = [
    {
      name: "24 Hours Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "/Headset.png",
    },
    {
      name: "User Admin Panel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "/Admin-Settings-Male.png",
    },
    {
      name: "Mobile Friendly",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "/Headset.png",
    },
  ];

  return (
    <div className="bg-white">
      <div className="py-20 px-20 container mx-auto ">
        <h1 className="font-bold text-[30px] leading-[37px] text-[#5E4E4E]">
          Why Choose Our Property
        </h1>
        <p className="text-red1 text-[14px] font-bold">
          Check video presentation to find out more about us .
        </p>
        <div className="flex flex-row gap-[70px] mt-[60px] ">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col gap-[40px]">
              {data.map((element, idx) => {
                return (
                  <div
                    className="flex flex-row items-center gap-[20px]"
                    key={idx}
                  >
                    <div className="w-[100px] h-[94px] bg-red1 rounded-[5px] flex flex-row items-center justify-center">
                      <Image alt="" width={60} height={60} src={element.img} />
                    </div>
                    <div className="flex flex-col gap-2 text-black">
                      <h1 className="font-bold text-[24px] leading-[30px]">
                        {element.name}
                      </h1>
                      <div className="max-w-[367px] text-[13px] font-bold">
                        {element.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="w-[720px] h-[362px] rounded-[9px] flex flex-row items-end justify-end "
              style={{ backgroundImage: "url(/Rectangle-58.png)" }}
            >
              <div className="max-w-[270px] flex flex-col gap-[25px] px-[21px] py-[20px] h-[190px] rounded-[7px] bg-[#B41F1FD4] mr-5 mb-5">
                <p className="text-[14px] font-semibold">
                  Our Website is super responsive and and full of dynamic
                  properties , from all over the world, try by countries and
                  cities in your search
                </p>
                <h1 className="text-white flex flex-col">
                  Mr Uche
                  <span className="text-[#FAFF00] text-[12px] font-semibold">
                    Coordinating CEO
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[78px] flex flex-row justify-between w-full container mx-auto ">
        <div className="max-w-[361px] h-[525px] bg-red1 flex flex-col px-[43px] items-center justify-center  ">
          <h1 className="font-bold text-[24px]">Explore Best Cities </h1>
          <p className="font-semibold text-[15px] leading-[18px]">
            Take a tour with us as we show your new, big and best cities of the
            world. Just incase you want to invest on a property, you can take a
            peak over this section to see very beautifu cities you can own a
            home.
          </p>
        </div>
        <div className="w-full max-h-[525px] relative ">
          <Image alt="" layout="fill" src="/newYork.png" />
        </div>
        <div className="w-full max-h-[525px] bg-red1 relative">
          <Image alt="" layout="fill" src="/spain.png" />
        </div>
        <div className="w-full max-h-[525px] bg-red1 relative">
          <Image alt="" layout="fill" src="/paris.png" />
        </div>
      </div>
    </div>
  );
}
