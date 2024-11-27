import React, { memo ,useEffect, useState} from 'react'
import useFetchData from '@/hooks/useFetchData'
import HighscoreWrapper from './style'
import { fetchHighscoreDataAction } from '@/store/modules/highscore'
import HomeSectionV2 from '@/components/home-section-notabs'
const Highscore= memo((props) => {
  const [data, setData] = useState({})
  useFetchData(setData, fetchHighscoreDataAction,'highscore','highscoreData');
  // console.log('Highscore data', data)
  return (
    <HighscoreWrapper>
      <HomeSectionV2
        roomData = {data.list}
        header = {[data.title, data.subtitle]}
        showWidth = {'25%'}
        showCount = {8}
      />
    </HighscoreWrapper>
  )
})

export default Highscore