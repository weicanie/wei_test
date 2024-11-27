import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import fetchLongforData from '@/services/modules/home-longfor';

const fetchLongforDataAction = createAsyncThunk('longfor', async () => {
  const data = await fetchLongforData();
  return data
})

const slice = createSlice({
  name:'longfor',
  initialState:{
    longforData:{}
  },
  reducers:{
    getLongforData(state, {payload}) {
      state.data = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLongforDataAction.fulfilled, (state, { payload }) => {
      state.longforData = payload
    })
  }
})

export default slice.reducer
export const {getLongforData} = slice.actions
export {fetchLongforDataAction}