import React, { memo ,useEffect, useState} from 'react'
import useFetchData from '@/hooks/useFetchData'
import PlusWrapper from './style'
import { fetchPlusDataAction } from '@/store/modules/plus'
import HomeSectionV2 from '@/components/home-section-notabs'
const Plus= memo((props) => {
  const [data, setData] = useState({})
  useFetchData(setData, fetchPlusDataAction,'plus','plusData');
  // console.log('Plus data', data)
  return (
    <PlusWrapper>
      <HomeSectionV2
        roomData = {data.list} 
        header = {[data.title, data.subtitle]}
        showWidth = {'20%'}
        showCount = {5}
      />
    </PlusWrapper>
  )
})
export default Plus