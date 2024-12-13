import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js';
import movieReducer from './MoviesSlice.js'
import gptReducer from './GptSlice.js'
import configReducer from './configSlice.js'
const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies : movieReducer,
            gpt : gptReducer,
            config : configReducer
        },
    }
)
export default appStore;