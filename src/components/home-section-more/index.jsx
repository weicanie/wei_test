import React, { memo ,useState} from 'react'
import HomeSectionWrapper from './style'
import SectionHeader from './c-cpns/section-header'
import SectionItems from './c-cpns/section-items'

const HomeSectionV3 = memo((props) => {
  const {roomData, header,showWidth,showCount} = props;
  // console.log('HomeSectionV3', roomData)
  return (
    roomData&&<HomeSectionWrapper>
      <SectionHeader header ={header}/>
        <SectionItems 
          roomData = {roomData} 
          showWidth = {showWidth}
          showCount = {showCount}
        />
    </HomeSectionWrapper>
  )
})

export default HomeSectionV3