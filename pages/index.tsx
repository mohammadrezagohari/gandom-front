import { Layout } from '@components/common';
import { FC } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
interface HomeProps {
    locale?: any
}
const Home: FC<HomeProps> = (props) => {
    const { t } = useTranslation(['translation']);
    return (
        <Layout title="Gandom" footer banner searchBar selected="home">
            <div>
                <p>\\\\\\\\\\\\jhhhh\\\\\\\\\\\\</p>
            </div>
            <h1 className='text-lg text-blue-600 bg-gold'>{props.locale}{t("test")}</h1>
        </Layout>

    );
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
