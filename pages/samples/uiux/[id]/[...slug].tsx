import React, {useState} from 'react';
import {useTranslation} from "next-i18next";
import {Layout} from "@components/common";
import Image from "next/image";
import { useRouter } from 'next/router';
import { OurWorksData } from '@components/pages-components/data';
 
const PostDetail: React.FC = () => {

    const [activeImage, setActiveImage] = useState<number>(0);

    const { t } = useTranslation('translation');

    const ImageList = [
        {
            id: 1,
            title: "demo number 1",
            url: "/demo.png"
        }, {
            id: 2,
            title: "demo number 2",
            url: "/demoBlue.png"
        }, {
            id: 3,
            title: "demo number 3",
            url: "/demo.png"
        },
    ]


    const router = useRouter();
    const { id, slug } = router.query;

    const post = OurWorksData.find((post) => post.id === id);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            {/* <h1>{post.alt}</h1> */}



            <Layout title="Gandom" >
            <div className=" xl:px-20 md:px-5 px-2 mx-7 flex flex-col md:mt-10">
                <div className="w-full flex-col">
                    <div className="w-full flex items-center justify-center">
                        <h2 className="font-bold whitespace-nowrap mb-1 md:mb-3 font-Poppins rtl:font-yekanBakh text-dark text-base sm:text-xl md:text-3xl lg:text-4xl dark:text-gold ltr:mr-10 rtl:ml-10">
                            Details Landing page
                        </h2>
                        <span className="h-[3px] w-full bg-dark dark:bg-gold hidden sm:flex" />
                    </div>
                    {/* <div className='w-full py-5 flex flex-col justify-center items-center sm:mt-10'>
                        <Image
                            src={ImageList[activeImage].url}
                            alt={ImageList[activeImage].title}
                            width="600px"
                            height="120px"
                            className={"object-cover border-dark border dark:border-gold"}
                        /> 
                        <div className='flex justify-center space-x-2 md:space-x-7 mt-7'>
                            {ImageList.map((item: any, index: any) => {
                                return (
                                    <div
                                        key={index}
                                        className='border border-transparent hover:dark:border-gold'>
                                        <Image
                                            src={item.url}
                                            alt={item.title}
                                            width="150px"
                                            height="170px"
                                            onClick={() => setActiveImage(item.id - 1)}
                                            className={"object-cover border-dark border dark:border-gold"}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div> */}
                    <div className='w-full py-5 flex flex-col justify-center items-center sm:mt-10'>
                        <div style={{ width:"500px",height:"600px"}} className="w-[500px] h-[600px]" >
                        <img   
                         src={post.url}
                         alt={post.caption}
                         width="100%"
                         height="100%"
                         className={"object-cover border-dark border dark:border-gold "}
                        />
                        {/* <Image
                            src={post.url}
                            alt={post.caption}
                            width="100%"
                            height="100%"
                            className={"object-cover border-dark border dark:border-gold "}
                        />  */}
                        </div>
                        
                    </div>
                    <div className='w-full py-5 mt-5'>
                      <h2 className="font-bold whitespace-nowrap mb-1 md:mb-3 font-Poppins rtl:font-yekanBakh text-dark text-base sm:text-xl md:text-3xl lg:text-4xl dark:text-gold ltr:mr-10 rtl:ml-10">
                      {post.caption}
                      </h2>
                        {/* <h1>{post.alt}</h1> */}
                        <p className='font-light font-Poppins rtl:font-yekanBakh text-justify md:text-start text-dark dark:text-white text-base md:text-xl w-12/12 md:w-11/12 '>
                             Gandom is a software group consisting of capable and talented young Iranians who are active Gandom is a software group consisting of capable and talented young Iranians who are active in the fields of production and design of websites and web-based software, as well as in the field of graphic design and UI/UX design.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>




        </div>
    );
};

export default PostDetail;
