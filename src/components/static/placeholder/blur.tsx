import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'
import style from '../../style.module.scss';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'node:fs/promises';

type StaticPlaceholderBlurProps = {
  src: string | StaticImageData
}

const blur:FC<StaticPlaceholderBlurProps> = async ({src}) => {

  const buffer = await fs.readFile(`./public/${src}`);
  const {base64} = await getPlaiceholder(buffer);

  return (
    <div className={style.container}>
        <h1>Static import with Plaiceholder</h1>
        <p>Blur</p>
        <div className={style.imageContainer}>
            <Image
                src={src}
                fill
                alt={"Image"}
                placeholder='blur'
                blurDataURL={base64}
            />
        </div>
    </div>
  )
}

export default blur