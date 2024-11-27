import React, { memo } from 'react'
import SectionItemsWrapper from './style'
import RoomItem from './c-cpns/room-item'

const SectionItems = memo((props) => {
  const {roomData,showCount,showWidth} = props
  return (
    <SectionItemsWrapper width = {showWidth}>
      {
        roomData.map((item, index) => (index < showCount? 
          <div key={item.id} className='room-item'>
            <RoomItem pictureUrl = {item.picture_url} data={item}/>
          </div>
          :null
        ))
      }
    </SectionItemsWrapper>
  )
})

export default SectionItems