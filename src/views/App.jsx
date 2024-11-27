import React, { memo } from 'react'
import routes from '../router'
import {useRoutes} from 'react-router'
import Header from '../components/app-header'
import AppWrapper from './style'

const App = memo(() => {

  return (
    <AppWrapper>
      <Header/>
        {useRoutes(routes)}
      {/* <Footer/> */}
      <div className="place-holder"></div>
    </AppWrapper>
  )
})

export default App