import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'
import style from '../../style.module.scss';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'node:fs/promises';

type StaticPlaceholderBlurProps = {
  src: string | StaticImageData
}

const color:FC<StaticPlaceholderBlurProps> = async ({src}) => {

  const buffer = await fs.readFile(`./public/${src}`);
  const {color} = await getPlaiceholder(buffer);

  return (
    <div className={style.container}>
        <h1>Static import with Plaiceholder</h1>
        <p>Color</p>
        <div style={{backgroundColor: color.hex}} className={style.imageContainer}>
            <Image
                src={src}
                fill
                alt={"Image"}
            />
        </div>
    </div>
  )
}

export default color