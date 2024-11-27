import React, { memo ,useEffect, useState} from 'react'
import useFetchData from '@/hooks/useFetchData'
import HomeSection from '@/components/home-section'
import { fetchRecommendDataAction } from '@/store/modules/recommend'
import RecommendWrapper from './style'

const Recommend = memo((props) => {
  const [data, setData] = useState({})
  useFetchData(setData, fetchRecommendDataAction,'recommend','recommendData');
  return (
    <RecommendWrapper>
      <HomeSection
        roomData = {data.dest_list} 
        header = {[data.title, data.subtitle]}
      />
    </RecommendWrapper>
  )
})

export default Recommend