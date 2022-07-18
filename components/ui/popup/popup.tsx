import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { togglePopup } from 'redux/popup/popup.actions';
import ColoseIcon from '@assets/svg/blcak/close.svg';

const Popup = () => {
    const dispatch = useDispatch();

    const caption = useSelector(((state: any) => state.popup.caption));
    const url = useSelector(((state: any) => state.popup.url));
    const alt = useSelector(((state: any) => state.popup.alt))

    return (
        <div
            className='fixed w-full h-[100vh] flex justify-center items-center z-[999]'>
            <span
                onClick={() => { dispatch(togglePopup('', '', '')) }}
                className='absolute w-full h-[100vh] bg-dark opacity-[.9]'
            />
            <div
                onClick={(e) => e.stopPropagation()}
                className='w-5/12 h-[75vh] relative'>
                <div className='flex flex-col justify-start w-full h-full self-center z-[1000] relative'>
                    <Image
                        src={url}
                        alt={alt}
                        layout="fill"
                        style={{ position: 'relative', display: 'block', objectFit: 'cover' }}
                        quality={70}
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                        }}
                    />
                    <span
                        onClick={() => { dispatch(togglePopup('', '', '')) }}
                        className='bg-white w-[2.7rem] h-[2.7rem] flex cursor-pointer justify-center items-center rounded-full p-3 border-2 border-gray-light absolute top-[20px] right-[20px]'><ColoseIcon className='w-[2.5rem] h-[2.5rem]' /></span>
                    <span className='font-Poppins rtl:font-Yekanbakh text-white text-lg mt-5 font-medium absolute -bottom-10'>{caption}</span>
                </div>
            </div>
        </div>
    )
};

export default Popup;
