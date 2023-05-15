import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import PreventAfterLogin from './Middleware/PreventAfterLogin'

import Home from './Pages/Home'
import AdminDashboard from './Pages/Admin/Dashboard'
import Main from './Pages/Admin/Dashboard/Main'
// Teacher
import TeacherDashboard from './Pages/Teacher/Dashboard' 
import TeacherMain from './Pages/Teacher/Dashboard/TeacherMain'
import AllUser from './Pages/Admin/Dashboard/AllUser'
import AllTeacher from './Pages/Admin/Dashboard/Allteachers'
import AllStudent from './Pages/Admin/Dashboard/AllStudents'
import ManageActivity from './Pages/Admin/Dashboard/ManageActivity'
import ManageNoticeBoard from './Pages/Admin/Dashboard/ManageNoticeBoard'
import ProfileSetting from './Pages/Admin/Dashboard/ProfileSetting'
import AddNewStudent from './Pages/Admin/Dashboard/AddNewStudent'
import AddNewTeacher from './Pages/Admin/Dashboard/AddNewTeacher'
import Login from './Component/login'
import Signup from './Component/signup'
import StudentFeeReport from './Pages/Admin/Dashboard/StudentFeeReport'

//Student
import StudentDashboard from './Pages/Student/Dashboard'
import StudentMain from './Pages/Student/Dashboard/StudentMain'

function App() {

  return (
    <>
    {/* <h1>Hello</h1> */}
     {/* Unprotected Routes */}
     <Routes >
       {/* <Route element={<RefreshToken/>} > */}
        {/* <Route path='/payment' element={<PaymentPage />}/> */}
        
        <Route element={<PreventAfterLogin/>}> 
          <Route path="/" element={<Home />} >
            <Route index element={<Login />}/>
            <Route path='signup' element={<Signup/>} />
          </Route>
        </Route>
       
       {/* Student Routes */}
        <Route path='/dashboard/student' element={<StudentDashboard/>}>
          <Route index element={<StudentMain />} />
        </Route>

       {/* End Student Route */}
      

    {/* Protected Routes */}
        <Route path='/dashboard/teacher' element={<TeacherDashboard/>} >
          <Route index element={<TeacherMain />}/>
        <Route path='main' element={<TeacherMain />} />

        </Route>
    {/* </Route> */}

    {/* Protected Routes */}
      <Route path='/dashboard/admin' element={<AdminDashboard />} > 
        <Route index element={<Main />} />
        <Route path='main' element={<Main />} />
        <Route path='alluser' element={<AllUser/>} />
        <Route path='allteacher' element={<AllTeacher/>} />
        <Route path='allstudent' element={<AllStudent/>} />
        <Route path='feereport' element={<StudentFeeReport/>} />
        <Route path='addnewstd' element={<AddNewStudent/>} />
        <Route path='addnewteacher' element={<AddNewTeacher/>} />
        <Route path='manageactivity' element={<ManageActivity/>} />
        <Route path='managenotice' element={<ManageNoticeBoard />} />
        <Route path='setting' element={<ProfileSetting/>} />
      </Route>
    {/* </Route> */}  


        {/* <Route path='*' element={<ErrorPage />} /> */}
      </Routes>
    </>
  )
}

export default App
