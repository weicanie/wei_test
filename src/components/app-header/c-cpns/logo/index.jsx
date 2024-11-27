import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import LogoWrapper from './style'

const Logo = memo(() => {
  return (
      <LogoWrapper>
        <IconLogo/>
      </LogoWrapper>
  )
})

export default Logo