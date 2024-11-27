import React, { memo } from 'react'
import ButtonWrapper from './style'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconMenu from '@/assets/svg/icon_menu'
import { useSelector } from 'react-redux'

const ProfileButton = memo(() => {
  const {bgColor} = useSelector((state) => {
    return {
      bgColor:state.header.bgColor,
    }
  })
  return (
    <ButtonWrapper bgColor={bgColor}>
      <div className="toolkit">
        <IconMenu/>
      </div>
      <div className="avater">
        <IconAvatar/>
      </div>
    </ButtonWrapper>
  )
})

export default ProfileButton