import {configureStore} from '@reduxjs/toolkit'
import discountReducer from './modules/discount'
import recommendReducer from './modules/recommend'
import longforReducer from './modules/longfor'
import goodpriceReducer from './modules/goodprice'
import plusReducer from './modules/plus'
import highscoreReducer from './modules/highscore'
import entireReducer from './modules/entire'
import headerReducer from './modules/header'
const store = configureStore({
  reducer:{
    discount:discountReducer,
    recommend:recommendReducer,
    longfor:longforReducer,
    goodprice:goodpriceReducer,
    highscore:highscoreReducer,
    plus:plusReducer,
    entire:entireReducer,
    header:headerReducer,
  }
})

export default store