import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js';
import movieReducer from './MoviesSlice.js'

const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies : movieReducer
        },
    }
)
export default appStore;