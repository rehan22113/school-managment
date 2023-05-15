import React from 'react'
import Login from '../Component/login'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
<>
<div className="container px-6 mx-auto">
  <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
    <div className="flex flex-col w-full">
      <div>
        <svg className="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </div>
      <h1 className="text-5xl text-gray-800 font-bold">School Dashboard</h1>
      <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
        Control and monitorize your website data from dashboard.
      </p>
    </div>
   <Outlet/>
  </div>
</div>
</>
  )
}

export default Home