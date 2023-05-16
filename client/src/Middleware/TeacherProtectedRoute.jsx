import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../Hooks/useAuth';
import { useRefreshMutation } from '../Store/Query/MainQuery';

const TeacherProtectedRoute = () => {
  const location = useLocation()
  const [refresh,{}]= useRefreshMutation();
  const  {RoleAction} = useAuth()
  const token = useSelector((state)=>state.tokenSlice.token)
  const Navigate = useNavigate();
  const Refresh=async()=>{
    await refresh()
    const Roles=await RoleAction();

    if(!token && !Roles.Teacher){

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

export default TeacherProtectedRoute
