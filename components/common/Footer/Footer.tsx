import { useTheme } from 'next-themes';
import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';

import LogoLight from '@assets/svg/gold/gandom-gold.svg';
import LogoDark from '@assets/svg/blcak/gandom-black.svg';
import InstagramGold from "@assets/svg/gold/instagramGold";



const Footer = () => {

    //translate screens Hook
    const { t } = useTranslation('translation');

    // darkMode Config
    const { theme, setTheme } = useTheme();

    return (
        <div className="w-full relative bottom-0  flex flex flex-col z-[10000]">
            <div className='dark:bg-gray-darkFull Full bg-gray-light w-full px-20 xl:px-28 pt-7'>
                <div className='pb-10 p-3 flex-col xl:flex justify-between items-center border-b-2 dark:border-gray-dark border-gray-dark'>
                    <div className='w-full flex flex-col justify-between items-center self-start'>
                        <div className='w-full'>
                            <div dir="ltr" className='w-full flex ltr:justify-start justify-end'>{theme === "dark" ? (<LogoLight className='w-32 sm:w-auto h-10  sm:ltr:ml-7 sm:rtl:mr-7 ltr:ml-8 rtl:mr-8' />) : <LogoDark className='w-32 sm:w-auto h-10  sm:ltr:ml-7 sm:rtl:mr-7 ltr:ml-8 rtl:mr-8' />}</div>
                            <h2 className='mx-0 sm:ltr:ml-8 sm:rtl:mr-6 mt-8 dark:text-white text-dark rtl:font-Yekanbakh font-Poppins font-medium text-base md:text-xl xl:text-2xl w-full'>{t("footertext")}</h2>
                        </div>
                    </div>
                    {/* <div className='flex justify-between itemes-center w-5/12'>
                        <Image
                            src="/namad.png"
                            alt={"نماد الکترونیک"}
                            width="150px"
                            height="150px"
                            quality={70}
                            objectFit="contain"
                        // layout='responsive'
                        />
                        <Image
                            src="/neshan.png"
                            alt={"نشان اقتصاد"}
                            width="150px"
                            height="150px"
                            quality={70}
                            objectFit="contain"

                        // layout='responsive'
                        />
                        <Image
                            src="/namad.png"
                            alt={"نماد الکترونیک"}
                            width="150px"
                            height="150px"
                            quality={70}
                            objectFit="contain"
                        // layout='responsive'
                        />
                        <Image
                            src="/neshan.png"
                            alt={"نشان اقتصاد"}
                            width="150px"
                            height="150px"
                            quality={70}
                            objectFit="contain"
                        // layout='responsive'
                        />
                    </div> */}
                </div>
                <div className='flex-col md:flex-row flex justify-center items-center space-y-10 xl:space-y-0 my-7'>
                    <div className='flex ltr:space-x-4 mx-7 justify-center items-center cursor-pointer'>
                        <InstagramGold width="3rem" height="3rem" />
                        <h6 className='pt-1 dark:text-gray-light rtl:mx-5 text-dark rtl:font-Yekanbakh font-Poppins font-medium text-base md:text-2xl'>{t("location")}</h6>
                    </div>
                    <div className='flex ltr:space-x-4 mx-7 justify-center items-center '>
                        <InstagramGold width="3rem" height="3rem" />
                        <h6 dir="ltr" className='ltr:pt-1 rtl:pt-2 dark:text-gray-light rtl:mx-5 text-dark rtl:font-Yekanbakh font-Poppins font-medium text-base md:text-2xl'>0911 411 9225</h6>
                    </div>
                    <div className='flex ltr:space-x-4 mx-7 justify-center items-center '>
                        <InstagramGold width="3rem" height="3rem" />
                        <h6 dir="ltr" className='ltr:pt-1 rtl:pt-2 dark:text-gray-light rtl:mx-5 text-dark rtl:font-Yekanbakh font-Poppins font-medium text-base md:text-2xl'>0911 411 9225</h6>
                    </div>
                </div>
            </div>
            <div className='flex dark:bg-dark bg-gray-dark w-full px-10 xl:px-28 py-8 space-x-4 justify-center items-center'>
                <span className='h-[2px] w-3/12 xl:w-4/12 bg-white md:flex hidden' />
                <h6 className='sm:w-full xl:w-4/12 md:w-6/12 text-white text-center font-Poppins rtl:font-Yekanbakh font-medium text-[10px] md:text-[11px] xl:text-sm'>{t("footerText")}</h6>
                <span className='h-[3px] xl:w-4/12 w-3/12 bg-white md:flex hidden' />
            </div>
        </div>
    );
};

export default Footer;
