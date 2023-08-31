import React, { FC,useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Slider } from "@components/common";
import Card, { CardProps } from "@components/ui/Card";
import PersonalCard from "@components/ui/PersonalCard";
import LazyLoad from "react-lazy-load";
import Image from "next/image";
import VerticalSlider from "@components/common/verticalSlider/VerticalSlider";

interface HomeSliderProps {
    list: CardProps[],
    cardMode: "personal" | "general",
    title: string,
    singlePageLink:string,
    seeAllBtnLink:string,

} 
const CardType = {
    personal: PersonalCard,
    general: Card,
}

const HomeSlider: FC<HomeSliderProps> = ({ list, cardMode, title,singlePageLink ,seeAllBtnLink}) => {
    const { t } = useTranslation('translation');
    const [isLoading, setIsLoading] =  useState<boolean>(true)
// useEffect(() => {
//         setTimeout(() => {
//             setIsLoading(false);
//         }, 5000);
//     }, []);
    return (
        <div className="w-full flex-col">
            <div className="w-full flex items-center justify-center">
                <h2 className="font-bold whitespace-nowrap mb-1 md:mb-3 font-Poppins rtl:font-yekanBakh text-dark text-2xl md:text-3xl lg:text-4xl dark:text-gold ltr:mr-10 rtl:ml-10">
                    {t(title)}
                </h2>
                <span className="h-[3px] w-full bg-dark dark:bg-gold" />
            </div> 
            <div className="w-full py-10">
               
                {/* <LazyLoad  threshold={0.95} onContentVisible={() => {
                     setTimeout(() => {
                        setIsLoading(false);
                    }, 2000);
                    console.log("Loading...");
                    
                }}>
                {
                    isLoading?(
                        <>
                        <div className="w-full flex justify-center items-center ">
                           <img src="./logo.png" alt="" className="loaderAnimation" />
                        </div>
                        </>
                    ):(
                        <>
                         <Slider
                            cardMode={cardMode}
                             list={list}
                           />
                        </>
                    )
                }
                </LazyLoad> */}
                <div className="hidden md:block lg:block" >
                    <Slider
                         seeAllBtnLink={seeAllBtnLink}
                       singlePageLink={singlePageLink}
                        cardMode={cardMode}
                        list={list}
                    />
                </div>

                <div className="block md:hidden lg:hidden" >
                    <VerticalSlider
                      seeAllBtnLink={seeAllBtnLink}
                      singlePageLink={singlePageLink}
                      cardMode={cardMode}
                      list={list}
                    />
                </div>

            </div>
        </div>
    );
}
export default HomeSlider