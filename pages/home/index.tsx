import React, { FC, useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import cn from "classnames";

import styles from "./Home.module.scss"
import { Layout } from '@components/common';
import JoinTeamdasrk from "@assets/svg/JoinTeamdasrk.svg";
import { Button } from '@components/ui';
import Counter from '@components/ui/Counter';

interface HomeProps {
    locale?: any
}

const Home: FC<HomeProps> = (props) => {
    const { t } = useTranslation('translation');
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Layout title="Gandom" footer>
            <div className=" xl:px-20 md:px-5 px-2 mx-7 flex flex-col md:mt-10">
                <section className='w-full flex md:flex-row flex-col-reverse justify-between items-center mt-7'>
                    <div className='w-full md:w-6/12 xl:w-7/12 flex flex-col items:center justify-center md:items-start md:justify-start mt-0 sm:mt-13 md:mt-0'>
                        <h1 className='font-serif font-bold text-5xl text-dark dark:text-gold leading-snug sm:text-center md:text-start xl:text-justify'>{t("title1")}<br/>{t("title2")}</h1>
                        <p className='font-poppines font-regular dark:text-gray-default text-gray-dark mt-8 text-xl leading-9 xl:w-8/12 md:w-11/12 text-center md:text-start xl:text-justify'>
                            {t("discription")}
                        </p>
                        <div className='flex md:jusctify-start justify-center items-center mt-14'>
                            <Button
                                title={t("aboutUs")}
                                mode='outlined'
                            />
                            <Button
                                title={t("orderBtn")}
                                mode='contained'
                                styleCustom='mx-14'
                            />
                        </div>
                    </div>
                    <div className='sm:w-10/12 md:w-5/12 xl:w-7/12  flex flex-col items-center justify-center'>
                        <JoinTeamdasrk className='w-full xl:h-[30rem] flex self-center z-[50]' />
                        <div className={cn("w-24 h-24 absolute bg-gold rounded-full", { [styles.shadow]: true })} ></div>
                    </div>
                </section>
                <section className='w-full h-[35rem] md:h-[38rem] flex justify-center items-center'>
                    <Counter start={scrollPosition} />
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


export default Home;
