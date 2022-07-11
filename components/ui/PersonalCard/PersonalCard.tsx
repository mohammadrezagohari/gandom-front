import cn from 'classnames';
import { t } from 'i18next';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import styles from "./PersonalCard.module.scss"
export interface PersonalCardProps {
    url: string,
    alt: string,
    caption: string,
    hrefCard: string,
}

const PersonalCard: FC<PersonalCardProps> = ({ url, alt, caption, hrefCard }) => {
    const { theme, setTheme } = useTheme();
    const { pathname } = useRouter();

    return (
        <Link href={pathname} >
            <div className={cn('border w-12/12 h-full hover:bg-dark dark:hover:bg-gold dark:border-gold text-dark hover:text-white dark:text-gold hover:dark:text-dark border-dark py-8 px-5 flex justify-center items-center transition-colors duration-300 ease-in-out', styles.card)}>
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
                        onClick={() => alert("modal")}
                        className="pointer-events-none"
                    // layout='responsive'
                    />
                    <div className='ltr:border-l-1 rtl:border-r-1 dark-border-gold border-gray-dark w-full flex flex-col mt-5 px-4 space-y-2'>
                        <span className={cn('font-Poppins text-dark hover:text-gold dark:hover:text-dark dark:text-gold rtl:font-Yekanbakh text-lg font-bold', theme == "dark" ? styles.spanDark : styles.spanLight)}>{caption}</span>
                        <p className={cn('font-Poppins rtl:font-Yekanbakh text-gray-dark dark:text-white text-lg font-light', theme == "dark" ? styles.disDark : styles.disLight)}>UI/UX Designer and Graphic Designer</p>
                    </div>
                </div>
            </div>
        </Link>
    )
};

export default PersonalCard;
