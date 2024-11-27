import React, { memo ,useState} from 'react'
import HomeSectionWrapper from './style'
import SectionHeader from './c-cpns/section-header'
import SectionItems from './c-cpns/section-items'
import SectionFooter from './c-cpns/section-footer'

const HomeSectionV2 = memo((props) => {
  const [curIndex, setcurIndex] = useState(0)
  // console.log('HomeSection props', props)
  const {roomData, header,showWidth,showCount} = props;
  return (
    roomData&&<HomeSectionWrapper>
      <SectionHeader header ={header}/>
        <SectionItems 
          roomData = {roomData} 
          curIndex = {curIndex} 
          showWidth = {showWidth}
          showCount = {showCount}
        />
        <SectionFooter
          curIndex = {curIndex} 
        />
    </HomeSectionWrapper>
  )
})

export default HomeSectionV2