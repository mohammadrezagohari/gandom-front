import React from "react";
import Image, { ImageProps } from 'next/image';

interface Props {
    src: string,
    alt: string,
    objectFit?: ImageProps["objectFit"],
    wider?: boolean,
    priority?: boolean,
    className: string
}

export default function ImageBox({ src, alt, objectFit, priority, className }: Props) {
    return (
        <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit={objectFit}
            priority={priority}
            className={className}
        />
    );
}