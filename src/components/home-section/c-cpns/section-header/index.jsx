import React, { memo } from 'react'
import FooterWrapper from './style'
import SectionFooterWrapper from './style'
import SectionHeaderWrapper from './style'

const SectionHeader = memo((props) => {
  const {header} = props
  return (
    <SectionHeaderWrapper>
      <div className="title">{header[0]}</div>
      <div className="subtitle">{header[1]}</div>
    </SectionHeaderWrapper>
  )
})

export default SectionHeader