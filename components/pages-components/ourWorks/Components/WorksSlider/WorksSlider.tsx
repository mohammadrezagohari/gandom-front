import React, { FC,useState } from "react";
import { useTranslation } from "next-i18next";
import { Slider, SliderColumn } from "@components/common";
import { CardProps } from "@components/ui/Card";
import LazyLoad from "react-lazy-load";
import VerticalSlider from "@components/common/verticalSlider/VerticalSlider";
interface WorksSliderProps {
    list: CardProps[],
    cardMode: "personal" | "general",
    title: string,
    sliderMode?: "single" | "double"
}
 
const WorksSlider: FC<WorksSliderProps> = ({ list, cardMode, title, sliderMode = "single" }) => {
    const { t } = useTranslation('translation');
    const [isLoading, setIsLoading] =  useState<boolean>(true)
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
                        
                        {sliderMode == "single" ?
                    <Slider
                        cardMode={cardMode}
                        list={list}
                    />
                    : <SliderColumn
                        cardMode={cardMode}
                        list={list}
                    />
                }
                        </>
                    )
                }
                </LazyLoad> */}
                
                   
                {/* {sliderMode == "single" ?
                    <Slider
                        cardMode={cardMode}
                        list={list}
                    />
                    : <SliderColumn
                        cardMode={cardMode}
                        list={list}
                    />
                } */}
 
                {/* <div className="hidden md:block lg:block" >
                    <Slider
                        cardMode={cardMode}
                        list={list}
                    />
                </div> */}


                <div className="hidden md:block lg:block" >
                <Slider
                        cardMode={cardMode}
                        list={list}
                    />
                </div>

                <div className="block md:hidden lg:hidden" >
                    <VerticalSlider
                     cardMode={cardMode}
                     list={list}
                    />
                </div>


            </div>
        </div>
    );
}
export default WorksSlider