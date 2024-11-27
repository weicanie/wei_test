import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import fetchPlusData from '@/services/modules/home-plus';
const fetchPlusDataAction = createAsyncThunk('plus', async (extraInfo, store) => {
  const data = await fetchPlusData();
  return data
})

const slice = createSlice({
  name:'plus',
  initialState:{
    plusData:{}
  },
  reducers:{
    getPlusData(state, {payload}) {
      state.data = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlusDataAction.fulfilled, (state, { payload }) => {
      state.plusData = payload
    })
  }
})

export default slice.reducer
export const {getPlusData} = slice.actions
export {fetchPlusDataAction}