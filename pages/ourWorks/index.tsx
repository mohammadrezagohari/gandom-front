import React, { FC, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from '@components/common';

import { TeamData } from '@components/pages-components/data';
import { WorksSlider } from '@components/pages-components/ourWorks/Components';

interface OurWorksProps {
    locale?: any
}

const OurWorks: FC<OurWorksProps> = (props) => {

    return (
        <Layout title="Gandom" >
            <div className=" xl:px-20 md:px-5 px-2 mx-7 flex flex-col md:mt-10">
             <section className='w-full flex md:flex-row flex-col-reverse justify-between items-center mt-7'>
                    <WorksSlider list={TeamData} sliderMode='double' title='webDesign' cardMode='general' />
                </section>
                <section className='w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider list={TeamData} title='appDesign' cardMode='general' />
                </section>
                <section className='w-full flex md:flex-row flex-col justify-between items-center md:mt-20 mt-10 space-y-10 md:space-y-0 md:space-x-32'>
                    <div className="flex w-full md:w-6/12 h-[17rem] bg-gold dark:bg-white"></div>
                    <div className="flex w-full md:w-6/12 h-[17rem] bg-gold dark:bg-white"></div>
                </section>
                <section className='w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider list={TeamData} title='uxuxDesign' cardMode='general' />
                </section>
                <section className='w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider list={TeamData} sliderMode='double' title='graphicDesign' cardMode='general' />
                </section>
                <section className='w-full flex md:flex-row flex-col justify-between items-center md:mt-20 mt-10 space-y-10 md:space-y-0 md:space-x-32'>
                    <div className="flex w-full md:w-6/12 h-[17rem] bg-gold dark:bg-white"></div>
                    <div className="flex w-full md:w-6/12 h-[17rem] bg-gold dark:bg-white"></div>
                </section>
                <section className='w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider list={TeamData} title='seo' cardMode='general' />
                </section>
                <section className='w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider list={TeamData} title='softWare' cardMode='general' />
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


export default OurWorks;
