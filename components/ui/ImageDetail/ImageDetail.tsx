import cn from 'classnames';
import { t } from 'i18next';
import Image from 'next/image';
import React, { DetailedHTMLProps, FC, ReactNode } from 'react';
export interface ImageDetailProps
    extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode;
    title?: string;
    mode?: "contained" | "outlined";
    styleCustom?: string
}
const ImageDetail: FC<ImageDetailProps> = ({ children, title, mode, styleCustom, ...otherProps }) => {
    return (
        <div>
            <div>
                <Image
                    src={"./demoBlue.png"}
                    alt={"fghngh"}
                    width="400px"
                    height="400px"
                    style={{ position: 'relative', display: 'block' }}
                    // loading="lazy"
                    // objectFit="cover"
                    quality={70}
                // layout='responsive'
                />
            </div>
            <div>
                <div>
                    <Image
                        src={"./demoBlue.png"}
                        alt={"fghngh"}
                        width="100px"
                        height="100px"
                        style={{ position: 'relative', display: 'block' }}
                        // loading="lazy"
                        // objectFit="cover"
                        quality={70}
                    // layout='responsive'
                    />
                </div>
                <div>
                    <Image
                        src={"./demoBlue.png"}
                        alt={"fghngh"}
                        width="100px"
                        height="100px"
                        style={{ position: 'relative', display: 'block' }}
                        // loading="lazy"
                        // objectFit="cover"
                        quality={70}
                    // layout='responsive'
                    />
                </div>
                <div>
                    <Image
                        src={"./demoBlue.png"}
                        alt={"fghngh"}
                        width="100px"
                        height="100px"
                        style={{ position: 'relative', display: 'block' }}
                        // loading="lazy"
                        // objectFit="cover"
                        quality={70}
                    // layout='responsive'
                    />
                </div>
            </div>
        </div>
    )
};

export default ImageDetail;
