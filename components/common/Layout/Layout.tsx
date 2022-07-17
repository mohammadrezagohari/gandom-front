//@ts-nocheck
import React, { FC, ReactNode, useState, useEffect } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes';
import { useSelector } from 'react-redux';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Popup from '@components/ui/popup/popup';

export interface LayoutProps {
    children: ReactNode;
    title?: string;
}

const Layout: FC<LayoutProps> = ({
    children,
    title,
}) => {

    const router = useRouter()

    //translate screens Hook
    const { t } = useTranslation('translation');

    // darkMode Config
    const { theme, setTheme } = useTheme();

    // When mounted on client, now we can show the UI
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), [setMounted]);   // at init onlyif (!mounted) return null;

    // check and change theme
    const changeThame = () => setTheme(theme === "dark" ? "light" : "dark")

    const hidden = useSelector((state: any) => state.popup.hidden);
    console.log("hidden?:", hidden);

    return (
        mounted ?
            <>
                {
                    hidden ? null : <Popup />
                }
                <div
                    dir={router.locale === 'fa' ? "rtl" : "ltr"}
                    className="overflow-hidden"
                >
                    <Head>
                        <title>{title}</title>
                    </Head>
                    <div className="relative rounded dark:bg-dark flex flex-col w-full min-h-screen justify-center items-center bg-white ">
                        <Header />
                        <main className="w-full min-h-screen dark:bg-black pb-24 pt-28">{children}</main>
                        <Footer />
                    </div>
                </div >
            </> : null
    );
};

export default Layout;
