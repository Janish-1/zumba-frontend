import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/actions/userActions';
const ProfileMain = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  console.log("user in profile", user);

  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate('/log-in-page');
  }
  useEffect(() => {
    const id = localStorage.getItem("userId");
    dispatch(fetchUser(id))
  }, [dispatch])
  return (
    <div className='w-full h-screen pb-[6.25rem] bg-gray-200'>
      <div
        class="max-w-2xl  sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto   bg-gray-200 shadow-xl rounded-lg text-white">
        <div class="rounded-t-lg h-32 w-full overflow-hidden">
          <img class="object-cover object-top w-full" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLp0tEsmGXYRbuFWyMVfBFXaOp9grCsx10y3zl5kI3Gg&s' alt='Mountain' />
        </div>
        <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img class="object-cover object-center h-32" src='/male-avatar.jpg' alt='Woman looking front' />
        </div>
        <div class="text-center mt-2">
          <h2 className="font-semibold" style={{ color: '#B10000' }}>{user?.username}</h2>
          <p class="text-gray-500" style={{ color: '#B10000' }}>{user?.email}</p>
        </div>
        {/* <div className="flex justify-center px-5">
          <div className="flex items-center font-amiko gap-2"
          // onClick={toggleSidebar}
          >
            <div className="mr-2">Edit Profile</div>
            <Link to='/edit'>
              <img
                className="h-4 w-4 relative z-[6]"
                alt=""
                src="/pen.svg"
              />
            </Link>

          </div>
        </div> */}

        {/* <div class="p-[4px] border-t mx-8 mt-2">
          <button class="w-1/2 block mx-auto rounded bg-gray-900 hover:shadow-lg font-semibold text-white px-4 py-2">Wallet {" "} ₹ {user?.wallet_balance}</button>
        </div>
        <div class="p-4 border-t mx-8">
          <button class="w-1/2 block mx-auto rounded bg-gray-900 hover:shadow-lg font-semibold text-white px-4 py-2">{`Referral code ${user?.referral_code}`}</button>
        </div> */}
      </div>

      {/* Render Sidebar with inline CSS based on state */}
      <div style={{ position: 'fixed', top: 0, left: isSidebarOpen ? '0' : '-250px', height: '100%', width: '250px', transition: 'left 0.3s ease' }}>
        {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
      </div>
      <div className="self-stretch px-5 flex flex-col items-end justify-start gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-0">
          <div className="h-px flex-1 relative bg-silver z-[6]" />
        </div>
        <div className="w-[100%] flex flex-row items-start justify-between">
          <nav className="m-0 flex flex-col items-start justify-start gap-[14px] text-left text-base text-white font-roboto">
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px] gap-[22px]">
              <img
                className="h-4 w-4 relative z-[6]"
                alt=""
                src="/pen.svg"
              />
              <div className="relative z-[6]"
                onClick={() => navigate('/edit')}
              >Edit Profile</div>

            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1 gap-[18px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[6]"
                loading="eager"
                alt=""
                src="/settings.svg"
              />
              <div className="relative z-[6]"
                onClick={() => navigate('/transaction')}
              >Transactions</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px] z-[6]"
                loading="eager"
                alt=""
                src="/frame.svg"
              />
              <div className="relative z-[6]"
              onClick={()=>navigate('/aboutus')}
              >About Us</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[18px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 z-[6]"
                loading="eager"
                alt=""
                src="/privacy-tip.svg"
              />
              <div className="relative z-[6]"
              onClick={()=>navigate('/privacy')}
              >Your Privacy</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 z-[6]"
                loading="eager"
                alt=""
                src="/search.svg"
              />
              <div className="relative z-[6]"
              onClick={()=>navigate('/contactus')}
              >Contact Us</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 z-[6]"
                loading="eager"
                alt=""
                src="/logout.svg"
              />
              <div className="relative z-[6]  text-firebrick" onClick={handleLogout}>Log Out</div>
            </div>
          </nav>
          <div className="flex flex-col items-end justify-start gap-[14px]">
            <div className="flex flex-row items-start justify-start py-0 pr-1 pl-0">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 z-[6]"
                loading="eager"
                alt=""
                src="/chevron-right.svg"
              />
            </div>
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 z-[6]"
              loading="eager"
              alt=""
              src="/chevron-right.svg"
            />
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 z-[6]"
              loading="eager"
              alt=""
              src="/chevron-right.svg"
            />
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 z-[6]"
              loading="eager"
              alt=""
              src="/chevron-right.svg"
            />
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 z-[6]"
              loading="eager"
              alt=""
              src="/chevron-right.svg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProfileMain;
