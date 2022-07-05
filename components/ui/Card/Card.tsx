import cn from 'classnames';
import { t } from 'i18next';
import Image from 'next/image';
import React, { DetailedHTMLProps, FC, ReactNode } from 'react';

export interface CardProps {
    url: string,
    alt: string,
    caption: string
}

const Card: FC<CardProps> = ({ url, alt, caption }) => {
    return (
        <div className='border w-12/12 h-full hover:bg-dark dark:hover:bg-gold dark:border-gold text-dark hover:text-white dark:text-gold hover:dark:text-dark border-dark py-8 px-5 flex justify-center items-center transition-colors duration-300 ease-in-out'>
            <div className='flex flex-col justify-start w-full h-full self-center'>
                <Image
                    src={url}
                    alt={alt}
                    width="400px"
                    height="400px"
                    style={{ position: 'relative', display: 'block' }}
                    // loading="lazy"
                    // objectFit="cover"
                    quality={70}
                // layout='responsive'
                />
                <span className='font-Poppins rtl:font-Yekanbakh text-lg mt-5 font-medium'>{caption}</span>
            </div>
        </div>
    )
};

export default Card;
