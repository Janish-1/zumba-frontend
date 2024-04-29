import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { fetchUser } from '../redux/actions/userActions';

const Sidebar1 = ({ isOpen, closeSidebar }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate(); // Create the navigate function

  console.log("user in profile", user);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate('/log-in-page'); // Navigate to the login page after logout
  }

  useEffect(() => {
    const id = localStorage.getItem("userId");
    dispatch(fetchUser(id))
  }, [dispatch])

  return (
    <div className={`fixed top-0 right-0 w-64 h-full bg-black shadow-md z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
      <button onClick={closeSidebar} className="absolute top-0 right-0 p-4 text-white">Close</button>
      <div className="px-5 flex flex-col items-end justify-start gap-[20px] text-white">
        <nav className="w-full flex flex-col items-start justify-start gap-[14px] text-left text-base font-roboto">
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px] gap-[22px] mt-10">
            <img className="h-4 w-4 relative z-[6]" alt="" src="/homealt.svg" />
            <div className="relative z-[6]" onClick={() => navigate('/')}>Home</div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px] gap-[22px]">
            <img className="h-4 w-4 relative z-[6]" alt="" src="/pen.svg" />
            <div className="relative z-[6]" onClick={() => navigate('/edit')}>Edit Profile</div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1 gap-[18px]">
            <img className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[6]" loading="eager" alt="" src="/settings.svg" />
            <div className="relative z-[6]" onClick={() => navigate('/transaction')}>Transactions</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <img className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px] z-[6]" loading="eager" alt="" src="/frame.svg" />
            <div className="relative z-[6]" onClick={() => navigate('/aboutus')}>About Us</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[18px]">
            <img className="h-6 w-6 relative overflow-hidden shrink-0 z-[6]" loading="eager" alt="" src="/privacy-tip.svg" />
            <div className="relative z-[6]" onClick={() => navigate('/privacy')}>Your Privacy</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[18px]">
            <img className="h-6 w-6 relative overflow-hidden shrink-0 z-[6]" loading="eager" alt="" src="/search.svg" />
            <div className="relative z-[6]" onClick={() => navigate('/contactus')}>Contact Us</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[18px]">
            <img className="h-6 w-6 relative overflow-hidden shrink-0 z-[6]" loading="eager" alt="" src="/logout.svg" />
            <div className="relative z-[6]  text-firebrick" onClick={handleLogout}>Log Out</div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar1;
