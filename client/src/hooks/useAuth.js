import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ROLES} from '../config/roleList'
import jwt from 'jwt-decode'
import { useRefreshMutation } from '../Store/Query/MainQuery'

const useAuth =()=>{

    
    const [tokens,{}]= useRefreshMutation()
    const RoleAction=async()=>{
       
        let  Admin=false
        let Teacher=false
        let Student=false
        
        const {data} = await tokens()
        console.log("Auth",data?.accessToken);

    if(data){
            
        const {UserInfo} = jwt(data.accessToken)

        console.log("user info",UserInfo)
        if(UserInfo.roles.includes(ROLES.Admin)){
           Admin= true

        }
        if(UserInfo.roles.includes(ROLES.Teacher)){
            Teacher = true
           
        }
        if(UserInfo.roles.includes(ROLES.User)){
           Student= true
            
        }
   
        return {Admin,Teacher,Student,UserInfo}
    }
    else
        return false
    }
    return {RoleAction}
    
    
}

export default useAuth