import React, { memo, useEffect, useState } from 'react'
import Cover from './c-cpts/cover'
import Discount from './c-cpts/discount'
import HomeWrapper from './style'
import Recommend from './c-cpts/recommend'
import Longfor from './c-cpts/longfor'
import Goodprice from './c-cpts/goodprice'
import Highscore from './c-cpts/highscore'
import Plus from './c-cpts/plus'
import { useDispatch } from 'react-redux'
import { setPageName } from '@/store/modules/header'

const Home = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageName('home'))
    // return () => window.scrollTo(0,6)
  },[])
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