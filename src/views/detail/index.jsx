import React, { memo, useEffect, useState } from 'react'
import DetailWrapper from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import PictureShow from '@/base-ui/select-show'
import PictureBrowser from '@/base-ui/picture-browser'
import { setIsFixed, setPageName } from '@/store/modules/header'
const Detail = memo(() => {
  const [isBrowserShow, setIsBrowserShow] = useState(false)
  const {data} = useSelector((state) => {
    return {
      data:state.entire.entireData
    }
  }, shallowEqual)
  const indexInDataList = useParams().index
  const clickHandler = () => {
    setIsBrowserShow(!isBrowserShow)
  }
  const isBrowserShow_pass = (input) => {
    setIsBrowserShow(input)
  }
  //控制app-header的展示
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setIsFixed(false))
    return () => {
      dispatch(setIsFixed(true))
    }
  },[])

  useEffect(() => {
    dispatch(setPageName('detail'))
  },[])

  // console.log('Detail', isBrowserShow)
  return (
    <DetailWrapper>
      <div className="place-holder"></div>
      {data.list&&
        <PictureShow
          pictureUrls={data.list[indexInDataList]}
          isBrowserShow_pass={isBrowserShow_pass}
        />
      }
      {data.list&&
        (isBrowserShow&&
          <PictureBrowser
            pictureUrls={data.list[indexInDataList]}
            isBrowserShow_pass={isBrowserShow_pass}
          />
        )
      }
      <div 
        className="showBrowser" 
        onClick={clickHandler}
      >显示图片</div>
    </DetailWrapper>
  )
})

export default Detail