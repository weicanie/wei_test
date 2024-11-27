import React, { memo, useEffect, useState } from 'react'
import ProfilerWrapper from './style'
import IconGlobal from '@/assets/svg/icon_global'
import ProfileButton from './c-cpns/prifile-button'
import Toolkit from './c-cpns/toolkit'
import { useSelector } from 'react-redux'

const Profile = memo(() => {
  //控制toolkit的显示
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    window.addEventListener('click', () => {
      setIsShow(false)
    }, true)//注册在捕获阶段。flase或者省略则注册在冒泡阶段。决定了事件处理程序的执行顺序。
  }, [])

  function clickHandler() {
    setIsShow(!isShow)
  }
  const {bgColor} = useSelector((state) => {
    return {
      bgColor:state.header.bgColor,
    }
  })
  return (
  <ProfilerWrapper onClick={() => clickHandler()} bgColor={bgColor}>
      <div className="profile-login">登录</div>
      <div className="profile-submit">注册</div>
      <div className="profile-global">
        <IconGlobal/>
      </div>
      <ProfileButton/>
      {isShow && <Toolkit/>}
  </ProfilerWrapper>
  )
})

export default Profile