import React from 'react';
import { useTranslation } from 'next-i18next';

//type attribute html tag
declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        count?: string;
    }
};

const Counter = (start: any) => {
    const { t } = useTranslation('translation');

    const ListCount = [
        {
            count: "23",
            title: t("staff")
        }, {
            count: "46",
            title: t("inProcess")
        }, {
            count: "62",
            title: t("allProject")
        }
    ]

    //itemType in map 
    interface itemType {
        count: string,
        title: string
    }

    //render map item
    const renderItem = (item: itemType, index: number) => {
        return (
            <>
                <div key={index} className='w-4/12 p-4 md:w-2/12 h-[10rem] md:h-[14rem] flex flex-col justify-around items-center bg-gray-light dark:bg-gray-darkFull'>
                    <span className="value text-5xl md:text-7xl dark:text-gold text-dark rtl:font-Yekanbakhfont-Poppins font-bold" count={item.count} key={index}>0</span>
                    <span className='text-xl md:text-2xl text-white text-center rtl:font-Yekanbakh font-Poppins font-medium'>{item.title}</span>
                </div>
                {index == 0 ? <span className='h-[10rem] md:h-[14rem] mx-8 md:mx-0 w-[3px] bg-dark dark:bg-gold'></span> : null}
                {index == 1 ? <span className='h-[10rem] md:h-[14rem] mx-8 md:mx-0 w-[3px] bg-dark dark:bg-gold'></span> : null}
            </>

        )
    }

    //render counter number with animation


    const counters = document.querySelectorAll('.value');
    const speed = 200;
    counters.forEach((counter: any) => {
        const animate = () => {
            const value = +counter.getAttribute('count');
            const data = +counter.innerText
            const time = value / speed;
            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 100)
            } else {
                counter.innerText = value;
            }
        }
        start.start >= 200 ? animate() : null
    });

    return (
        <div className="content flex w-full items-center justify-between my-28" >
            <div className='md:flex hidden w-2/12 h-[10rem] md:h-[14rem] justify-center items-center'>
                <span className='w-[10px] h-[10px] dark:bg-gold rounded-full bg-dark'></span>
                <span className='w-full h-[3px] bg-dark dark:bg-gold'></span>
                <span className='h-full w-[3px] bg-dark dark:bg-gold'></span>
            </div>
            {ListCount.map((item: any, index) => {
                return renderItem(item, index)
            })}
            <div className='md:flex hidden w-2/12 h-[10rem] md:h-[14rem] justify-center items-center'>
                <span className='h-full w-[3px] bg-dark dark:bg-gold'></span>
                <span className='w-full h-[3px] bg-dark dark:bg-gold'></span>
                <span className='w-[10px] h-[10px] dark:bg-gold rounded-full bg-dark'></span>
            </div>
        </div>
    )
};

export default Counter;
