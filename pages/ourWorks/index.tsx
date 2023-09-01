import React, { FC, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from '@components/common';

import { OurWorksData } from '@components/pages-components/data';
import { WorksSlider } from '@components/pages-components/ourWorks/Components';

interface OurWorksProps {
    locale?: any
}

const OurWorks: FC<OurWorksProps> = (props) => {

    return (
        <Layout  >
            <div className=" xl:px-20 md:px-5 px-2 mx-1 xl:mx-7 flex flex-col md:mt-10">
                <section className='px-5 lg:px-0 w-full flex md:flex-row flex-col-reverse justify-between items-center mt-7'>
                    <WorksSlider seeAllBtnLink="samples/web-design" singlePageLink="samples/web-design" list={OurWorksData}  title='webDesign' cardMode='general' />
                </section>
                <section className='px-5 lg:px-0 w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider seeAllBtnLink="samples/app-design" singlePageLink="samples/app-design" list={OurWorksData} title='appDesign' cardMode='general' />
                </section>
                <section className='px-5 lg:px-0 w-full flex md:flex-row flex-col justify-between mx-auto  lg:px-0 items-center md:mt-20 mt-10 space-y-10 md:space-y-0 md:space-x-32'>
                    <div className="flex w-full md:w-6/12 h-[17rem] bg-gold dark:bg-white"></div>
                    <div className="flex w-full md:w-6/12 h-[17rem] bg-gold dark:bg-white"></div>
                </section>
                <section className='px-5 lg:px-0 w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider seeAllBtnLink="samples/uiux" singlePageLink="samples/uiux" list={OurWorksData} title='uxuxDesign' cardMode='general' />
                </section>
                <section className='px-5 lg:px-0 w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider seeAllBtnLink="samples/graphic-design" singlePageLink="samples/graphic-design" list={OurWorksData}  title='graphicDesign' cardMode='general' />
                </section>
                <section className='px-5 lg:px-0 w-full flex md:flex-row flex-col justify-between items-center  px-1 lg:px-0 mx-auto  md:mt-20 mt-10 space-y-10 md:space-y-0 md:space-x-32'>
                    <div className="flex w-full md:w-6/12 h-[17rem] bg-gold dark:bg-white"></div>
                    <div className="flex w-full md:w-6/12 h-[17rem] bg-gold dark:bg-white"></div>
                </section>
                <section className='px-5 lg:px-0 w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider seeAllBtnLink="samples/seo" singlePageLink="samples/seo" list={OurWorksData} title='seo' cardMode='general' />
                </section>
                <section className='px-5 lg:px-0 w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider seeAllBtnLink="samples/soft-ware" singlePageLink="samples/soft-ware" list={OurWorksData} title='softWare' cardMode='general' />
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
