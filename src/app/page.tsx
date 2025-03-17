import React from 'react'
import StaticPlaceholderBlur from '@/components/static/placeholder/blur';
import StaticPlaceholderColor from '@/components/static/placeholder/color';
import DynamicPlaceholderBlur from '@/components/dynamic/blur';
import DynamicPlaceholderColor from '@/components/dynamic/color';
import style from './page.module.scss';

const page = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <h1>Dynamic import</h1>
        <p>Blur</p>
        <DynamicPlaceholderBlur src={'https://images.unsplash.com/photo-1741467355504-d2df0dd3ae5d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
      </div>
      <div className={style.container}>
        <h1>Dynamic import</h1>
        <p>Color</p>
        <DynamicPlaceholderColor src={'https://images.unsplash.com/photo-1741467355504-d2df0dd3ae5d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
      </div>


      <div className={style.container}>
        <h1>Static import with Plaiceholder</h1>
        <p>Blur</p>
        <StaticPlaceholderBlur src={'/preview.jpg'} />
      </div>

      <div className={style.container}>
        <h1>Static import with Plaiceholder</h1>
        <p>Color</p>
        <StaticPlaceholderColor src={'/preview.jpg'} />
      </div>


    </div>
  )
}

export default page