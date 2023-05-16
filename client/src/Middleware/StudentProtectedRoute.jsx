import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate,useLocation } from 'react-router-dom'
import { useRefreshMutation } from '../Store/Query/MainQuery';
import useAuth from '../Hooks/useAuth';
const StudentProtectedRoute = () => {
  const location = useLocation();
  const {RoleAction} = useAuth()
  const [refresh,{}]= useRefreshMutation();
  const token = useSelector((state)=>state.tokenSlice.token)
  const Navigate = useNavigate();
  const Refresh=async()=>{
    console.log("loc",location.state)
    await refresh()
    const Roles=await RoleAction();

    if(!token && !Roles.Student){
  
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

export default StudentProtectedRoute
