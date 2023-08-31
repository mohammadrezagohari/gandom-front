import React, { FC,useState } from 'react';
import Link from 'next/link';
import { OurWorksData } from '@components/pages-components/data';
import { Layout } from '@components/common';
import { CardProps } from '@components/ui/Card';
import PersonalCard from '@components/ui/PersonalCard/PersonalCard';
import { Card } from '@components/ui';
import InfiniteScroll from 'react-infinite-scroll-component';


export interface ourWorkInterface {
    url: string;
    alt: string;
    caption: string;
    // hrefCard: "/ourWorks/ProductDetail",
    id: string;
}
export interface SliderProps {
    list: ourWorkInterface[];
    cardMode: 'personal' | 'general';
    singlePageLink: string;
    seeAllBtnLink: string;
}
const CardType = {
    personal: PersonalCard,
    general: Card,
};

const Uiux: FC<SliderProps> = ({
    seeAllBtnLink,
    singlePageLink,
    list,
    cardMode = 'general',
}) => {
    const CardComponent = CardType[cardMode];
    console.log('data work', OurWorksData);
   const [samples,setSamples]=useState<string[]>([]);
   const [hasMore, sethasMore] = useState<boolean>(true);

    // const [page, setpage] = useState<number>(2);

//    const fechData=()=>{
//     let i:number =0
//     setSamples(OurWorksData.slice(i,i+=3 ))
//     setSamples(OurWorksData)
//     if (samples.length === 0 || samples.length < 5) {
//         sethasMore(false);
//       }
//     //   setpage(page + 1);
//    }
    return (
        <>
            <Layout title="Gandom">
                <div className=" xl:px-20 md:px-5 px-2 mx-1 xl:mx-7 flex flex-col md:mt-10">
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                   
                        {/* <InfiniteScroll
                        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                        dataLength={OurWorksData.length}
                        next={fechData}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                        endMessage={<p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>}

                        > */}

                            {OurWorksData?.map((item: ourWorkInterface, index: number) => (
                                <Link key={index} href={`/samples/web-design/${item.id}/${item.alt}`}>
                                    <div className="max-w-12/12 flex justify-center items-center">
                                        <CardComponent
                                            id={item.id}
                                            url={item.url}
                                            alt={item.alt}
                                            caption={item.caption}
                                            // hrefCard={item.hrefCard}
                                            // jobPosition={item.jobPosition}
                                        />
                                    </div>
                                </Link>
                            ))}
                        {/* </InfiniteScroll> */}
                
                    </div>
                </div>
            </Layout>

            {/* <h1>OurWorksData</h1>
            <ul>
                {OurWorksData.map((post) => (
                    <li key={post.id}>
                        <Link href={`/samples/${post.id}/${post.alt}`}>
                            <a>{post.alt}</a>
                        </Link>
                    </li>
                ))}
            </ul> */}
        </>
    );
};

export default Uiux;
