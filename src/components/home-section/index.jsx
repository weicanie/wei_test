import React, { memo ,useState} from 'react'
import HomeSectionWrapper from './style'
import SectionHeader from './c-cpns/section-header'
import SectionTabBar from './c-cpns/section-tabBar'
import SectionItems from './c-cpns/section-items'
import SectionFooter from './c-cpns/section-footer'

const HomeSection = memo((props) => {
  const [curIndex, setcurIndex] = useState(0)
  // console.log('HomeSection props', props)
  const {roomData, header} = props;
  const names = roomData&&Object.keys(roomData)
  function passCurIndexBack(index) {
    setcurIndex(index)
  }
  return (
    <HomeSectionWrapper>
      <SectionHeader header ={header}/>
      <SectionTabBar 
        passCurIndexBack = {passCurIndexBack} 
        roomData = {roomData} 
        curIndex={curIndex}
      />
      <SectionItems 
        roomData = {roomData} 
        curIndex = {curIndex} 
        names = {names}
      />
      <SectionFooter
        curIndex = {curIndex} 
        names = {names}
      />
    </HomeSectionWrapper>
  )
})

export default HomeSection