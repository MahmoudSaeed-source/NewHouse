import { configureStore } from '@reduxjs/toolkit'
import ThemeModeReducer from '../features/darkMode/darkModeSlice';
import HousesForSaleReducer from '../features/forSale/forSale'
import HouseForRentReducer from '../features/forRent/ForRentSlice'
import agentSliceReducer from '../features/agent/Agent';
import usersSliceReducer from '../features/users/UserSlice';

const store = configureStore({
    reducer: {
        mode: ThemeModeReducer,
        forSale: HousesForSaleReducer,
        forRent: HouseForRentReducer,
        agentList :agentSliceReducer,
        users: usersSliceReducer
    },

   
})
export default store;