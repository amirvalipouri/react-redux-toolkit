import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './reducer/Posts/posts'
import userReducer from './reducer/Users/users'

export const store = configureStore({
    reducer : {
        posts : postsReducer,
        users : userReducer
    }
})