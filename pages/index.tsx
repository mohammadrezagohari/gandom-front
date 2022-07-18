import { Layout } from '@components/common';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';


interface HomeProps {
    locale?: any
}

const Home: FC<HomeProps> = (props) => {
    const router = useRouter();

    useEffect(() => {
        router.replace("/home")
    }, [])

    return <>  </>
}
export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ["translation"]))
    }
});
export default Home


