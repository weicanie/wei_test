import React, { memo , useState} from 'react'
import useFetchData from '@/hooks/useFetchData'
import PlusWrapper from './style'
import { fetchPlusDataAction } from '@/store/modules/plus'
import SectionHeader from '@/components/section-header'
import SectionItems from '@/components/section-items'
import SectionFooter from '@/components/section-footer'

const Plus= memo((props) => {
  const [data, setData] = useState({})
  useFetchData(setData, fetchPlusDataAction,'plus','plusData');
  const roomData = data.list
  const header = [data.title, data.subtitle]
  const showWidth = '20%'
  const showCount = 5
  
  return (
    <PlusWrapper>
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
    </PlusWrapper>
  )
})
export default Plus