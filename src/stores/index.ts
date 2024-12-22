import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import sessionSlice from './slices/sessionSlice'

export const store = configureStore({
  reducer: {
    session: sessionSlice,
    counter: counterSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
