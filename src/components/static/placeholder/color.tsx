import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'
import style from '../../style.module.scss';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'node:fs/promises';

type StaticPlaceholderColorProps = {
  src: string | StaticImageData
}

const color:FC<StaticPlaceholderColorProps> = async ({src}) => {

  const buffer = await fs.readFile(`./public/${src}`);
  const {color} = await getPlaiceholder(buffer);

  return (
        <div style={{backgroundColor: color.hex}} className={style.imageContainer}>
            <Image
                src={`/placeholders-nextjs${src}`}
                fill
                alt={"Image"}
            />
        </div>
  )
}

export default color