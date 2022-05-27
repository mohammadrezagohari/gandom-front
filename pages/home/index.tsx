import React, { FC, useState, useEffect } from 'react';
import ButtonCustom from '@components/ui/ButtonCustom';
import { Layout } from '@components/common';
import { useTheme } from "next-themes";
import Head from 'next/head';
const Home = ({ locale }: { locale: any }) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
        < >
            <ButtonCustom
                title="صفحه اصلی"
            />
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className="flex flex-col items-center justify-center flex-1 px-20 text-center ">
                    <div className='w-1/2 bg-gold p-3 flex justify-start mb-3 ltr:ml-3 rtl:mr-3 rtl:bg-gray-dark'><p className='font-light text-5xl font-poppines'>hello</p> <h1 className='bg-gold my-4 text-red text-5xl'>{locale} kgkbh</h1></div>
                </main>
            </div>
        </>
    )
};
export async function getStaticProps({ locale }: { locale: any }) {
    return {
        props: {
            locale
        }
    };
}
export default Home;
