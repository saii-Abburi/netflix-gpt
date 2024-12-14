import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
    name : 'gpt',
    initialState : {
        showGptSearch : false,
        GptMovies : null,
    },
    reducers : {
        toggleGptSearchView : (state )=>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult : (state , action)=>{
            state.GptMovies = action.payload;
        }
    }
})

export const { toggleGptSearchView , addGptMovieResult } = gptslice.actions;

export default gptslice.reducer