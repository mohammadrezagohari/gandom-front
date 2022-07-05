import cn from "classnames";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";
import IconArrowleftDark from "@assets/svg/blcak/arrowleft.svg";
import IconArrowleftGold from "@assets/svg/gold/arrowleft.svg";
import IconArrowRightGold from "@assets/svg/gold/arrowright.svg";
import IconArrowRightDark from "@assets/svg/blcak/arrowright.svg";

import { useTheme } from 'next-themes';

interface DrawerProp {
    visible: boolean,
    setVisible: any
}

interface ListDrawer {
    href: string,
    title: string
}

interface dropdownProps {
    open: boolean,
    value: string
}

const DrawerContent: FC<DrawerProp> = ({ visible, setVisible }) => {
    const { t } = useTranslation('translation');
    const { pathname, locale } = useRouter();
    const drawer = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLDivElement>(null);
    const { theme, setTheme } = useTheme();

    const [langRadio, setLangRadio] = useState<string>(locale == "fa" ? "fa" : "en");
    const [themeRadio, setThemeRadio] = useState<string>(theme == "dark" ? "dark" : "light");
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>();
    const [dropdown, setdropdown] = useState<dropdownProps>({
        open: false,
        value: ""
    });
    const [dropdown2, setdropdown2] = useState<dropdownProps>({
        open: false,
        value: ""
    });

    // check and change theme
    const changeThame = () => setTheme(theme === "dark" ? "light" : "dark")

    useEffect(() => {
        setIsSidebarOpen(visible)
    }, [visible])

    useEffect(() => {
        // Disable the scroll body when opening the drawer
        visible ? document.body.classList.add('hidescroll') : document.body.classList.remove('hidescroll');
    }, [isSidebarOpen]);

    const drawerList = [
        {
            href: "/home",
            title: "home"
        }, {
            href: "/",
            title: "order"
        }, {
            href: "/",
            title: "ourWorks"
        }, {
            href: "/",
            title: "ourTeam"
        }, {
            href: "/",
            title: "aboutus"
        },
    ]
    const renderItem = (item: ListDrawer, index: string) => {
        return (
            <li
                key={index}
                onClick={() => setVisible(false)}
                className="w-full border-b-1 border-dark dark:border-gold px-4 py-7 flex items-center">
                <Link href={item.href}>
                    <span
                        className={cn("text-justify ltr:ml-2 rtl:mr-2 font-light ltr:text-start rtl:text-end font-Poppins rtl:font-Yekanbakh block sm:text-xl text-dark dark:text-gold",
                            item.href === pathname ? "border-b-2 border-dark dark:border-gold text-dark dark:text-gold sm:text-2xl" : ""
                        )}>{t(item.title)}</span>

                </Link>
            </li>
        )
    }

    return (
        <aside
            ref={drawer}
            className={cn("flex-row w-full top-0 bg-transparent z-[400] absolute", visible ? "flex" : "hidden")}>
            <div
                className="backdrop-blur-[3px] dark:backdrop-blur-md bg-white/90 dark:bg-dark/90 top-0 flex rtl:right-0 ltr-left-0 z-[100] ltr:border-r-1 rtl:border-l-1 dark:border-gold border-dark h-screen w-7/12">
                <ul className="w-full h-full flex-col mb-10 flex ">
                    {drawerList.map((item: ListDrawer, index: any) => renderItem(item, index))}

                    <li className="w-full border-b-1 border-dark dark:border-gold py-7 px-3 flex-col flex items-center">
                        <div
                            onClick={() => setdropdown((prv) => ({ ...prv, open: !dropdown.open }))}
                            className="overflow-hidden w-full h-8 flex ltr:ml-5 rtl:mr-5 h-8 justify-between items-center
                            cursor-pointer
                            ">
                            <span
                                className='text-justify ltr:ml-1 rtl:mr-1 font-light ltr:text-start rtl:text-end font-Poppins block sm:text-xl text-dark dark:text-gold'>{t("lang")}</span>
                            {locale == "fa" ? theme == "dark" ? <IconArrowleftGold className={cn('w-10 h-5 transition duration-100 ease-in-out', dropdown.open ? "-rotate-90" : "")} /> : <IconArrowleftDark className={cn('w-10 h-5 transition duration-100 ease-in-out', dropdown.open ? "-rotate-90" : "")} /> : theme == "dark" ? <IconArrowRightGold className={cn('w-10 h-5 transition duration-100 ease-in-out', dropdown.open ? "rotate-90" : "")} /> : <IconArrowRightDark className={cn('w-10 h-5 transition duration-100 ease-in-out', dropdown.open ? "rotate-90" : "")} />}
                        </div>
                        <div
                            ref={ref}
                            className={`${dropdown.open ? `opacity-100 flex-col flex mt-2` : ' opacity-0 h-0 hidden'} w-full  rounded py-2 shadow-card transition-all`}>

                            <Link
                                href={pathname}
                                locale={"fa"}
                                passHref
                                replace
                            >
                                <div className="flex flex-row mx-3 items-center">
                                    <span
                                        onClick={() => setLangRadio("fa")}
                                        className={cn("w-5 h-5 rounded-full border-2 dark:border-gold border-dark", langRadio == "fa" ? "dark:bg-gold bg-dark" : "")}
                                    />
                                    <span
                                        onClick={() => setdropdown({ open: false, value: t("zabanfarsi") })}
                                        className="hover:font-bold cursor-pointer text-justify font-light font-Poppins block py-2 px-3 text-sm dark:text-gold text-dark"
                                    >

                                        {t("langFa")}
                                    </span>
                                </div>

                            </Link>

                            <Link
                                href={pathname}
                                locale={"en"}
                                passHref
                                replace
                            >
                                <div className="flex flex-row mx-3 items-center">
                                    <span
                                        onClick={() => setLangRadio("en")}
                                        className={cn("w-5 h-5 rounded-full border-2 dark:border-gold border-dark", langRadio == "en" ? "dark:bg-gold bg-dark" : "")}
                                    />
                                    <span
                                        onClick={() => setdropdown({ open: false, value: t("zabanEn") })}
                                        className="hover:font-bold cursor-pointer text-justify font-light font-Poppins block py-2 px-3 text-sm dark:text-gold text-dark"
                                    >
                                        {t("langEn")}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className="w-full border-b-1 border-dark dark:border-gold py-7 px-3 flex-col flex items-center">
                        <div
                            onClick={() => setdropdown2((prv) => ({ ...prv, open: !dropdown2.open }))}
                            className="overflow-hidden w-full h-8 flex ltr:ml-5 rtl:mr-5 h-8 justify-between items-center
                            cursor-pointer
                            ">
                            <span
                                className='text-justify ltr:ml-1 rtl:mr-1 font-light ltr:text-start rtl:text-end font-Poppins block sm:text-xl text-dark dark:text-gold'>{t("theme")}</span>
                            {locale == "fa" ? theme == "dark" ? <IconArrowleftGold className={cn('w-10 h-5 transition duration-100 ease-in-out', dropdown2.open ? "-rotate-90" : "")} /> : <IconArrowleftDark className={cn('w-10 h-5 transition duration-100 ease-in-out', dropdown2.open ? "-rotate-90" : "")} /> : theme == "dark" ? <IconArrowRightGold className={cn('w-10 h-5 transition duration-100 ease-in-out', dropdown2.open ? "rotate-90" : "")} /> : <IconArrowRightDark className={cn('w-10 h-5 transition duration-100 ease-in-out', dropdown2.open ? "rotate-90" : "")} />}
                        </div>
                        <div
                            ref={ref}
                            className={`${dropdown2.open ? `opacity-100 flex-col flex mt-2` : ' opacity-0 h-0 hidden'} w-full  rounded py-2 shadow-card transition-all`}>
                            <div
                                onClick={() => { changeThame(); setdropdown2((prv) => ({ ...prv, open: !dropdown2.open })); setVisible(false) }}
                                className="flex flex-row mx-3 items-center">
                                <span
                                    onClick={() => { setThemeRadio("light"), changeThame() }}
                                    className={cn("w-5 h-5 rounded-full border-2 dark:border-gold border-dark", themeRadio == "light" ? "bg-dark" : "")}
                                />
                                <span
                                    onClick={() => setdropdown({ open: false, value: t("zabanfarsi") })}
                                    className="hover:font-bold cursor-pointer text-justify font-light font-Poppins block py-2 px-3 text-sm dark:text-gold text-dark"
                                >

                                    {t("light")}
                                </span>
                            </div>
                            <div
                                onClick={() => { changeThame(); setdropdown2((prv) => ({ ...prv, open: !dropdown2.open })); setVisible(false) }}
                                className="flex flex-row mx-3 items-center">
                                <span
                                    onClick={() => { setThemeRadio("dark"), changeThame() }}
                                    className={cn("w-5 h-5 rounded-full border-2 dark:border-gold border-dark ", theme == "dark" ? "bg-gold" : "")}
                                />
                                <span
                                    onClick={() => setdropdown({ open: false, value: t("zabanEn") })}
                                    className="hover:font-bold cursor-pointer text-justify font-light font-Poppins block py-2 px-3 text-sm dark:text-gold text-dark"
                                >

                                    {t("dark")}
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div
                onClick={() => setVisible(false)}
                className={cn("h-screen w-5/12 z-[200] bg-transparent ")}
            ></div>
        </aside>
    );
};
export default DrawerContent