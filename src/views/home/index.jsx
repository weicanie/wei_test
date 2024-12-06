import React, { memo, useEffect } from 'react'
import Cover from './c-cpns/cover'
import Discount from './c-cpns/discount'
import HomeWrapper from './style'
import Recommend from './c-cpns/recommend'
import Longfor from './c-cpns/longfor'
import Goodprice from './c-cpns/goodprice'
import Highscore from './c-cpns/highscore'
import Plus from './c-cpns/plus'
import { useDispatch } from 'react-redux'
import { setPageName } from '@/store/modules/header'

const Home = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageName('home'))
    // return () => window.scrollTo(0,6)
  },[dispatch])
  return (
    <HomeWrapper>
      <Cover/>
      <Discount/>
      <Recommend/>
      <Longfor/>
      <Goodprice/>
      <Highscore/>
      <Plus/>
    </HomeWrapper>
  )
})

export default Home