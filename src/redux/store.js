import { configureStore } from '@reduxjs/toolkit'
import calculationsReducer from './reducers/calculations'
export const store = configureStore({
  reducer: {
    calculations:calculationsReducer,
  },
})