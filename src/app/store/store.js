import { configureStore } from '@reduxjs/toolkit'
import ThemeModeReducer from '../features/darkMode/darkModeSlice';
import HousesForSaleReducer from '../features/forSale/forSale'


const store = configureStore({
    reducer: {
        mode: ThemeModeReducer,
        forSale: HousesForSaleReducer,
     
    },

   
})
export default store;