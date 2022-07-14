import { Layout } from '@components/common';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Profile: React.FC = () => {
    const { t } = useTranslation('translation');
    const router = useRouter()
    return (
        <Layout>
            <div className="">this is profile page</div>;
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
export default Profile;
