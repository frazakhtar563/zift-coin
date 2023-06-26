import { configureStore } from '@reduxjs/toolkit'
import walletSlice from './slice/wallet/walletSlice'


export const store = configureStore({
    reducer: {
        wallet: walletSlice,
    },
})