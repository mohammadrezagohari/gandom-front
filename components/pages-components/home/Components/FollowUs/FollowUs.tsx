import React, { FC, useState } from "react";
import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";
import cn from "classnames";
import FollowDark from "@assets/svg/FollowDark.svg";
import FollowLight from "@assets/svg/FollowLight.svg";

import InstagramDark from "@assets/svg/blcak/instagramDark";
import LinkdinDark from "@assets/svg/blcak/linkdinDark";
import DribbbleIcon from "@assets/svg/blcak/dribbbleIcon";
import Behance from "@assets/svg/blcak/behance";
import Youtube from "@assets/svg/blcak/youtube";
import Link from "next/link";

const FollowUs = () => {
    const { t } = useTranslation('translation');
    const { theme } = useTheme();

    //data items
    const linkData = [
        {
            url: "",
            title: "GANDOM_SOFTWER",
            icon: <InstagramDark width="3rem" height="3rem" />
        },
        {
            url: "",
            title: "GANDOM_SOFTWER",
            icon: <LinkdinDark width="3rem" height="3rem" />
        }, {
            url: "",
            title: "GANDOM_SOFTWER",
            icon: <DribbbleIcon width="3rem" height="3rem" />
        }, {
            url: "",
            title: "GANDOM_SOFTWER",
            icon: <Behance width="3rem" height="3rem" />
        }, {
            url: "",
            title: "GANDOM_SOFTWER",
            icon: <Youtube width="3rem" height="3rem" />
        },
    ]

    //items render
    const renderItem = (item: any, index: number) => {
        return (
            <Link href={"/"}>
                <div
                    className={cn("transition-colors duration-300 ease-in-out w-96 my-4 border dark:border-gold border-dark dark:hover:fill-dark dark:fill-gold hover:fill-white dark:hover:text-dark hover:text-white text-dark dark:text-gold fill-dark hover:bg-dark dark:hover:bg-gold flex justify-start items-center px-2 py-4")}
                    key={index}>
                    <div className="flex justify-center items-center mx-3 ">
                        {item.icon}
                    </div>
                    <div className="flex justify-center items-center mx-3 ">
                        <h5 className={cn(" font-Poppins rtl:font-yekanBakh text-xl")}>{item.title}</h5>
                    </div>

                </div>
            </Link>
        )
    }
    return (
        <div className="w-full flex-col">
            <div className="w-full flex items-center justify-center">
                <h2 className="font-bold whitespace-nowrap mb-1 md:mb-3 font-Poppins rtl:font-yekanBakh text-dark text-2xl md:text-3xl lg:text-4xl dark:text-gold ltr:mr-10 rtl:ml-10">
                    {t("followUs")}
                </h2>
                <span className="h-[3px] w-full bg-dark dark:bg-gold" />
            </div>
            <div className='w-full md:flex '>
                <div className="sm:w-12/12 md:w-7/12 xl:w-7/12 mt-10 flex flex-col items-center md:items-start justify-center">
                    {linkData.map((item, index) => {
                        return renderItem(item, index)
                    })}
                </div>
                <div className='sm:w-12/12 md:w-5/12 xl:w-5/12 mt-10 flex flex-col items-center justify-center'>
                    {theme == "dark" ? <FollowDark className='w-full h-[20rem] md:h-[30rem] flex self-center z-[50]' /> : <FollowLight className='w-full xl:h-[30rem] flex self-center z-[50]' />}

                </div>
            </div>
        </div>
    );
}
export default FollowUs