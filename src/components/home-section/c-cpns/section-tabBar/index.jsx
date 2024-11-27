import React, { memo, useRef ,useEffect, useState} from 'react'
import SectionFooterWrapper from './style'
import ScrollView from './c-cpns/scroll-view'
//问题：无法获取DOM元素引用传给button来获取offsetLeft
const SectionTabBar = memo((props) => {
  const { passCurIndexBack, roomData, curIndex } = props
  return (
    <SectionFooterWrapper>
      {roomData&&
        <ScrollView
          roomData={roomData} 
          curIndex={curIndex} 
          passCurIndexBack={passCurIndexBack}
        />
      }
    </SectionFooterWrapper>   
  )
})

export default SectionTabBar