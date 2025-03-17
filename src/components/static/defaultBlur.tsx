import React, { FC } from 'react'
import style from '../style.module.scss';
import Image, { StaticImageData } from 'next/image';

type DefaultBlurProps = {
    src: string | StaticImageData
}

const defaultBlur:FC<DefaultBlurProps> = ({src}) => {
  return (
    <div className={style.container}>
        <p>Blur</p>
        <div className={style.imageContainer}>
            <Image
                src={src}
                fill
                alt={"Image"}
                placeholder='blur'
            />
        </div>
    </div>
  )
}

export default defaultBlur