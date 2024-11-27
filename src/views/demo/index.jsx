import React, { memo , useState} from 'react'
import DemoWrapper from './style'
import { TransitionGroup, CSSTransition, SwitchTransition } from "react-transition-group"
const Demo = memo(() => {
  const [isShow,setIsSHow] = useState(true)
  return (
    <DemoWrapper>
      {/* { 
        <CSSTransition
          in={isShow} 

          classNames="rtg_list" 
          timeout={2000}
        >
        <div className="list">
        {
          [1,2,3,4].map(() => {
            return (
              <div className="item"></div>
            )
          })
        }
        </div>
        </CSSTransition>
      }
      {!isShow&&<div className="show" onClick={() => setIsSHow(true)}>显示</div>
      }
      {isShow&&<div className="hide" onClick={() => setIsSHow(false)}>隐藏</div>
      } */}
    </DemoWrapper>
  )
})

export default Demo