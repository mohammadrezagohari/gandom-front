import React from 'react';
import Link from 'next/link';
import { OurWorksData } from '@components/pages-components/data';

const AppDesign: React.FC = () => {
    return (
        <div>


            <h1>AppDesign</h1>
            <ul>
                {/* {OurWorksData.map((post) => (
                    <li key={post.id}>
                        <Link href={`/samples/${post.id}/${post.alt}`}>
                            <a>{post.alt}</a>
                        </Link>
                    </li>
                ))} */}
            </ul>
        </div>
    );
};

export default AppDesign;
