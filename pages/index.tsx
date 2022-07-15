import { Layout } from '@components/common';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC, useEffect } from 'react';

interface HomeProps {
    locale?: any
}

const Home: FC<HomeProps> = (props) => {
    
    // useEffect(() => {
    //     window.location.href = "/home";

    // }, [])
    
    return (
        <Layout title="Gandom" >
        </Layout>
    )
}
export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ["translation"]))
    }
});
export default Home


