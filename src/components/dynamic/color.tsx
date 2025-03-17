import Image from 'next/image'
import React, { FC } from 'react'
import style from '../style.module.scss';
import { getPlaiceholder } from 'plaiceholder';

type DynamicPlaceholderColorProps = {
  src: string
}

const color:FC<DynamicPlaceholderColorProps> = async ({src}) => {

  const buffer = await fetch(src).then(async res => {
    return Buffer.from(await res.arrayBuffer());
  });
  const {color} = await getPlaiceholder(buffer);

  return (
        <div style={{backgroundColor: color.hex}} className={style.imageContainer}>
            <Image
                src={src}
                fill
                alt={"Image"}
            />
        </div>
  )
}

export default color