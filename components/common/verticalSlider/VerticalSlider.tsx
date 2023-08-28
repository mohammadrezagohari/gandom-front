import React, { FC, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import cn from "classnames";
// import required modules
import { Pagination, Navigation } from "swiper";
import { Card } from "@components/ui";
import { CardProps } from "@components/ui/Card/Card";
import IconArrowleftDark from "@assets/svg/blcak/arrowleft.svg";
import IconArrowleftGold from "@assets/svg/gold/arrowleft.svg";
import IconArrowRightGold from "@assets/svg/gold/arrowright.svg";
import IconArrowRightDark from "@assets/svg/blcak/arrowright.svg";
import { useTheme } from "next-themes";
import Link from "next/link";
import PersonalCard from "@components/ui/PersonalCard";
import { useTranslation } from "next-i18next";



import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'



export interface SliderProps {
    list: CardProps[],
    cardMode: "personal" | "general",
}
  
const CardType = {
    personal: PersonalCard,
    general: Card,
}

const VerticalSlider: FC<SliderProps> = ({ list, cardMode }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>();
    const [visible, setVisible] = useState<boolean>(false);

    const CardComponent = CardType[cardMode];

    useEffect(() => {
        setIsSidebarOpen(visible)
    }, [visible])

    useEffect(() => {
        // Disable the scroll body when opening the drawer
        visible ? document.body.classList.add('hidescroll') : document.body.classList.remove('hidescroll');
    }, [isSidebarOpen]);

    //customiz next and prev button
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    const { theme, setTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <div className=" w-full  ">
            <div style={{height:"1700px"}} className=" border-2 border-orange-400 flex items-center justify-start">
            <Swiper  
                    
                    slidesPerColumn={1}
                    slidesPerView={3} 
                    slidesPerGroup={1}
                    loop={true}
                    direction={'vertical'}
                    noSwiping= {false}
                    // pagination={{
                    //   clickable: true,
                    // }}
                    modules={[Pagination, Navigation]}
                 
                    className="mySwiper verticalSwiper"
                    style={{height:"100%"}}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                >
                    {list?.map((item: CardProps, index: number) => {
                        return (
                            <SwiperSlide
                            className="w-full px-1"
                                key={index}
                            >
                                   <Link href={`/samples/${item.id}/${item.alt}`}>

                                        <div className="max-w-12/12 flex justify-center items-center">
                                            <CardComponent
                                                 id={item.id}
                                                url={item.url}
                                                alt={item.alt}
                                                caption={item.caption}
                                                // hrefCard={item.hrefCard}
                                                jobPosition={item.jobPosition}
                                            />
                                        
                                        </div>
                                    </Link>
                            </SwiperSlide>
                        )
                    })}
            </Swiper>
            </div>
            <div className="w-full flex flex-row justify-between items-center mt-10 pt-5">
                <div className="flex rtl:flex-row-reverse justify-between flex-row  space-x-5">
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
                <span className="h-[3px] w-full bg-dark dark:bg-gold mx-10" />
                <Link href="/"><h6 className="cursor-pointer whitespace-nowrap border border-dark dark:border-gold text-xl dark:text-gold text-dark text-center font-medium flex items-cenetr justify-center p-3 w-3/12 md:w-2/12 lg:w-[8rem] h-[3rem] jusify-center items-center font-Poppins rtl:font-Yekanbakh">{t("seeAll")}</h6></Link>
            </div>
        </div>
    );
}
export default VerticalSlider
