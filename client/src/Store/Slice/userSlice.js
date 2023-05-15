import { createSlice } from "@reduxjs/toolkit";

const IsLogin = createSlice({
    name:"user/login",
    initialState:{
        isLogin:false,
        userID:""
    },
    reducers:{
        LoginUser:(state,action)=>{
            state.isLogin = action.payload
        },
        UserInformation:(state,action)=>{
            state.userID =action.payload
        },
        logoutUser:(state,action)=>{
            state.userID = ""
        }
    }
})


export default IsLogin.reducer
export const {LoginUser,UserInformation,logoutUser} = IsLogin.actions