import React, { memo , useState} from 'react'
import useFetchData from '@/hooks/useFetchData'
// import HomeSection from '@/components/home-section'
import { fetchRecommendDataAction } from '@/store/modules/recommend'
import RecommendWrapper from './style'
import SectionTabBar from '@/components/section-tabBar'
import SectionItems from '@/components/section-items'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'

const Recommend = memo((props) => {
  const [data, setData] = useState({})
  const [curIndex, setcurIndex] = useState(0)
  useFetchData(setData, fetchRecommendDataAction,'recommend','recommendData');
  // console.log('HomeSection props', props)
  const roomData = data.dest_list
  const header = [data.title, data.subtitle];
  const names = roomData&&Object.keys(roomData)

  function passCurIndexBack(index) {
    setcurIndex(index)
  }
  return (
    <RecommendWrapper>
      {
      roomData&&
      [<SectionHeader header ={header}/>,
      <SectionTabBar 
        passCurIndexBack = {passCurIndexBack} 
        roomData = {roomData} 
        curIndex={curIndex}
      />,
      <SectionItems
        roomData = {roomData} 
        curIndex = {curIndex} 
        names = {names}
      />,
      <SectionFooter
        curIndex = {curIndex} 
        names = {names}
      />]
      }
    </RecommendWrapper>
  )
})

export default Recommend