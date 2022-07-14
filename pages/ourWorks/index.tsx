import React, { FC } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Layout, SliderColumn } from '@components/common';
import { TeamData } from './data';
import { WorksSlider } from './Components';

interface OurWorksProps {
    locale?: any
}

const OurWorks: FC<OurWorksProps> = (props) => {

    const { t } = useTranslation('translation');

    return (
        <Layout title="Gandom" >
            <div className=" xl:px-20 md:px-5 px-2 mx-7 flex flex-col md:mt-10">
                <section className='w-full flex md:flex-row flex-col-reverse justify-between items-center mt-7'>
                    <WorksSlider list={TeamData} sliderMode='double' title='webDesign'/>
                </section>
                <section className='w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider list={TeamData} title='appDesign' />
                </section>
                <section className='w-full flex md:flex-row flex-col justify-between items-center md:mt-20 mt-10 space-y-10 md:space-y-0 md:space-x-32'>
                    <div className="flex w-full md:w-6/12 h-[17rem] bg-gold dark:bg-white"></div>
                    <div className="flex w-full md:w-6/12 h-[17rem] bg-gold dark:bg-white"></div>
                </section>
                <section className='w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider list={TeamData} title='uxuxDesign' />
                </section>
                <section className='w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider list={TeamData} sliderMode='double' title='graphicDesign' />
                </section>
                <section className='w-full flex md:flex-row flex-col justify-between items-center md:mt-20 mt-10 space-y-10 md:space-y-0 md:space-x-32'>
                    <div className="flex w-full md:w-6/12 h-[17rem] bg-gold dark:bg-white"></div>
                    <div className="flex w-full md:w-6/12 h-[17rem] bg-gold dark:bg-white"></div>
                </section>
                <section className='w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider list={TeamData} title='seo' />
                </section>
                <section className='w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider list={TeamData} title='softWare' />
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
