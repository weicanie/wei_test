import React, { memo } from 'react'
import SectionItemsWrapper from './style'
import RoomItem from './c-cpns/room-item'

const SectionItems = memo((props) => {
  const {roomData, curIndex, names} = props

  const length = names&&roomData[names[curIndex]].length
  let width;
  if (length === 6) {
    width = `33.333%`
  } else if (length === 8) {
    width = `25%`
  }
  return (
    <SectionItemsWrapper width = {width}>
      {
        roomData&&roomData[names[curIndex]].map((item, index) => (
          <div key={item.id} className='room-item'>
            <RoomItem pictureUrl = {item.picture_url} data={item}/>
          </div>
        ))
      }
    </SectionItemsWrapper>
  )
})

export default SectionItems