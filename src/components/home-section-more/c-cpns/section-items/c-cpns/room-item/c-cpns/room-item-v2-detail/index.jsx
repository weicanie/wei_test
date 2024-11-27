import React, { memo } from 'react'
import RoomItemWrapper from './style'
import Rating from '@mui/material/Rating';
const RoomItemV2 = memo((props) => {
  const {data} = props
  // console.log('RoomItem', data)
  return (
    <RoomItemWrapper textColor = {data.verify_info.text_color}>
      <div className="type">
        {
          `${data.verify_info.messages[0]}·${data.verify_info.messages[1]}`
        }
      </div>
      <div className="desc">{data.name}</div>
      <div className="price">{`${data.price_format}/晚`}</div>
      <div className="rating">
        <Rating
          value={data.star_rating??5} 
          precision={0.1}
          readOnly
        />
        <span className="reviews">{data.reviews_count}</span>
        <span className="tip">{data.bottom_info?.content&&`·${data.bottom_info.content}`}</span>
      </div>
    </RoomItemWrapper>

  )
})

export default RoomItemV2