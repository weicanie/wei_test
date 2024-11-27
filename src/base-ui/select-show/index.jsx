import React, { memo } from 'react'
import PictureShowWrapper from './style'
import classNames from 'classnames'

const PictureShow = memo((props) => {
  const {isBrowserShow_pass} = props
  const {picture_urls} = props.pictureUrls
  const clickHandler = () => {
    isBrowserShow_pass(true)
  }
  return (
    <PictureShowWrapper>
      {<div className="pic-containner">
        {
          picture_urls.slice(0,5).map((item, index) => {
            return (
              <div 
                className={classNames({
                  'first-pic':index===0,
                  'pic':index!==0,
                })}
                key={picture_urls[index]}
              >
                <img 
                  src={picture_urls[index]} 
                  alt="loading~" 
                  
                />
                <div 
                  className="cover"
                  onClick={() => clickHandler()}
                ></div>
              </div>
            )
          })
        }
      </div>
      }
    </PictureShowWrapper>
  )
})

export default PictureShow