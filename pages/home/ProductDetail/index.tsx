import cn from 'classnames';
import { t } from 'i18next';
import Image from 'next/image';
import { Layout } from '@components/common';

import React, { DetailedHTMLProps, FC, ReactNode } from 'react';
import { useTranslation } from 'next-i18next';
export interface ProductDetailProps
    extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode;
    title?: string;
    mode?: "contained" | "outlined";
    styleCustom?: string
}
const ProductDetail: FC<ProductDetailProps> = ({ children, title, mode, styleCustom, ...otherProps }) => {

    const { t } = useTranslation('translation');

    return (
        <Layout title="Gandom" >
            <div className="w-full flex-col">
                <div className="w-full flex items-center justify-center">
                    <h2 className="font-bold whitespace-nowrap mb-1 md:mb-3 font-Poppins rtl:font-yekanBakh text-dark text-2xl md:text-3xl lg:text-4xl dark:text-gold ltr:mr-10 rtl:ml-10">
                        {/* {t(title)} */}
                        ujhguihuihuihukhhhhhh
                    </h2>
                    <span className="h-[3px] w-full bg-dark dark:bg-gold" />
                </div>
            </div>
        </Layout>

    )
};

export default ProductDetail;
