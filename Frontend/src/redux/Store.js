import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from '../features/todo/todoSlice'
import cryptoSlice from './Slice'

export const store = configureStore({
    // reducer: todoReducer
    reducer: {
        crypto:cryptoSlice
    }
    
})