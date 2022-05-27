import { Layout } from '@components/common';
import ButtonCustom from '@components/ui/ButtonCustom';

const Wallet = () => {
    return (
        <Layout searchBar footer selected="wallet">
            <div>this is Wallet page</div>;
            <ButtonCustom
            title="تایید"
            />
        </Layout>
    );
};

export default Wallet;
