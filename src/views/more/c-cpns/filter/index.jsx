import React, { memo, useState } from 'react'
import FilterWrapper from './style'
import classNames from 'classnames'

const Filter = memo(() => {
  const options = ['人数','可免费取消','房源类型','价格','位置区域','闪定','卧室/床数','促销/优惠','更多筛选条件',]
  const [actives, setActives] = useState([])
  const clickHandler = (index) => {
    const indexInActives = actives.indexOf(index)
    //数据不变性原则，‘只换不修’
    const nweActives = [...actives]
    if (indexInActives !== -1) {
      nweActives.splice(indexInActives, 1)
    } else {
      nweActives.push(index)
    }
    setActives(nweActives)
  }
  return (
    <FilterWrapper>
      <div className="list-container">
        {
          options.map((item, index) => {
            return (
              <div 
                className={classNames('item', {'active':actives.indexOf(index) !== -1})}
                key={item}
                onClick={() => clickHandler(index)}
              >
                {item}
              </div>
            )
          })
        } 
      </div>
    </FilterWrapper>
  )
})

export default Filter