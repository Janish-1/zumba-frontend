import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useState } from 'react';
const PrivateRoutes =() => {
  const[isLoggedin,setLoggedin]=useState(null);
  console.log("islogged in ",isLoggedin)
  const auth = { token: true };
  useEffect(()=>{
  const user=localStorage.getItem('userId')
  if(user){
    setLoggedin(true);
  }
  },[isLoggedin])
  return (
    auth.token ? <Outlet/> : <Navigate to='/welcome-screen'/>
  )
}

export default PrivateRoutes
