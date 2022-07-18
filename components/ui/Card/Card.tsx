import Image from 'next/image';
import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { togglePopup } from '../../../redux/popup/popup.actions';
import { useDispatch } from 'react-redux';

export interface CardProps {
    url: string,
    alt: string,
    caption: string,
    hrefCard: string,
}

const Card: FC<CardProps> = ({ url, alt, caption, hrefCard }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleClick = () => {
        router.push(hrefCard)
    }

    return (
        <div className='relative'>
            <div className='border w-12/12 h-full hover:bg-dark dark:hover:bg-gold dark:border-gold text-dark hover:text-white dark:text-gold hover:dark:text-dark border-dark py-8 px-5 flex justify-center items-center transition-colors duration-300 ease-in-out'>
                <div onClick={() => handleClick()}>
                    <div className='flex flex-col justify-start w-full h-full self-center'>
                        <Image
                            src={url}
                            alt={alt}
                            width="400px"
                            height="400px"
                            style={{ position: 'relative', display: 'block' }}
                            quality={70}
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                dispatch(togglePopup(caption, url, alt))
                            }}
                        />
                        <span className='font-Poppins rtl:font-Yekanbakh text-lg mt-5 font-medium'>{caption}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;
