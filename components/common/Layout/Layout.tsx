//@ts-nocheck
import React, { FC, ReactNode, useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes';
import { useSelector } from 'react-redux';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Popup from '@components/ui/popup/popup';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export interface LayoutProps {
    children: ReactNode;
    title?: string;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    const { t } = useTranslation('translation');
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>();

    // When mounted on client, now we can show the UI
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), [setMounted]);   // at init onlyif (!mounted) return null;

    const hidden = useSelector((state: any) => state.popup.hidden);

    useEffect(() => {
        setIsSidebarOpen(hidden)
    }, [hidden])

    useEffect(() => {
        // Disable the scroll body when opening the drawer
        !hidden ? document.body.classList.add('hidescroll') : document.body.classList.remove('hidescroll');
    }, [isSidebarOpen]);

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
                        <title>{t("titleTag")}</title>
                        <meta name="description" content={t("titleTag")}/>
                        <meta name="keywords" content="gandom, CSS, JavaScript,web,app,uiux,graphic,design,گندم,سایت,اپلیکیشن,رابط کاربری"/>
                        <meta name="author" content="Gandom Engineering Group"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
// export async function getStaticProps({ locale }: { locale: any }) {
//     return {
//         props: {
//             ...(await serverSideTranslations(locale, ['translation'])),
//             // Will be passed to the page component as props
//         },
//     };
// }
export default Layout;
