import React, { FC } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Layout, SliderColumn } from '@components/common';
import { WorksSlider } from '@components/pages-components/ourWorks/Components';
import { TeamData } from '@components/pages-components/data';

interface ourTeamProps {
    locale?: any
}

const ourTeam: FC<ourTeamProps> = (props) => {

    const { t } = useTranslation('translation');

    return (
        <Layout  >
            <div className="mt-[5%] lg:mt-0 xl:px-20 md:px-5 px-2 mx-1 xl:mx-7 flex flex-col md:mt-10">
                <section className='w-full  px-5 flex md:flex-row flex-col-reverse justify-between items-center mt-7'>
                    <WorksSlider seeAllBtnLink="ourTeam" singlePageLink="ourTeam" list={TeamData} sliderMode='double' title='ourTeam' cardMode='general' />
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


export default ourTeam;
