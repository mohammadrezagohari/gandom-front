import React, { FC, useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import Link from 'next/link';
import cn from "classnames";

import { Layout } from '@components/common';
interface HomeProps {
    locale?: any
}

const Home: FC<HomeProps> = (props) => {
    // const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const { t } = useTranslation('translation');
    const router = useRouter()
    const [show, setShow] = useState<boolean>(true);

    console.log("routename:", router.pathname);
    return (
        <Layout title="Gandom" footer>
            <div className="flex flex-col items-start justify-start min-h-screen py-2 px-4">
                <h1 className='font-serif font-bold text-4xl text-gold w-4/12 leading-snug text-justify'>Our specialty is the reason for your trust</h1>
                <p className='font-poppines font-regular text-gray-default mt-8 text-base w-96 text-justify'>
                    Gandom is a software group consisting of capable and talented young Iranians who are active in the fields of production and design of websites and web-based software, as well as in the field of graphic design and UI/UX design.
                </p>

                {/* <div
                    onClick={() => {
                        setShow(!show); alert("kljdklsdjkl");
                    }}
                    className={cn('w-48 h-48 bg-white absolute flex items-center justify-center')}>
                    <div className='w-20 h-20 bg-gold flex self-center'>

                    </div>
                </div> */}
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
