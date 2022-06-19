import React, { FC, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Card } from "@components/ui";
import { CardProps } from "@components/ui/Card";
import IconArrowleftDark from "@assets/svg/blcak/arrowleft.svg";
import IconArrowleftGold from "@assets/svg/gold/arrowleft.svg";
import IconArrowRightGold from "@assets/svg/gold/arrowright.svg";
import IconArrowRightDark from "@assets/svg/blcak/arrowright.svg";
import { useTheme } from "next-themes";
import Link from "next/link";

interface SliderProps {
    list: CardProps[]
}

const Slider: FC<SliderProps> = ({ list }) => {

    //customiz next and prev button
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    const { theme, setTheme } = useTheme();

    return (
        <div className=" w-full flex flex-col justify-center items-center ">
            <div className="w-full flex justify-center items-center">
                <Swiper
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            width: 640,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                        992: {
                            width: 992,
                            slidesPerView: 2
                        },
                    }}
                    spaceBetween={60}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={false}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                >
                    {list?.map((item: CardProps, index: number) => {
                        return (
                            <SwiperSlide
                                key={index}
                            >
                                <div className="w-12/12  flex flex justify-center items-center">
                                    <Card
                                        url={item.url}
                                        alt={item.alt}
                                        caption={item.caption}
                                    />
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
            <div className="w-full flex flex-row justify-between items-center mt-10">
                <div className="flex rtl:flex-row-reverse justify-between flex-row w-3/12 md:w-2/12 lg:w-1/12">
                    <div
                        className="cursor-pointer border border-dark dark:border-gold p-3 w-[3rem] h-[3rem] flex jusify-center items-center"
                        ref={navigationPrevRef}>
                        {theme == "dark" ? <IconArrowleftGold className={'w-10 h-5 transition duration-100 ease-in-out'} /> : <IconArrowleftDark className={'w-10 h-5 transition duration-100 ease-in-out'} />}
                    </div>
                    <div
                        className="cursor-pointer border border-dark dark:border-gold p-3 w-[3rem] h-[3rem] flex jusify-center items-center"
                        ref={navigationNextRef} >
                        {theme == "dark" ? <IconArrowRightGold className={'w-10 h-5 transition duration-100 ease-in-out'} /> : <IconArrowRightDark className={'w-10 h-5 transition duration-100 ease-in-out'} />}
                    </div>
                </div>
                <span className="h-[3px] w-4/12 md:w-7/12 lg:w-9/12 bg-dark dark:bg-gold" />
                <Link href="/"><h6 className="cursor-pointer border border-dark dark:border-gold text-xl dark:text-gold text-dark text-center font-medium flex items-cenetr justify-center p-3 w-3/12 md:w-2/12 lg:w-[8rem] h-[3rem] flex jusify-center items-center font-poppines">See all</h6></Link>
            </div>
        </div>
    );
}
export default Slider
