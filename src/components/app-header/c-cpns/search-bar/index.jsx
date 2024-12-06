import React, { memo , useEffect, useRef} from 'react'
import SearchBarrWrapper from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import { CSSTransition } from 'react-transition-group'
import { setBgColor, setIsOut } from '@/store/modules/header'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import debounce from '@/utils/wei_debounce'

const SearchBar = memo((props) => {
  const {isOut, bgColor, pageName} = useSelector((state) => {
    return {
      isOut:state.header.isOut,
      bgColor:state.header.bgColor,
      pageName:state.header.pageName,
    }
  },shallowEqual)
  const dispatch = useDispatch()
  const clickHandler = (payload) => {
    if (pageName==='home') {
      dispatch(setIsOut(payload))
    }
  }
  const handlerRef = useRef()
  handlerRef.current = debounce(
    () => {
    if (window.scrollY < 5 ) {
      if (pageName==='home') {
        dispatch(setIsOut(true))
        dispatch(setBgColor('transparent'))
      }
    }
    if (window.scrollY >= 5 ) {
        dispatch(setIsOut(false))
        dispatch(setBgColor('white'))
    }
    },50
  )
  const windowScrollHandler = handlerRef.current 
  useEffect(() => {
    window.addEventListener('scroll',windowScrollHandler)
    return () => {
      window.removeEventListener('scroll', windowScrollHandler)
    }
    //pageName改变时，调用cleaner取消上一个事件处理程序，注册这次的事件处理程序
  },[pageName, windowScrollHandler])

  // 首次挂载也执行动画 
  useEffect(() => {
    if (window.scrollY === 0) {
      dispatch(setIsOut(true))
      dispatch(setBgColor('transparent'))
    }
  }, [dispatch])

  return (
    <SearchBarrWrapper isOut={isOut} bgColor={bgColor}>
      <div className="cover"></div>
      {isOut&&(
            <div className='search-bar-out'>
              <div className="text">搜索房源</div>
              <div className="text">搜索体验</div>
            </div>
        )
      }
      <CSSTransition
        in={isOut}
        onClick={() => clickHandler(true)}
        classNames='search'
        timeout={1000}
      >
        <div className='search-bar'>
          {isOut&&(
                [
                  <div className="text">城市</div>,
                  <div className="text">入住退房日期</div>,
                  <div className="text">关键字</div>,
              ]
            )
          }
          {!isOut&&(
                [
                  <div className="text">搜索房源和体验</div>,
                  <div className="icon"><IconSearchBar/></div>,
              ]
            )
          }
        </div>
      </CSSTransition>

    </SearchBarrWrapper>
   
  )
})

export default SearchBar