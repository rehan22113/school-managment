import React,{useState,useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useRefreshMutation } from '../Store/Query/MainQuery'
import useAuth from '../Hooks/useAuth'
import { useSelector } from 'react-redux'
const PreventAfterLogin = () => {
    const UserRoles = useSelector(state=>state.RoleSlice)
    const [refresh,{}] = useRefreshMutation()
    const Navigate = useNavigate()
    const {RoleAction} = useAuth();
    const isLogin = async()=>{
      const {data} = await refresh()
      const Roles = await RoleAction();

      if(Roles){
        if(Roles.Admin){
          Navigate("/dashboard/admin")
        }
        else if(Roles.Teacher){
          Navigate("/dashboard/teacher")
        }
        else if(Roles.Student){
          Navigate("/dashboard/student")
        }
      }      
      }  
   
      useEffect(() => {
        
        isLogin()
      }, []);

      return <Outlet/>
}

export default PreventAfterLogin