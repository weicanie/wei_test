import React, { memo } from 'react'
import FooterWrapper from './style'
import SectionFooterWrapper from './style'
import SectionHeaderWrapper from './style'

const SectionHeader = memo((props) => {
  const {header} = props
  return (
    <SectionHeaderWrapper>
      <div className="title">{header}多处住所</div>
      <div className="subtitle"></div>
    </SectionHeaderWrapper>
  )
})

export default SectionHeader