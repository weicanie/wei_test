import React, { memo } from 'react'
import SectionFooterWrapper from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router'

const SectionFooter = memo((props) => {
  const {curIndex, names} = props
  const navigate =useNavigate()
  return (
    <SectionFooterWrapper>
      <span onClick={() => navigate('/more')}>显示更多{names&&names[curIndex]}房源</span>
      <IconMoreArrow/>
    </SectionFooterWrapper>
  )
})

export default SectionFooter