import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate,useLocation } from 'react-router-dom'
import { useRefreshMutation } from '../Store/Query/MainQuery';
import useAuth from '../Hooks/useAuth';
const AdminProtectedRoute = () => {
  const location = useLocation()
  const {RoleAction} = useAuth()
  const [refresh,{}]= useRefreshMutation();
  const token = useSelector((state)=>state.tokenSlice.token)
  const Navigate = useNavigate();
  const Refresh=async()=>{
   
    const Roles=await RoleAction();
    // console.log("admin role",Roles)
    if(token && Roles.Admin){
      console.log("Authorize")
    }
    else if(!token && !Roles.Admin){
      // console.log("roles",Roles)
      console.log("Invalid User")
      Navigate('/',{ state: { loc: location.pathname } })
    }
   
}
const Run = async()=>{
  const refreshToken=await refresh()
  console.log("rt",refreshToken)
}
useEffect(()=>{
  // Run()
  Refresh()
},[])
  return (
    <Outlet/>
  )
}

export default AdminProtectedRoute
