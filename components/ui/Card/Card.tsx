import Image from 'next/image';
import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { togglePopup } from '../../../redux/popup/popup.actions';
import { useDispatch } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export interface CardProps {
    id:string,
    url: string,
    alt: string,
    caption: string,
    // hrefCard: string,
    jobPosition?: string
} 
  
const Card: FC<CardProps> = ({ id,url, alt, caption }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleClick = () => {
        // router.push(hrefCard)
    }
{/* <Link href={{
          pathname: "ourWorks/details/[id]",
         query: { courseId: id },
          }}
         //  href={`ourWorks/details/[id]`}> */}  
    return (
        <div className='relative'>
            <div className='border hover:cursor-pointer w-12/12 lg:w-12/12 mx-auto lg:mx-0 h-full hover:bg-dark dark:hover:bg-gold dark:border-gold text-dark hover:text-white dark:text-gold hover:dark:text-dark border-dark py-8 px-5 flex justify-center items-center transition-colors duration-300 ease-in-out'>
                <div >
                    <div className='flex flex-col justify-start w-full h-full self-center'>
                        <LazyLoadImage
                            src={url}
                            alt={alt}
                            // width="400px"
                            // height="400px"
                            style={{ position: 'relative', display: 'block',objectFit:'cover' }}
                            // quality={70}
                            onClick={(e:any) => {
                                e.stopPropagation();
                                e.preventDefault();
                                dispatch(togglePopup(caption, url, alt))
                            }}
                            className=""
                            effect="blur"
                            delayTime={8000}
                            placeholderSrc='loading'
                        />
                        <span className='font-Poppins rtl:font-Yekanbakh text-lg mt-5 font-medium'>{caption}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;
