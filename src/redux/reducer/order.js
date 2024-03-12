import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {}
}

const order = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.data = action.payload
        },
        removeOrder: () => {
            return initialState
        }
    }
})

export const {setOrder,  removeOrder} = order.actions
export default order.reducer 