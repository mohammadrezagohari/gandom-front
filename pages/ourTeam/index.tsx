import React, { FC } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Layout, SliderColumn } from '@components/common';
import { WorksSlider } from '@components/pages-components/ourWorks/Components';
import { TeamData } from '@components/pages-components/data';

interface OurTeamProps {
    locale?: any
}

const OurTeam: FC<OurTeamProps> = (props) => {

    const { t } = useTranslation('translation');

    return (
        <Layout title="Gandom" >
            <div className=" xl:px-20 md:px-5 px-2 mx-7 flex flex-col md:mt-10">
                <section className='w-full flex md:flex-row flex-col-reverse justify-between items-center mt-7'>
                    <WorksSlider list={TeamData} sliderMode='double' title='OurTeam' cardMode='general'/>
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


export default OurTeam;
