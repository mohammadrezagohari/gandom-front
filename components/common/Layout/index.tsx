import React, { ReactNode, useContext, useEffect } from 'react';
import Head from 'next/head';

import ShoppingIcon from '@assets/svg/shoppingIcon.svg';
import SearchBar from '../SearchBar';
import Footer from '../Footer';
import { ContextProps, MyDirection } from "@pages/_app";
import { useRouter } from 'next/router'
import Link from 'next/link';

export interface LayoutProps {
    children: ReactNode;
    banner?: boolean;
    footer?: boolean;
    searchBar?: boolean;
    title?: string;
    selected?: 'home' | 'wallet' | 'cart' | 'profile';
}

const Layout: React.FC<LayoutProps> = ({
    children,
    title,
    banner,
    searchBar,
    footer,
    selected,
}) => {
    const { lang, langChange } = React.useContext<ContextProps>(MyDirection);
    const router = useRouter()
    console.log("routename:", router.locale);
    console.log("lang:", lang);

    return (
        <>
            <div
                dir={lang}
            >
                <Head>
                    <title>{title}</title>
                </Head>
                <div className="relative bg-gray-250 flex flex-col min-h-screen ">
                    <p className='w-96 '></p>
                    <Link href={`fa`}>
                        <a className="w-1/12 h-10 p-3 mt-2 rtl:bg-gold ltr:bg-gray-dark rounded" onClick={() => { langChange("rtl") }}
                        >فارسی</a>
                    </Link>
                    <Link href="en" >
                        <a
                            className="w-1/12 h-10 p-3 my-2 rounded ltr:bg-gold rtl:bg-gray-dark"
                            onClick={() => { router.back(), langChange("ltr") }}
                        >انگلیسی</a>
                    </Link>
                    {banner && (
                        <div className="w-full justify-center flex items-center px-3 py-3 text-white ">
                            <div className="flex justify-center items-center ">
                                <div className="font-bold text-base mr-2">{lang === "rtl" ? "فروشگاه آنلاین" : "online shop"}</div>
                            </div>
                        </div>
                    )}
                    {searchBar && <SearchBar />}

                    <div className="w-full min-h-screen dark:bg-black">{children}</div>

                    {footer && <Footer selected={selected} />}
                </div>
            </div >
        </>
    );
};

export default Layout;
