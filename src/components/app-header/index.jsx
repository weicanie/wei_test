import React, { memo, useState } from 'react'
import HeaderWrapper from './style'
import SearchBar from './c-cpns/search-bar'
import Profile from './c-cpns/profile'
import Logo from './c-cpns/logo'
import { useSelector } from 'react-redux'
const Header = memo(() => {
  const {isFixed} = useSelector(
    (state) => {
      return {
        isFixed:state.header.isFixed
      }
    }
  )
  const {bgColor} = useSelector((state) => {
    return {
      bgColor:state.header.bgColor
    }
  })
  return (
    <HeaderWrapper isFixed={isFixed} bgColor={bgColor}> 
      <Logo/>
        <SearchBar/>
      <Profile/>
    </HeaderWrapper>
  )
})

export default Header