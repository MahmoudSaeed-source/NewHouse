import { configureStore } from '@reduxjs/toolkit'
import ThemeModeReducer from '../features/darkMode/darkModeSlice';
import HousesForSaleReducer from '../features/forSale/forSale'
import HouseForRentReducer from '../features/forRent/ForRentSlice'
import agentSliceReducer from '../features/agent/Agent';


const store = configureStore({
    reducer: {
        mode: ThemeModeReducer,
        forSale: HousesForSaleReducer,
        forRent: HouseForRentReducer,
        agentList :agentSliceReducer
     
    },

   
})
export default store;