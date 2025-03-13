import { createSlice } from "@reduxjs/toolkit"
import { increment, decrement, set } from "./commands"

const countSlice = createSlice({
   name: 'count',
   initialState: {
    value: 0
   },
   extraReducers: (builder) => {
    builder.addCase(increment.fulfilled, (state, action) => {
        state.value = action.payload
    }),
    builder.addCase(decrement.fulfilled, (state, action) => {
        state.value = action.payload
    })
    builder.addCase(set.fulfilled, (state, action) => {
        state.value = action.payload
    })
   }
})

export default countSlice.reducer