import React, { memo ,useEffect, useState} from 'react'
import DiscountWrapper from './style'
import useFetchData from '@/hooks/useFetchData'
import HomeSection from '@/components/home-section'
import { fetchDiscountDataAction } from '@/store/modules/discount'
const Discount = memo((props) => {
  const [data, setData] = useState({})
  useFetchData(setData, fetchDiscountDataAction,'discount','discountData');
  return (
    <DiscountWrapper>
      <HomeSection
        roomData = {data.dest_list} 
        header = {[data.title, data.subtitle]}
      />
    </DiscountWrapper>
  )
})

export default Discount