import React, { memo ,useState} from 'react'
import HomeSectionWrapper from './style'
import SectionHeader from './c-cpns/section-header'
import SectionTabBar from './c-cpns/section-tabBar'


const HomeSection_longfor = memo((props) => {
  // console.log('HomeSection_longfor props', props)
  const {cityData, header} = props;
  return (
    <HomeSectionWrapper>
      <SectionHeader header ={header}/>
      <SectionTabBar 
        cityData = {cityData} 
      />
    </HomeSectionWrapper>
  )
})

export default HomeSection_longfor