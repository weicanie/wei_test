import React, { memo, useEffect, useRef, useState } from 'react'
import ScrollViewWrapper from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Bottom from './c-cpns/city-bottom'
//实现了响应窗口大小。但实际网站是固定宽度
const ScrollView = memo((props) => {
  const [leftShow, setLeftShow] = useState(false)
  const [rightShow, setRightShow] = useState(false)
  const [startIndex,setStartIndex] = useState(0)
  const [move, setMove] = useState(0)
  //可见区域宽度
  const [tabBarInnerWidth] = useState(1032)
  const {cityData} = props
  //作用：记录向左移动的历史，来用于向右移动和控制右侧按钮显示
  //不能直接定义栈，因为组件重新渲染时重新定义
  const moveStackRef = useRef([0])
  const moveStack = moveStackRef.current
  // const marginWidth = 20;//引用的元素宽度已经包含 marginWidth
  const startRef = useRef()
  const barRef = useRef()
  useEffect(() => {
    if (barRef.current?.scrollWidth > tabBarInnerWidth) {
      setRightShow(!rightShow)
    }
  },[])

  function rightClickHandler() {
    console.log('rightClickHandler',startRef.current.offsetWidth)
    const scrollToLeft = (move-(startRef.current.offsetWidth))
    setMove(scrollToLeft)
    moveStack.push(scrollToLeft)
    setStartIndex(startIndex + 1)
    if (!leftShow) {
      setLeftShow(!leftShow)
    }
    //右侧按钮的消失条件：可见区内宽度 < 可见区宽度
    const sumMove = moveStack[moveStack.length - 1]
    const barWidth = barRef.current?.scrollWidth
    if(barWidth + sumMove < tabBarInnerWidth + 20) {
      setRightShow(!rightShow)
    }
  }

  function leftClickHandler() {
    if (!rightShow) { 
      setRightShow(!rightShow)
    }
    //回退
    moveStack.pop()
    setMove(moveStack[moveStack.length - 1])
    setStartIndex(startIndex - 1)
    //左侧按钮消失条件：回到初始状态
    if (moveStack.length === 1) {
      setLeftShow(!leftShow)
    }
  }

  return (
    <ScrollViewWrapper move={move}>
      {leftShow&&<div className="left" onClick={() => leftClickHandler()}>{<IconArrowLeft/>}</div>}
      <div className='list-container' ref={barRef}>
        {
          cityData.map((item, index) => (
            <div
              key={item.city}
              className='city-container' 
            >
              <div ref={index === startIndex? startRef : null}>
                <Bottom 
                  item = {item}
                />
              </div>
            </div>
          ))
        }
      </div>
      {rightShow&&<div className="right" onClick={() => rightClickHandler()}>{<IconArrowRight/>}</div>}
    </ScrollViewWrapper>
  )
})

export default ScrollView