import React, { memo , useState} from 'react'
import useFetchData from '@/hooks/useFetchData'
import { fetchGoodpriceDataAction } from '@/store/modules/goodprice'
import GoodpriceWrapper from './style'
import SectionItems from '@/components/section-items'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'
const Goodprice= memo((props) => {
  const [data, setData] = useState({})
  useFetchData(setData, fetchGoodpriceDataAction,'goodprice','goodpriceData');
  const roomData = data.list
  const header = [data.title, data.subtitle]
  const showWidth = '25%'
  const showCount = 8
  
  return (
    <GoodpriceWrapper>
      {roomData&&
      [
      <SectionHeader
        header ={header}
      />,
      <SectionItems
        roomData = {roomData} 
        showWidth = {showWidth}
        showCount = {showCount}
      />,
      <SectionFooter
      />
      ]
      }
    </GoodpriceWrapper>
  )
})

export default Goodprice