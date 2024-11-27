import React, { memo } from 'react'
import RoomItemWrapper from './style'
import Rating from '@mui/material/Rating';
import SlideShow from '@/base-ui/slide-show';
import RoomItemV2 from './c-cpns/room-item-v2-detail';
const RoomItem = memo((props) => {
  const {data, pictureUrls,indexInDataList} = props
  return (
    <RoomItemWrapper>
      <SlideShow
        pictureUrls={pictureUrls}
        indexInDataList={indexInDataList}
      />
      <RoomItemV2
        data={data}
      />
  </RoomItemWrapper>
  )
})

export default RoomItem