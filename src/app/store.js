import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
import movieReducer from '../component/movieSlice'



export default configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer
    },
    middleware:getDefaultMiddleware({
        serializableCheck:false
    })
})