import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isConnected: false,
    acc: ''
}

export const walletSlice = createSlice({
    name: 'walletSlice',
    initialState,
    reducers: {

        updateWalletInfo: (state, action) => {
            state.isConnected = true
            state.acc = action.payload
        },
    },
})

export const { updateWalletInfo } = walletSlice.actions

export default walletSlice.reducer