import React, { memo ,useEffect, useState} from 'react'
import useFetchData from '@/hooks/useFetchData'
import LongforWrapper from './style'
import { fetchLongforDataAction } from '@/store/modules/longfor'
import HomeSection_longfor from './c-cpns/home-section-version-longfor'
const Longfor= memo((props) => {
  const [data, setData] = useState({})
  useFetchData(setData, fetchLongforDataAction,'longfor','longforData');
  // console.log('Longfor data', data)
  return (
    <LongforWrapper>
      <HomeSection_longfor cityData = {data.list} header = {[data.title, data.subtitle]}/>
    </LongforWrapper>
  )
})

export default Longfor