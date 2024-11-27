import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import fetchHighscoreData from '@/services/modules/home-highscore';
const fetchHighscoreDataAction = createAsyncThunk('highscore', async () => {
  const data = await fetchHighscoreData();
  return data
})

const slice = createSlice({
  name:'highscore',
  initialState:{
    highscoreData:{}
  },
  reducers:{
    getHighscoreData(state, {payload}) {
      state.data = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHighscoreDataAction.fulfilled, (state, { payload }) => {
      state.highscoreData = payload
    })
  }
})

export default slice.reducer
export const {getHighscoreData} = slice.actions
export {fetchHighscoreDataAction}