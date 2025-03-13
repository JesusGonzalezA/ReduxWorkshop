import { createSlice } from "@reduxjs/toolkit"

const countSlice = createSlice({
   name: 'count',
   initialState: {
    value: 0
   },
   reducers: {
        increment: (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value--
        },
        set: (state, action) => {
            state.value = action.payload
        }
   }
})

export const {
    increment, decrement, set
} = countSlice.actions
export default countSlice.reducer