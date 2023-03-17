import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const headers = {
    method: 'GET',
    url: 'https://realty-in-us.p.rapidapi.com/properties/list-for-sale',
    params: {
        state_code: 'NY',
        city: 'New York City',
        offset: '0',
        limit: '200',
        sort: 'relevance'
    },
    headers: {
        'X-RapidAPI-Key': '32f0a19324msh37e6eae0698204cp18e31ejsnc222b39648da',
        'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
};


const initialState = {
    isLoding: false,
    housesForSale: [],
    erroe:''
}
export const fetchHousesForSale = createAsyncThunk('forSale/fetchHousesForSale',async () => {
    try {
        const response = await axios.request(headers);
           return response.data.listings;
    } catch(error) {
        console.error(error);
        
    }
})
const HousesForSale = createSlice({
    name: 'forSale',
    initialState,
        extraReducers: (builder) => {
            builder.addCase(fetchHousesForSale.pending,(state) => {
                state.isLoding = true
            })
            builder.addCase(fetchHousesForSale.fulfilled,(state,action) => {
                state.isLoding = false
                state.housesForSale = action.payload
                state.erroe = ''
            })
            builder.addCase(fetchHousesForSale.rejected , (state,action)  => {
                state.isLoding = false
                    state.housesForSale = []
                state.erroe = action.error.message
                })
        }
    
})
export default HousesForSale.reducer;
