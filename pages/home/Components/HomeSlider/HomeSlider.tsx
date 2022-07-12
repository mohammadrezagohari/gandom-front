import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import { Slider } from "@components/common";
import Card, { CardProps } from "@components/ui/Card";
import PersonalCard from "@components/ui/PersonalCard";

interface HomeSliderProps {
    list: CardProps[],
    cardMode: "personal" | "general",
    title: string
}
const CardType = {
    personal: PersonalCard,
    general: Card,
}

const HomeSlider: FC<HomeSliderProps> = ({ list, cardMode, title }) => {
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
                <Slider
                    cardMode={cardMode}
                    list={list}
                />
            </div>
        </div>
    );
}
export default HomeSlider