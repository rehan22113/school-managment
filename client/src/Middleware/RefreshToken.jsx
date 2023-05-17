import React,{useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { useRefreshMutation } from '../Service/Api/ApiQuery';

const RefreshToken = () => {
    
    const [Refresh,{}] = useRefreshMutation()
    async function CallRefresh(){
       const res= await Refresh()
    }
  useEffect(() => {
    CallRefresh()
}, []);
  return (
    <Outlet/>
  )
}

export default RefreshToken