import React, { memo , useState} from 'react'
import useFetchData from '@/hooks/useFetchData'
import LongforWrapper from './style'
import { fetchLongforDataAction } from '@/store/modules/longfor'
import SectionHeader from '@/components/section-header'
import SectionTabBar from '@/components/section-tabBar'
const Longfor= memo((props) => {
  const [data, setData] = useState({})
  useFetchData(setData, fetchLongforDataAction,'longfor','longforData');
  // console.log('Longfor data', data)
  const datalist = data.list
  const header = [data.title, data.subtitle]
  return (
    <LongforWrapper>
      {datalist&&
      [
      <SectionHeader header ={header}/>,
      <SectionTabBar
        datalist = {datalist} 
        isViewLongfor={true}
      />,
      ]
      }
    </LongforWrapper>
  )
})

export default Longfor