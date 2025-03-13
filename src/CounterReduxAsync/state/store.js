import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import countSlice from './countSlice'
import { thunk } from "redux-thunk";

export default configureStore({
    reducer: { 
        counter: countSlice 
    }
}, applyMiddleware(thunk))