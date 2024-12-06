import React, { memo , useState} from 'react'
import DiscountWrapper from './style'
import useFetchData from '@/hooks/useFetchData'
import { fetchDiscountDataAction } from '@/store/modules/discount'
import SectionHeader from '@/components/section-header'
import SectionTabBar from '@/components/section-tabBar'
import SectionItems from '@/components/section-items'
import SectionFooter from '@/components/section-footer'

const Discount = memo((props) => {
  const [data, setData] = useState({})
  const [curIndex, setcurIndex] = useState(0)
  useFetchData(setData, fetchDiscountDataAction,'discount','discountData');
  // console.log('HomeSection props', props)
  const datalist = data.dest_list
  const header = [data.title, data.subtitle];
  const names = datalist&&Object.keys(datalist)

  function passCurIndexBack(index) {
    setcurIndex(index)
  }
  return (
    <DiscountWrapper>
      {
      datalist&&
      [<SectionHeader header ={header}/>,
      <SectionTabBar 
        passCurIndexBack = {passCurIndexBack} 
        datalist = {datalist} 
        curIndex={curIndex}
      />,
      <SectionItems
        roomData = {datalist} 
        curIndex = {curIndex} 
        names = {names}
      />,
      <SectionFooter
        curIndex = {curIndex} 
        names = {names}
      />]
      }
    </DiscountWrapper>
  )
})

export default Discount