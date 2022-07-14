import { Layout } from '@components/common';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';

interface HomeProps {
    locale?: any
}

const Home: FC<HomeProps> = (props) => {
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


