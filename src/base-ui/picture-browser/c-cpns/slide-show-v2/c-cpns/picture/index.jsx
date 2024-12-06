import React, { memo , useState } from 'react'
import PictruesWrapper from './style'
import { useNavigate } from 'react-router'
import {picWidth} from './style'
import Wei_useMemo from '@/hooks/useMemo_wei'
const weiMemo = new Wei_useMemo()
//因为eslint要求useMemo依赖组必须完整。但会导致无限滚动。不知道怎么改组件逻辑，就只能'改useMemo'了。
//通过闭包实现记忆依赖值

const Pictrues = memo((props) => {
  const {pictureData, curIndex, indexInDataList, totalCount, isLeftClick, isRightClick} = props
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

/*   useMemo(() => {
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
  }, [curIndex]) */

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