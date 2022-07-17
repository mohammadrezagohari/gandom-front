import cn from "classnames";
import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

import Card, { CardProps } from "@components/ui/Card/Card";
import { SliderDataSeo, SliderDataWeb, SliderDataApp } from "@components/pages-components/data";
import Slider from "../../../../common/Slider";
import PersonalCard from "@components/ui/PersonalCard";

const tabs = [
    { label: 'webDesign', data: SliderDataSeo, id: 1 },
    { label: 'appDesign', data: SliderDataWeb, id: 2 },
    { label: 'uxuxDesign', data: SliderDataSeo, id: 3 },
    { label: 'graphicDesign', data: SliderDataWeb, id: 4 },
    { label: 'softWareDesign', data: SliderDataSeo, id: 5 },
    { label: 'seo', data: SliderDataApp, id: 6 },
]

const CardType = {
    personal: PersonalCard,
    general: Card,
}
const Tab = () => {
    const [tabValue, setTabValue] = useState<number>()
    const [first, setfirst] = useState<CardProps[]>([])
    const { t } = useTranslation('translation');

    useEffect(() => {
        setTabValue(1)
        setfirst(tabs[0].data)
    }, [])

    return (
        <div className="w-full flex-col">
            <div className="w-full flex items-center justify-center">
                <h2 className="font-bold whitespace-nowrap mb-1 md:mb-3 font-Poppins rtl:font-yekanBakh text-dark text-2xl md:text-3xl lg:text-4xl dark:text-gold ltr:mr-10 rtl:ml-10">
                    {t("ourWorks")}
                </h2>
                <span className="h-[3px] w-full bg-dark dark:bg-gold" />
            </div>
            <ul className="w-full my-4 flex justify-between overflow-x-scroll lg:overflow-auto">
                {tabs.map((item: any, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => { setfirst(item.data); setTabValue(item.id) }}
                            className={cn("py-5 flex justify-center items-center transition-colors duration-500")}>
                            <div className={cn("block w-[8rem] md:w-[10rem] flex justify-center items-center lg:w-fit pt-2 pb-3 md:px-10 lg:pl-3 md:pr-1 md:pl-1 font-light text-gray-dark border-b-2 text-sm md:text-lg border-transparent cursor-pointer hover:border-dark hover:text-dark hover:dark:border-gold dark:hover:text-gold dark:text-gray-light transition duration-200 ease-in-out",
                                item.id == tabValue ? "border-b-2 border-dark dark:border-gold text-gray-darkFull font-bold dark:text-gold" : "")}>
                                <span className="text-justify font-Poppins block rtl:font-Yekanbakh whitespace-nowrap text-lg md:text-xl ">{t(item.label)}</span>
                            </div>
                        </div>
                    );
                })}
            </ul>
            <div className="w-full ">
                <Slider list={first} cardMode="general" />
            </div>
        </div>
    );
}
export default Tab