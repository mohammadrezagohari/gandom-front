import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import { Slider, SliderColumn } from "@components/common";
import { CardProps } from "@components/ui/Card";

interface WorksSliderProps {
    list: CardProps[],
    cardMode: "personal" | "general",
    title: string,
    sliderMode?: "single" | "double" 
}

const WorksSlider: FC<WorksSliderProps> = ({ list, cardMode, title, sliderMode= "single"}) => {
    const { t } = useTranslation('translation');
    return (
        <div className="w-full flex-col">
            <div className="w-full flex items-center justify-center">
                <h2 className="font-bold whitespace-nowrap mb-1 md:mb-3 font-Poppins rtl:font-yekanBakh text-dark text-2xl md:text-3xl lg:text-4xl dark:text-gold ltr:mr-10 rtl:ml-10">
                    {t(title)}
                </h2>
                <span className="h-[3px] w-full bg-dark dark:bg-gold" />
            </div>
            <div className="w-full py-10">
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

            </div>
        </div>
    );
}
export default WorksSlider