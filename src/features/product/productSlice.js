import { 
  createSlice, 
  createAsyncThunk, 
  createEntityAdapter 
} from '@reduxjs/toolkit'
import axios from 'axios'

export const getProducts = createAsyncThunk("products/getProducts", async() => {
  const response = await axios.get('http://localhost:5000/products')
  return response.data
})

export const addProduct = createAsyncThunk("products/addProducts", async({title, price}) => {
  const response = await axios.post('http://localhost:5000/products',{
    title, price
  })
  return response.data
})

export const editProduct = createAsyncThunk("products/editProduct", async({id, title, price}) => {
  const response = await axios.patch(`http://localhost:5000/products/${id}`,{
    title, price
  })
  return response.data
})

export const deleteProduct = createAsyncThunk("products/deleteProduct", async(id) => {
  await axios.delete(`http://localhost:5000/products/${id}`)
  return id
})

const productEntity = createEntityAdapter({
  selectId: product => product.id
})


const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),

  extraReducers: {
    [ getProducts.fulfilled ]: (state, action) => {
      productEntity.setAll(state, action.payload)
    },
    [ addProduct.fulfilled ]: (state, action) => {
      productEntity.addOne(state, action.payload)
    },
    [ deleteProduct.fulfilled ]: (state, action) => {
      productEntity.removeOne(state, action.payload)
    },
    [ editProduct.fulfilled ]: (state, action) => {
      productEntity.updateOne(state, {
        id: action.payload.id,
        updates: action.payload
      })
    }
  }
})

export default productSlice.reducer

export const productSelectors = productEntity.getSelectors(state => state.product)