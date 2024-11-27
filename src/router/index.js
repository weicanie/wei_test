import Demo from '@/views/demo'
import {lazy} from 'react'
import {Navigate} from 'react-router'
const Home = lazy(() => import('@/views/home'))
const More = lazy(() => import('@/views/more'))
const Detail = lazy(() => import('@/views/detail'))

const routes = [
  {
    path:'/',
    element:<Navigate to='/home'/>
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/more',
    element:<More/>
  },
  {
    path:'/detail/:index',
    element:<Detail/>
  },
  {
    path:'/demo',
    element:<Demo/>
  }
]


export default routes