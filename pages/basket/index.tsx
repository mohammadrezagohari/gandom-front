import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '@components/common';
interface BasketProps {
    locale?: any
}
const Basket: FC<BasketProps> = (props) => {
    const router = useRouter()
    const { t } = useTranslation('translation');
    return (
        <Layout title="Gandom">
            <div className="bg-red p-5">
                <Link href="/">
                    <span className="w-1/12 h-10 p-3 m-2 bg-gold  rounded">go to home</span>
                </Link>
                <span className="w-1/12 h-10 p-3 mt-2 bg-gold text-blue rounded">
                    basket screen: {t("zabanEn")}
                </span>
            </div>
        </Layout>
    )
};
export async function getStaticProps({ locale }: { locale: any }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'translation'])),
            // Will be passed to the page component as props
        },
    };
}
export default Basket;
