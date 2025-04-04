import { configureStore } from "@reduxjs/toolkit";
import countSlice from './countSlice'

export default configureStore({
    reducer: { 
        counter: countSlice 
    }
})