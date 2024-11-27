import React, { memo ,useEffect, useState} from 'react'
import useFetchData from '@/hooks/useFetchData'
import { fetchGoodpriceDataAction } from '@/store/modules/goodprice'
import GoodpriceWrapper from './style'
import HomeSectionV2 from '@/components/home-section-notabs'
const Goodprice= memo((props) => {
  const [data, setData] = useState({})
  useFetchData(setData, fetchGoodpriceDataAction,'goodprice','goodpriceData');
  return (
    <GoodpriceWrapper>
      <HomeSectionV2
        roomData = {data.list}
        header = {[data.title, data.subtitle]}
        showWidth = {'25%'}
        showCount = {8}
      />
    </GoodpriceWrapper>
  )
})

export default Goodprice