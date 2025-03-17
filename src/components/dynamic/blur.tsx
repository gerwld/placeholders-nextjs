import Image from 'next/image'
import React, { FC } from 'react'
import style from '../style.module.scss';
import { getPlaiceholder } from 'plaiceholder';

type DynamicPlaceholderBlurProps = {
  src: string
}

const blur:FC<DynamicPlaceholderBlurProps> = async ({src}) => {

  const buffer = await fetch(src).then(async res => {
    return Buffer.from(await res.arrayBuffer());
  });
  const {base64} = await getPlaiceholder(buffer);

  return (
        <div className={style.imageContainer}>
            <Image
                src={src}
                fill
                alt={"Image"}
                placeholder='blur'
                blurDataURL={base64}
            />
        </div>
  )
}

export default blur