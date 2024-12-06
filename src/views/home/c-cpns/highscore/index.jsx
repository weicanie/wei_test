import React, { memo , useState} from 'react'
import useFetchData from '@/hooks/useFetchData'
import HighscoreWrapper from './style'
import { fetchHighscoreDataAction } from '@/store/modules/highscore'
import SectionHeader from '@/components/section-header'
import SectionItems from '@/components/section-items'
import SectionFooter from '@/components/section-footer'

const Highscore= memo((props) => {
  const [data, setData] = useState({})
  useFetchData(setData, fetchHighscoreDataAction,'highscore','highscoreData');
  const roomData = data.list
  const header = [data.title, data.subtitle]
  const showWidth = '25%'
  const showCount = 8
  
  return (
    <HighscoreWrapper>
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
    </HighscoreWrapper>
  )
})

export default Highscore