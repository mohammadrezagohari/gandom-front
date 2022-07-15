import { Layout } from '@components/common';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Cart = () => {
    const { t } = useTranslation('translation');
    const router = useRouter()
    return (
        <Layout >
            <div >this is Cart page</div>;
            <span className='text-lg text-blue-600 bg-gold'>home screen: {t("test")}</span>
        </Layout>
    );
};
export async function getStaticProps({ locale }: { locale: any }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'translation'])),
            // Will be passed to the page component as props
        },
    };
}
export default Cart;
