import React, { FC } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';

import { Layout, SliderColumn } from '@components/common';
import LogoLight from '@assets/svg/gold/gandom-gold.svg';
import LogoDark from '@assets/svg/blcak/gandom-black.svg';

interface OurTeamProps {
    locale?: any
}

const AboutUs: FC<OurTeamProps> = (props) => {

    const { t } = useTranslation('translation');


    const { theme, setTheme } = useTheme(); 

    //render 
    const renderSection = (title: string, content: string) => {
        return (
            <div className="w-full flex-col mt-28">
                <div className="w-full flex items-center justify-center">
                    <h2 className="font-bold whitespace-nowrap mb-1 md:mb-3 font-Poppins rtl:font-yekanBakh text-dark text-2xl md:text-3xl lg:text-4xl dark:text-gold ltr:mr-10 rtl:ml-10">
                        {t(title)}
                    </h2>
                    <span className="h-[3px] w-full bg-dark dark:bg-gold" />
                </div>
                <div className='w-full flex items-end '>
                    <p className='font-Poppins rtl:font-Yekanbakh font-light dark:text-gray-default text-gray-dark mt-10 text-xl leading-9 w-11/12 text-justify'>
                        {t(content)}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <Layout title="Gandom" >
            <div className=" xl:px-20 md:px-5 px-2 mx-7 flex flex-col md:mt-10">
                <section className='w-full flex flex-col  justify-between items-center mt-7'>

                    {theme === "dark" ? <LogoLight className='w-full h-[10rem]' direction={"ltr"} /> : <LogoDark className='w-full h-[10rem]' direction={"ltr"} />}
                    <h1 className='font-serif rtl:font-Yekanbakh mt-10 md:mt-16 font-bold text-3xl md:text-5xl text-dark dark:text-gold leading-snug text-center md:text-start xl:text-justify'>{t("title1")} {t("title2")}</h1>
                    <p className='font-Poppins rtl:font-Yekanbakh font-light dark:text-gray-default text-gray-dark mt-5 text-xl leading-9 w-9/12 text-justify md:text-center '>
                        {t("discription")}
                    </p>
                </section>
                <section className='w-full flex flex-col  justify-between items-center mt-7'>
                    {renderSection("webDesign","discription")}
                    {renderSection("appDesign", "discription")}
                    {renderSection("uxuxDesign", "discription")}
                    {renderSection("graphicDesign", "discription")}
                    {renderSection("seo", "discription")}
                    {renderSection("softWare", "discription")}

                </section>
            </div>
        </Layout>
    )
};
export async function getStaticProps({ locale }: { locale: any }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['translation'])),
            // Will be passed to the page component as props
        },
    };
}


export default AboutUs;
