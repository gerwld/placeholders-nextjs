import React from 'react'
import DefaultBlur from '@/components/static/defaultBlur';
import PreviewIMG from "../../public/preview.jpg";

const page = () => {
  return (
    <div>
      <DefaultBlur src={PreviewIMG}/>
    </div>
  )
}

export default page