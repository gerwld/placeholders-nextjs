import React from 'react'
import StaticPlaceholderBlur from '@/components/static/placeholder/blur';
import StaticPlaceholderColor from '@/components/static/placeholder/color';

const page = () => {
  return (
    <div style={{display:"flex"}}>
      <StaticPlaceholderBlur src={'/preview.jpg'}/>
      <StaticPlaceholderColor src={'/preview.jpg'}/>
    </div>
  )
}

export default page