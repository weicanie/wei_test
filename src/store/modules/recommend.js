import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import fetchRecommendData from '@/services/modules/home-recommend';
const fetchRecommendDataAction = createAsyncThunk('recommend', async () => {
  const data = await fetchRecommendData();
  return data
})

const slice = createSlice({
  name:'recommend',
  initialState:{
    recommendData:{}
  },
  reducers:{
    getRecommendData(state, {payload}) {
      state.data = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecommendDataAction.fulfilled, (state, { payload }) => {
      state.recommendData = payload
    })
  }
})

export default slice.reducer
export const {getRecommendData} = slice.actions
export {fetchRecommendDataAction}