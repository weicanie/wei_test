import MoreWrapper from './style'
import React, { memo , useState} from 'react'
import useFetchData from '@/hooks/useFetchData'
import { fetchEntireDataAction } from '@/store/modules/entire'
import PaginationMUI from './c-cpns/pagination'
import Filter from './c-cpns/filter'
import { useDispatch } from 'react-redux'
import { setBgColor, setIsOut, setPageName } from '@/store/modules/header'
import SectionItems from '@/components/section-items'
import SectionHeader from '@/components/section-header'
import Wei_useMemo from '@/hooks/useMemo_wei'
const weiMemo = new Wei_useMemo()
const More = memo((props) => {
  const [data, setData] = useState(undefined)
  const [page, setPage] = useState(1)
  const offset = 20*(page - 1)

  const dispatch = useDispatch()
  dispatch(setPageName('more'))

  useFetchData(setData, fetchEntireDataAction,'entire','entireData', offset);
  const page_pass = (page) => {
    setPage(page)
  }
  //more页面挂载时不执行
  weiMemo.wei_useMemo(() => {
    setTimeout( () => {
      if (window.scrollY === 0) {
        dispatch(setIsOut(false))
        dispatch(setBgColor('white'))
      }
    },50)
  })

  const roomData = data?.list
  const header = data?.totalCount
  const showWidth = '20%'
  const showCount = 20
  return (
    <MoreWrapper>
      <div className = "placeholder"></div>
      <div className = 'more'>
        <Filter/>
        {data&&
          [
            <SectionHeader
              header ={header}
            />,
            <SectionItems
              roomData = {roomData} 
              showWidth = {showWidth}
              showCount = {showCount}
              isViewMore={true}
            />,
          ]
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