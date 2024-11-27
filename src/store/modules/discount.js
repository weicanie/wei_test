import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import fetchDiscountData from '@/services/modules/home-discount'

const fetchDiscountDataAction = createAsyncThunk('discount', async () => {
  const data = await fetchDiscountData();
  return data
})

const slice = createSlice({
  name:'discount',
  initialState:{
    discountData:{}
  },
  reducers:{
    getDiscountData(state, {payload}) {
      state.data = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDiscountDataAction.fulfilled, (state, { payload }) => {
      state.discountData = payload
    })
  }
})

export default slice.reducer
export const {getDiscountData} = slice.actions
export {fetchDiscountDataAction}