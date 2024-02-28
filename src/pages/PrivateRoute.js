import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useState } from 'react';
import { useStateContext } from '../context/ContextProvider';
const PrivateRoutes =() => {
  const {isauthenticate}=useStateContext();
  console.log("isauth",isauthenticate)
  const[isLoggedin,setLoggedin]=useState(localStorage.getItem('userId')?true:false);
  console.log("islogged in ",isLoggedin)
  const auth = { token: true };
  
  useEffect(() => {
    console.log("Inside useEffect");
    const user = localStorage.getItem('userId');
    console.log("User from localStorage:", user);
    if (user) {
      setLoggedin(true);
    }
  }, []);

  console.log("isLoggedin:", isLoggedin);
  return (
    isLoggedin ? <Outlet/> : <Navigate to='/welcome-screen'/>
  )
}

export default PrivateRoutes
