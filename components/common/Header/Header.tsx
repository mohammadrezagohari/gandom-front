import { useRouter } from 'next/router';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import LightIcon from '@assets/svg/gold/lighticon.svg';
import MoonIcon from '@assets/svg/blcak/moon.svg';
import LogoLight from '@assets/svg/gold/gandom-gold.svg';
import LogoDark from '@assets/svg/blcak/gandom-black.svg';
import HamburgerMenu from "@assets/svg/gold/hamburgermenu.svg";
import NavLink from './NavLink';
import DrawerContent from './DrawerContent';


// Definition type  
interface HeaderProps {
}
interface dropdownProps {
    open: boolean,
    value: string
}

const Header: FC<HeaderProps> = () => {
    const router = useRouter();
    const ref = useRef<HTMLDivElement>(null);

    const [dropdown, setdropdown] = useState<dropdownProps>({
        open: false,
        value: ""
    });
    
    const [show, setShow] = useState<boolean>(false);

    //detect a click outside dropdown
    const onClickOutside = () => {
        setdropdown((prv) => ({
            ...prv,
            open: false
        }))
    }

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            ref.current && !ref.current.contains(event.target) && onClickOutside && onClickOutside();
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [onClickOutside]);

    //translate screens Hook
    const { t } = useTranslation('translation');

    // darkMode Config
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    // check and change theme
    const changeThame = () => setTheme(theme === "dark" ? "light" : "dark")

    return (
        <>
            <nav className="backdrop-blur-[3px] z-[200] dark:backdrop-blur-md bg-white/30 pt-4 w-full border-gray-light fixed top-0 xl:px-20 md:px-5 px-2 py-2.5 dark:bg-dark/50 justify-around items-center flex border-zinc-300 border-b">
                <DrawerContent visible={show} setVisible={setShow} />
                <div className="relative w-full mx-10 md:mx-7 hidden md:flex flex-wrap justify-between items-center ">
                    <div dir="ltr" className='flex flex-row rtl:justify-end order-1 w-2/12'>{theme === "dark" ? (<LogoLight className='w-36 h-16' />) : <LogoDark className='w-36 h-16' />}</div>
                    <div className="hidden md:flex order-2 xl:w-5/12 lg:w-6/12" id="mobile-menu-4">
                        <ul className="flex justify-between items-center w-full">
                            <li className='flex justify-center align-center  md:mr-2 md:ml-2'>
                                <NavLink
                                    href="/home"
                                    title='home'
                                    
                                />
                            </li>
                            <li className='flex justify-center align-center md:mr-2 md:ml-2'>
                                <NavLink
                                    href="/order"
                                    title='order'
                                />
                            </li>
                            <li className='flex justify-center align-center md:mr-2 md:ml-2'>
                                <NavLink
                                    href="/ourWorks"
                                    title='ourWorks'
                                />
                            </li>
                            <li className='flex justify-center align-center md:mr-2 md:ml-2'>
                                <NavLink
                                    href="/ourTeam"
                                    title='ourTeam'
                                />
                            </li>
                            <li className='flex justify-center align-center  md:mr-2 md:ml-2'>
                                <NavLink
                                    href="/aboutUs"
                                    title='aboutus'
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="flex order-3 w-2/12  justify-end align-center">
                        {mounted && (
                            <button
                                onClick={() => changeThame()}
                                className='flex border-2 border-dark dark:border-gold justify-center items-center h-8 self-center transition duration-700 ease-in-out'>
                                {theme === "dark" ?
                                    (<div className='w-full flex flex-row h-full'>
                                        <div className='flex bg-gold px-2 h-full justify-center items-center transition duration-700 ease-in-out'>
                                            <LightIcon className='w-4 h-4' />
                                        </div>
                                        <div className='hidden lg:flex bg-dark px-3 h-full justify-center items-center transition duration-700 ease-in-out'>
                                            <span className='text-gold font-light font-Poppins rtl:font-Yekanbakh'>{t("light")}</span>
                                        </div>
                                    </div>)
                                    :
                                    (<div className='w-full flex flex-row h-full'>
                                        <div className='hidden lg:flex bg-white px-3 h-full justify-center items-center transition duration-700 ease-in-out'>
                                            <span className='text-dark font-light font-Poppins rtl:font-Yekanbakh'>{t("dark")}</span>
                                        </div>
                                        <div className='flex bg-dark px-2 h-full justify-center items-center transition duration-700 ease-in-out'>
                                            <MoonIcon className='w-4 h-4' />
                                        </div>
                                    </div>)
                                }
                            </button>
                        )}
                        <div
                            onClick={() => setdropdown((prv) => ({ ...prv, open: !dropdown.open }))}
                            className="overflow-hidden w-8 h-8 flex border-2 ltr:ml-5 rtl:mr-5 h-8 border-dark dark:border-gold justify-center items-center
                            cursor-pointer self-center
                            ">
                            <span
                                className='text-center font-light font-Poppins rtl:font-Yekanbakh rtl:mt-1 text-dark dark:text-gold text-sm'>{router.locale === "fa" ? "Fa" : "En"}</span>
                        </div>

                        <div
                            ref={ref}
                            className={`${dropdown.open ? `top-[65%] opacity-100 visible` : 'top-[110%] invisible opacity-0'} absolute ltr:-right-5 rtl:-left-5 z-40 mt-2 w-[4.8rem] rounded border-[.5px] dark:border-gold border-dark bg-white dark:bg-gray-dark py-2 shadow-card transition-all`}>
                            <Link
                                href={router.pathname}
                                locale={"fa"}
                                passHref
                                replace
                            >
                                <span
                                    onClick={() => setdropdown({ open: false, value: t("zabanfarsi") })}
                                    className="hover:font-bold cursor-pointer text-justify font-light font-Poppins  block py-2 px-3 text-sm dark:text-gold text-dark"
                                >
                                    {t("langFa")}
                                </span>
                            </Link>
                            <Link
                                href={router.pathname}
                                locale={"en"}
                                passHref
                                replace
                            >
                                <span
                                    onClick={() => setdropdown({ open: false, value: t("zabanEn") })}
                                    className="hover:font-bold rtl:font-Yekanbakh cursor-pointer text-justify font-light font-Poppins block py-2 px-3 text-sm dark:text-gold text-dark"
                                >
                                    {t("langEn")}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full mx-0 flex md:hidden flex-wrap justify-between items-center ">
                    <div
                        onClick={(): void => {
                            setShow(true)
                        }}
                        className='flex w-4/12 justify-start items-center'>
                        <HamburgerMenu className='w-16 h-5' />
                    </div>
                    <div dir="ltr" className='flex flex-row rtl:justify-end justify-start order-1 w-8/12'>
                        {theme === "dark" ? (<LogoLight className='w-32 sm:w-auto h-10  sm:ltr:ml-7 sm:rtl:mr-7 ltr:ml-8 rtl:mr-8' />) : <LogoDark className='w-auto h-10 ltr:ml-2 rtl:mr-2' />}
                    </div>
                </div>


            </nav >
        </>
    );
};
export default Header;
