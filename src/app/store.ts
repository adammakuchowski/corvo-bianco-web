import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/products/productsSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
})

export type AppState = ReturnType<typeof store.getState>

export default store
