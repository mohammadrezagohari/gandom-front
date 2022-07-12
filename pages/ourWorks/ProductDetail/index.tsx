import cn from 'classnames';
import { t } from 'i18next';
import Image from 'next/image';
import { Layout, SliderColumn } from '@components/common';

import React, { DetailedHTMLProps, FC, ReactNode, useState } from 'react';
import { useTranslation } from 'next-i18next';
export interface ProductDetailProps
    extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode;
    title?: string;
    mode?: "contained" | "outlined";
    styleCustom?: string
}
const ProductDetail: FC<ProductDetailProps> = ({ children, title, mode, styleCustom, ...otherProps }) => {

    const [activeImage, setActiveImage] = useState<number>(0);

    const { t } = useTranslation('translation');

    const ImageList = [
        {
            id: 1,
            url: "/demo.png"
        }, {
            id: 2,
            url: "/demoBlue.png"
        }, {
            id: 3,
            url: "/demo.png"
        },
    ]

    return (
        <Layout title="Gandom" >
            <div className=" xl:px-20 md:px-5 px-2 mx-7 flex flex-col md:mt-10">
                <div className="w-full flex-col">
                    <div className="w-full flex items-center justify-center">
                        <h2 className="font-bold whitespace-nowrap mb-1 md:mb-3 font-Poppins rtl:font-yekanBakh text-dark text-base sm:text-xl md:text-3xl lg:text-4xl dark:text-gold ltr:mr-10 rtl:ml-10">
                            Pezeshkamooz Yaldanight Landing page
                        </h2>
                        <span className="h-[3px] w-full bg-dark dark:bg-gold hidden sm:flex" />
                    </div>
                    <div className='w-full py-5 flex flex-col justify-center items-center sm:mt-10'>
                        <img
                            src={ImageList[activeImage].url}
                            width="600px"
                            height="120px"
                            className={"object-cover border-dark border dark:border-gold"}

                        />
                        <div className='flex justify-center space-x-2 md:space-x-7 mt-7'>
                            {ImageList.map((item: any, index: any) => {
                                return (
                                    <div className='border border-transparent hover:dark:border-gold'>
                                        <img
                                            src={item.url}
                                            key={index}
                                            width="150px"
                                            height="170px"
                                            onClick={() => setActiveImage(item.id - 1)}
                                            className={"object-contain border-dark border dark:border-gold"}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='w-full py-5 mt-5'>
                        <p className='font-light font-Poppins rtl:font-yekanBakh text-justify md:text-start text-dark dark:text-white text-base md:text-xl w-12/12 md:w-11/12 '> Gandom is a software group consisting of capable and talented young Iranians who are active Gandom is a software group consisting of capable and talented young Iranians who are active in the fields of production and design of websites and web-based software, as well as in the field of graphic design and UI/UX design.</p>
                    </div>
                </div>
            </div>
        </Layout>

    )
};

export default ProductDetail;
