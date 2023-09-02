import React, { FC, useEffect ,useState} from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Layout } from '@components/common';

import { OurWorksData } from '@components/pages-components/data';
import { WorksSlider } from '@components/pages-components/ourWorks/Components';
// import { useEffect } from 'react';

interface OurWorksProps {
    locale?: any
}

const OurWorks: FC<OurWorksProps> = (props) => {
    const [webDesignID,setWebDesignID]=useState<number>()
    const [hrefID,setHrefID]=useState<string>()
    let flag:number=0
    const downBtn=()=>{
        // setHrefID("#app-design")
        // console.log("hrefID :",hrefID)
        // if (flag==0) {
        //     setHrefID("#web-design")
        //     console.log("hrefID :",hrefID)
        //     flag=1
        // } else if(flag==1){
        //     setHrefID("#app-design")
        //     console.log("hrefID :",hrefID)
        //     flag=2
        // }
        // else if(flag==2){
        //     setHrefID("#boxes")
        //     console.log("hrefID :",hrefID)
        //     flag=0                    
        // }

    }

    useEffect(() => {
      console.log();
      
    
      
    }, [])
    


    return (
        <Layout  >
            <div className="relative xl:px-20 md:px-5 px-2 mx-1 xl:mx-7 flex flex-col md:mt-10">
                <section id="web-design" className='px-5 lg:px-0 w-full flex md:flex-row flex-col-reverse justify-between items-center mt-7'>
                    <WorksSlider seeAllBtnLink="samples/web-design" singlePageLink="samples/web-design" list={OurWorksData}  title='webDesign' cardMode='general' />
                </section>
                <section id="app-design" className='px-5 lg:px-0 w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider seeAllBtnLink="samples/app-design" singlePageLink="samples/app-design" list={OurWorksData} title='appDesign' cardMode='general' />
                </section>
                <section id="boxes" className='px-5 lg:px-0 w-full flex md:flex-row flex-col justify-between mx-auto  items-center md:mt-20 mt-10 space-y-10 md:space-y-0 md:space-x-32'>
                    <div className="flex w-full md:w-6/12 h-[17rem] bg-gold dark:bg-white"></div>
                    <div className="flex w-full md:w-6/12 h-[17rem] bg-gold dark:bg-white"></div>
                </section>
                <section id="uiux" className='px-5 lg:px-0 w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider seeAllBtnLink="samples/uiux" singlePageLink="samples/uiux" list={OurWorksData} title='uxuxDesign' cardMode='general' />
                </section>
                <section id="graphic-design" className='px-5 lg:px-0 w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider seeAllBtnLink="samples/graphic-design" singlePageLink="samples/graphic-design" list={OurWorksData}  title='graphicDesign' cardMode='general' />
                </section>
                <section id="towBoxes" className='px-5 lg:px-0 w-full flex md:flex-row flex-col justify-between items-center  mx-auto  md:mt-20 mt-10 space-y-10 md:space-y-0 md:space-x-32'>
                    <div className="flex w-full md:w-6/12 h-[17rem] bg-gold dark:bg-white"></div>
                    <div className="flex w-full md:w-6/12 h-[17rem] bg-gold dark:bg-white"></div>
                </section>
                <section id="seo" className='px-5 lg:px-0 w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider seeAllBtnLink="samples/seo" singlePageLink="samples/seo" list={OurWorksData} title='seo' cardMode='general' />
                </section>
                <section id="soft-ware" className='px-5 lg:px-0 w-full flex md:flex-row flex-col-reverse justify-between items-center md:mt-28 mt-10'>
                    <WorksSlider seeAllBtnLink="samples/soft-ware" singlePageLink="samples/soft-ware" list={OurWorksData} title='softWare' cardMode='general' />
                </section>
                {/* <a href={hrefID} onClick={downBtn} id="downBotton" className="fixed right-5 bottom-5 p-5 bg-gold z-[9999] text-dark">down</a> */}
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
