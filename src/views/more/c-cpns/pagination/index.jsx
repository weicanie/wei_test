import React, { memo } from 'react'
import PaginationWrapper from './style'
import Pagination from '@mui/material/Pagination';

const PaginationMUI = memo((props) => {
  const {page_pass,totalCount,page} = props
  const handleChange = (e,page) => {
    page_pass(page)
  }
  return (
    <PaginationWrapper>
       <Pagination count={15}  onChange={handleChange}/>
       <div className="tip">第{1+(page-1)*20}-{20+(page-1)*20}个房源，共超过{totalCount}个</div>
    </PaginationWrapper>
  )
})

export default PaginationMUI