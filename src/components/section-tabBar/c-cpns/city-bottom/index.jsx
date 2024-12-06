import React, { memo } from 'react'
import BottomrWrapper from './style'

const Bottom = memo((props) => {
  const {item} = props;
  return (
    <BottomrWrapper bgImage = {item.picture_url}>
      <div className="city-bottom">
        <div className='city-name'>
          {item.city}
        </div>
        <div className='city-price'>
          均价{item.price}
        </div>
      </div>      
    </BottomrWrapper>
  )
})

export default Bottom