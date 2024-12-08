import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
    },
    reducers :{
        addNowPlayingName : ( state , action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state , action)=>{
            state.trailerVideo = action.payload;
        }
    }
})

export const  {addNowPlayingName , addTrailerVideo} = movieSlice.actions;

export  default movieSlice.reducer;