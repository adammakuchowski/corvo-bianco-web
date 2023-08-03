import axios, {Canceler} from 'axios'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {Product, ProductCart} from '@/types/types'
import {AppState} from '@/app/store'

export interface ProductsState {
  productsList: Product[];
  productsCart: ProductCart[];
  favoriteProducts: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

const initialState: ProductsState = {
  productsList: [],
  productsCart: [],
  favoriteProducts: [],
  status: 'idle',
  error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    let cancel: Canceler
    const response = await axios.get('http://localhost:1337/products/getAllProducts', {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })

    return response.data
  } catch (error: any) {
    console.error('[Fetch Products Error]:', error.message)
    throw error
  }
})

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: {
      reducer(state, action) {
        const {productsCart} = state
        const {payload: {product: {id}, quantity}} = action
        
        if (productsCart.every(productCart => productCart.product.id !== id)) {
          state.productsCart.push(action.payload)
        } else {
          const updatedProductsCart = productsCart.map(productCart => {
            if(productCart.product.id !== id) return productCart
            
            return {...productCart, quantity: productCart.quantity + quantity}
          })
          
          state.productsCart = updatedProductsCart
        }
      },
      prepare(product: Product, quantity: number): any {
        return {
          payload: {
            product,
            quantity
          }
        }
      }
    },
    clearCart(state) {
      state.productsCart = []
    },
    addToFavorites(state, action) {
      state.favoriteProducts.push(action.payload)
    },
    updateQuantityProductCart(state, action) {
      const {id, actionOperator, value} = action.payload
      const updatedProductCart = state.productsCart.map((productCart: ProductCart) => {
        if (productCart.product.id !== id) return productCart

        const {quantity} = productCart
        if (actionOperator === 'increment') return {...productCart, quantity: quantity + value}
        if (actionOperator === 'decrement') return {...productCart, quantity: quantity - value}

        return productCart
      })

      state.productsCart = updatedProductCart
    },
    removeProductCart(state, action) {
      const {id} = action.payload
      const updatedProductCart = state.productsCart.filter((productCart: ProductCart) => productCart.product.id !== id)

      state.productsCart = updatedProductCart
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.productsList = state.productsList.concat(action.payload)
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const {
  addToCart,
  clearCart,
  addToFavorites,
  updateQuantityProductCart,
  removeProductCart,
} = productsSlice.actions

export const getAllProducts = (state: AppState) => state.products.productsList
export const getProductsCart = (state: AppState) => state.products.productsCart
export const getTotalCartPrice = (state: AppState) => {
  const productsCart = state.products.productsCart

  return productsCart.reduce((total: number, amount: ProductCart): number => {
    const {product: {price}, quantity} = amount
    const totalPrice = price * quantity

    return total + totalPrice
  }, 0)
}

export default productsSlice.reducer
