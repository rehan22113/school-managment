import React,{useState,useEffect} from 'react'
import { Outlet, useNavigate,useLocation } from 'react-router-dom'
import { useRefreshMutation } from '../Store/Query/MainQuery'
import useAuth from '../Hooks/useAuth'
import { useSelector } from 'react-redux'
const PreventAfterLogin = () => {
    const {state} =useLocation();
    // const UserRoles = useSelector(state=>state.RoleSlice)
    // const [refresh,{}] = useRefreshMutation()
    const Navigate = useNavigate()
    const {RoleAction} = useAuth();
    const isLogin = async()=>{
      // const {data} = await refresh();
      const Roles = await RoleAction();
      console.log("new",Roles)

      if(Roles){
        if(state?.loc){
          Navigate(state.loc);
        } 
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