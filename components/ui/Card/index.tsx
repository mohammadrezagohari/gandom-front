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
                    width={450}
                    height={400}
                    loading="lazy"
                />
                <span className='font-poppines text-lg mt-5 font-medium'>{caption}</span>
            </div>
        </div>
    )
};

export default Card;
