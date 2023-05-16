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
    await refresh()
    const Roles=await RoleAction();

    if(!token && !Roles.Admin){
      console.log("roles",Roles)
      Navigate('/',{ state: { loc: location.pathname } })
      console.log("Invalid User")
    }
   
}
useEffect(()=>{
  
  Refresh()
},[])
  return (
    <Outlet/>
  )
}

export default AdminProtectedRoute
