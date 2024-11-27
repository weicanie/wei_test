import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import fetchEntireData from '@/services/modules/more-entire';
const fetchEntireDataAction = createAsyncThunk('entire', async (extraInfo, store) => {
  // console.log('fetchEntireDataAction', extraInfo)
  const offset = extraInfo
  const data = await fetchEntireData(offset);
  return data
})

const slice = createSlice({
  name:'entire',
  initialState:{
    entireData:{}
  },
  reducers:{
    getEntireData(state, {payload}) {
      state.entireData = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEntireDataAction.fulfilled, (state, { payload }) => {
      state.entireData = payload
    }).addCase(fetchEntireDataAction.rejected, (state, { payload }) => {
      console.log('fetchEntireDataAction','rejected' )
    })
  }
})

export default slice.reducer
export const {getEntireData} = slice.actions
export {fetchEntireDataAction}