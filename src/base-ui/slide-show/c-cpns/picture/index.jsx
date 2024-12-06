import React, { memo, useState } from 'react'
import PictruesWrapper from './style'
import { useNavigate } from 'react-router'
import Wei_useMemo from '@/hooks/useMemo_wei'
const weiMemo = new Wei_useMemo()
const Pictrues = memo((props) => {
  const {pictureData, curIndex, indexInDataList, totalCount, isLeftClick, isRightClick} = props
  const picWidth = 212
  const [move, setMove] = useState(0)
  const navigate = useNavigate()

  weiMemo.wei_useMemo(() => {
    if (isLeftClick) {
      if (move === 0) {
        setMove(-picWidth*(totalCount - 1))
      } else {
        setMove(move + picWidth)
      }
      
    } 
    if (isRightClick) {
      if (-move === picWidth*(totalCount - 1)) {
        setMove(0)
      } else {
        setMove(move - picWidth)
      }
    }
  },curIndex)

  return (
    <PictruesWrapper move={move}>
      {<div className="pic-containner">
        {
          pictureData.map((item, index) => {
            return (
              <div className="pic" key={pictureData[index]}>
                <img 
                  src={pictureData[index]} 
                  alt="loading~" 
                  onClick={() => navigate(`/detail/${indexInDataList}`)}
                />
              </div>
              
            )
          })
        }
      </div>

      }
    </PictruesWrapper>
  )
})

export default Pictrues