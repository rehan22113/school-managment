import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {setToken} from '../Store/Slice/TokenSlice'
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../Store/Query/MainQuery";
import useAuth  from "../Hooks/useAuth";

const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const {RoleAction}= useAuth(); 
  const [isError,setIsError] = useState(false)
  const [login,{isLoading}] = useLoginMutation();
  const [UserData,setUserData] = useState({
    phone:"",
    password:""
  })
  const DataHandler= (e)=>{
    const {name,value} = e.target;
    setUserData({...UserData,[name]:value})
  }
  const PostData = async(e)=>{
      e.preventDefault()
      const {accessToken} = await login(UserData).unwrap();
      if(accessToken){
        await dispatch(setToken({accessToken}))
        const Roles = await RoleAction()
        console.log("login now",Roles);
        if(Roles){    
          if(Roles.Admin){
            Navigate("/dashboard/admin")
          }
          else if(Roles.Vendor){
            Navigate("/dashboard/teacher")
          }
          else if(Roles.User){
            Navigate("/dashboard/student")
          }
        }
        else{
          setIsError(true)
        }
      }
      
  }
  return (
    <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
    <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
        Sigin
      </h2>
      <form action className="w-full">
        <div id="input" className="flex flex-col w-full my-5">
          <label htmlFor="Phone" className="text-gray-500 mb-2">Phone</label>
          <input name="phone" onChange={DataHandler} type="text" id="Phone" placeholder="Please insert your Phone" className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" />
        </div>
        <div id="input" className="flex flex-col w-full my-5">
          <label htmlFor="password" className="text-gray-500 mb-2">Password</label>
          <input type="password" name="password" onChange={DataHandler} id="password" placeholder="Please insert your password" className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" />
        </div>
        <div id="button" className="flex flex-col w-full my-5">
          <button onClick={PostData} type="button" className="w-full py-4 bg-green-600 rounded-lg text-green-100">
            <div className="flex flex-row items-center justify-center">
              <div className="mr-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </div>
              <div className="font-bold">Sigin</div>
            </div>
          </button>
          <div className="flex justify-evenly mt-5">
            <Link className="w-full text-center font-medium text-gray-500">Recover password!</Link>
            <Link to="/signup" className="w-full text-center font-medium text-gray-500">Singup!</Link>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login