import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import fetchGoodpriceData from '@/services/modules/home-goodprice';
const fetchGoodpriceDataAction = createAsyncThunk('goodprice', async () => {
  const data = await fetchGoodpriceData();
  return data
})

const slice = createSlice({
  name:'goodprice',
  initialState:{
    goodpriceData:{}
  },
  reducers:{
    getGoodpriceData(state, {payload}) {
      state.data = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoodpriceDataAction.fulfilled, (state, { payload }) => {
      state.goodpriceData = payload
    })
  }
})

export default slice.reducer
export const {getLongforData} = slice.actions
export {fetchGoodpriceDataAction}