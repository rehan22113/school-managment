import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";
import { Query } from "./Query/MainQuery";
import TokenSlice from "./Slice/TokenSlice";


export const store = configureStore(
    {
        reducer:{
            userslice:userSlice,
            tokenSlice:TokenSlice,
            [Query.reducerPath]:Query.reducer
        },
        middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(Query.middleware)
    }
) 
