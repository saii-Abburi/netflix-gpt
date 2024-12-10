import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null,
        topratedTvShows : null,
    },
    reducers :{
        addNowPlayingName : ( state , action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state , action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies : (state , action )=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state , action )=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state , action )=>{
            state.upcomingMovies = action.payload;
        },
        addTopratedTvShows : (state , action )=>{
            state.topratedTvShows = action.payload;
        }
    }
})

export const  {addNowPlayingName , addTrailerVideo , addPopularMovies ,addTopRatedMovies , addUpcomingMovies , addTopratedTvShows} = movieSlice.actions;

export  default movieSlice.reducer;