import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: true,
  token: null,
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
})

export const { setUser, setToken } = sessionSlice.actions
export default sessionSlice.reducer
