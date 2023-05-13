
import axios from 'axios';
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

const options = {
    method: 'GET',
    url: 'https://realty-in-us.p.rapidapi.com/properties/list-for-rent',
    params: {
        state_code: 'NY',
        city: 'New York City',
        limit: '200',
        offset: '0',
        sort: 'relevance'
    },
    headers: {
        'X-RapidAPI-Key': '869eded064msh22111fa52e0e35dp17d7d5jsn021dcfb4eb5f',
        'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
};
export const fetchHousesForRent = createAsyncThunk('houseForRent/fetchHoueseForRent',async () => {
    try {
        const response = await axios.request(options)
        
        return response.data.listings;
    } catch (error) {
        console.error(error);
   }
})

const initialState = {
    loading: false,
    houseForRent: [],
    error: ''
}
     const houseForRent = createSlice({
        name: 'houseForRent',
        initialState,
        extraReducers: (builder) => {
            builder.addCase(fetchHousesForRent.pending,(state) => {
                state.loading = true
            })
            builder.addCase(fetchHousesForRent.fulfilled,(state,action) => {
                state.loading = false
                    state.houseForRent = action.payload
                    state.error = ''
            })
            builder.addCase(fetchHousesForRent.rejected,(state,action) => {
                state.loading = false
                    state.houseForRent = []
                    state.error = action.error.message
            })
        }
    })
  

export default houseForRent.reducer;