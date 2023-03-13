import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    currentMode :false
}
const ThemeMode = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.currentMode = !state.currentMode 
        }
    }
})
export const { toggleMode } = ThemeMode.actions;
export default ThemeMode.reducer;
