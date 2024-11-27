import MoreWrapper from './style'
import React, { memo ,useEffect, useState} from 'react'
import useFetchData from '@/hooks/useFetchData'
import HomeSectionV3 from '@/components/home-section-more'
import { fetchEntireDataAction } from '@/store/modules/entire'
import PaginationMUI from './c-cpts/pagination'
import Filter from './c-cpts/filter'
import { useDispatch } from 'react-redux'
import { setBgColor, setIsOut, setPageName } from '@/store/modules/header'

const More = memo((props) => {
  const [data, setData] = useState(undefined)
  const [page, setPage] = useState(1)
  const offset = 20*(page - 1)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageName('more'))
  },[])
  useFetchData(setData, fetchEntireDataAction,'entire','entireData', offset);
  const page_pass = (page) => {
    setPage(page)
  }

  const [isMounted, setIsMounted] = useState(false)
  //more页面挂载时不执行
  useEffect(() => {
    setTimeout( () => {
      if (window.scrollY === 0) {
        dispatch(setIsOut(false))
        dispatch(setBgColor('white'))
        setIsMounted(true)
      }
    },50)
  }, [])
  return (
    <MoreWrapper>
      <div className = "placeholder"></div>
      <div className = 'more'>
        <Filter/>
        {data&&
          <HomeSectionV3
            roomData = {data.list} 
            header = {data.totalCount}
            showWidth = {'20%'}
            showCount = {20}
          />
        }
        {data&&
          <PaginationMUI
            page_pass={page_pass}
            page={page}
            totalCount = {data.totalCount}
          />
        }

      </div>
    </MoreWrapper>
  )
})

export default More