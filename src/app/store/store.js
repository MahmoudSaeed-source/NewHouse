import { configureStore } from '@reduxjs/toolkit'
import ThemeModeReducer from '../features/darkMode/darkModeSlice';
import HousesForSaleReducer from '../features/forSale/forSale'
import HouseForRentReducer from '../features/forRent/ForRentSlice'


const store = configureStore({
    reducer: {
        mode: ThemeModeReducer,
        forSale: HousesForSaleReducer,
        forRent: HouseForRentReducer,
     
    },

   
})
export default store;