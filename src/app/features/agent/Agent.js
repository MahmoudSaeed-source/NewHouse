import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios';
const initialState = {
    loading: false,
    agentList: [],
    error:''
}
const options = {
    method: 'GET',
    url: 'https://realty-in-us.p.rapidapi.com/agents/list',
    params: {
        postal_code: '11234',
        offset: '0',
        limit: '20',
        sort: 'recent_activity_high',
        types: 'agent'
    },
    headers: {
        'X-RapidAPI-Key': '32f0a19324msh37e6eae0698204cp18e31ejsnc222b39648da',
        'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
};

export const fetchAgentList = createAsyncThunk('Agent/fetchAgentList',async () => {
    try {
        const response = await axios.request(options);
        return response.data.agents
    } catch(error) {
        console.log(error)
    }
    
})
const agentSlice = createSlice({
    name: 'Agent',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAgentList.pending,(state) => {
            state.loading = true
        })
        builder.addCase(fetchAgentList.fulfilled,(state,action) => {
            state.loading = false
            state.agentList = action.payload
            state.error = ''
        })
        builder.addCase(fetchAgentList.rejected,(state,action) => {
            state.loading = false
            state.agentList = []
            state.error = action.error
        })
    }
})
export default agentSlice.reducer