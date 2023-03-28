import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/apiSlice'
import authSliceReducer from '../features/auth/authSlice'
import studentsSliceReducer from '../features/student/studentsSlice'

export const store = configureStore({
  // included fetcher reducer
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer, 
     auth: authSliceReducer,
     students: studentsSliceReducer,

  },
  // redux devTools false for production
  devTools: process.env.NODE_ENV !== 'production', 
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
})