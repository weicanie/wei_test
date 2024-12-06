import { useEffect, useState} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

//抽取了组件发送网络请求和订阅数据的hook
//useSelector取代store订阅
function useFetchData(setData, acion, rStr,sStr,offset=0) {
  // console.log('useFetchData', offset)
  const [last, setLast] = useState({})
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(acion(offset))
  }, [offset])

  const {data} = useSelector((state) => {
    return {
      data:state[rStr][sStr]
    }
  }, shallowEqual)

  if (!shallowEqual(last, data)) {
    setLast(data)
    setData(data)
  }
  
}

export default useFetchData
