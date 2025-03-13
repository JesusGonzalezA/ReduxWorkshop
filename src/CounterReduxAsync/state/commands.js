import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from '../api/api'

export const increment = createAsyncThunk('increment', async (payload, thunkApi) => {
    const newValue = await api.increment(thunkApi.getState().counter.value)
    return newValue
})

export const decrement = createAsyncThunk('decrement', async (pyaload, thunkApi) => {
    const newValue = await api.decrement(thunkApi.getState().counter.value)
    return newValue
})

export const set = createAsyncThunk('set', async (valueToSet) => {
    const newValue = await api.set(valueToSet)
    return newValue
})