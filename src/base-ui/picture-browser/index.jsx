import React, { memo, useEffect } from 'react'
import PictureBrowserWrapper from './style'
import SlideShowV2 from './c-cpns/slide-show-v2'
import IconCross from '@/assets/svg/icon_cross'

/* 
复用slide-show
slide-show + indicator改图片
*/

const PictureBrowser = memo((props) => {
  const {isBrowserShow_pass} = props
  const {picture_urls} = props.pictureUrls
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = 'auto'
  },[])

  return (
    <PictureBrowserWrapper>
      <SlideShowV2
        pictureUrls={picture_urls}
        indexInDataList={0}   
      />
      <div 
        className="close"
        onClick={() => isBrowserShow_pass(false)}
      ><IconCross/></div>
    </PictureBrowserWrapper>
  )
})

export default PictureBrowser