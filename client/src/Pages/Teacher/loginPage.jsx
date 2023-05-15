import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import useAuth from '../../Hooks/useAuth'
import { useLoginMutation } from '../../Service/Api/ApiQuery'
import { setToken } from '../../Service/Slice/tokenSlice'
const loginPage = () => {
  const Navigate = useNavigate()
  const [login] = useLoginMutation()
  const dispatch=useDispatch()
  const {RoleAction} = useAuth()
  const [data,setData]= useState({
    email:"",
    password:""
  })
  const HandleLogin=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
  }
  const PostData = async(e)=>{
    e.preventDefault()
    const {accessToken} = await login(data).unwrap();
    if(accessToken){
      await dispatch(setToken({accessToken}))
      const Roles = await RoleAction()
      console.log("login now",Roles);
      if(Roles){
       
        if(Roles.Admin){
          Navigate("/admin/ratayo/dashboard")
        }
        else if(Roles.Vendor){
          Navigate("/dashboard/vendor")
        }
        else if(Roles.User){
          Navigate("/dashboard/customer")
        }
      }
      else{
        setIsError(true)
      }
    }
    
}
  return (
  <>
<div className="flex items-center justify-center h-screen">
  {/* Login Container */}
  <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
    <div className="mb-8 flex justify-center">
      <img className="w-24" src={logo} alt />
    </div>
    <div className="flex flex-col text-sm rounded-md">
      <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Email Address" name='email' onChange={HandleLogin} value={data.email} />
      <input onChange={HandleLogin} name="password" value={data.password} className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="password" placeholder="Password" />
    </div>
    <button className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" type="button" onClick={PostData}>Login As Admin</button>
    <div className="mt-5 flex justify-between text-sm text-gray-600">
      <a href="#">Forgot password?</a>
      {/* <a href="#">Sign up</a> */}
    </div>
   
    <div className="mt-5 flex text-center text-sm text-gray-400">
      <p>
        This site is protected by reCAPTCHA and the Google <br />
        <a className="underline" href>Privacy Policy</a>  and <a className="underline" href>Terms of Service</a>  apply.
      </p>
    </div>
  </div>
</div>
</>
  )
}

export default loginPage