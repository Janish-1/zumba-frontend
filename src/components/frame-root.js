import LiveSession from "./LiveSession";
import Upcoming from "./Upcoming";
import PreviousSession from "./PreviousSession";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchLiveSessions } from "../redux/actions/LivesessionActions";
import { Link } from "react-router-dom";
const FrameRoot = () => {
  const dispatch=useDispatch();
  const state =useSelector((state)=>state.livesession);
  // console.log("live session data in com",state)
  const [activeTab, setActiveTab] = useState('live');
  useEffect(()=>{
    dispatch(fetchLiveSessions());
  },[dispatch])
  return (
    <section className="self-stretch flex flex-col items-center justify-start py-0 px-3 gap-[25px] text-left text-base text-gray-100 font-roboto">
      <header className="self-stretch flex flex-row items-center justify-between pt-0 px-1.5 pb-2 text-left text-9xl text-firebrick font-roboto">
        <div className="flex flex-col items-start justify-start pt-1 pb-0 pr-[19px] pl-0">
        <Link to='/'>
        <img
            className="w-[34px] h-[34px] relative overflow-hidden shrink-0 object-contain"
            loading="eager"
            alt=""
            src="/right.svg"
          />
        </Link>
         
        </div>
        <h2 className="m-0 h-[33px] relative text-inherit font-extrabold font-inherit inline-block">
          Live Session
        </h2>
        <img
          className="h-[56.1px] w-[54px] relative object-cover"
          loading="eager"
          alt=""
          src="/profile@2x.png"
        />
      </header>
      <div className="w-[100%] flex flex-row items-start justify-start pt-0 px-5 pb-[17px] box-border">
        <div className="flex-1 rounded-4xs bg-darkslategray-200 flex flex-row items-center justify-between pt-1 pb-[5px]  pl-3.5">
          <div className={`rounded-4xs flex flex-row items-center justify-center pt-1 pb-[3px] pr-[31px] pl-[26px] z-[1]  ${activeTab === 'previous' ? 'bg-firebrick ' : ''}`} onClick={() => setActiveTab('previous')}>Previous</div>
          <div className={`rounded-4xs  flex flex-row items-center justify-center pt-1 pb-[3px] pr-[31px] pl-[26px] z-[1]  ${activeTab === 'live' ? 'bg-firebrick' : ''}`} onClick={() => setActiveTab('live')}>Live</div>
          <div className={`rounded-4xs flex flex-row items-center justify-center pt-1 pb-[3px] pr-[31px] pl-[26px] z-[1] ${activeTab === 'upcoming' ? ' bg-firebrick ' : ''}`} onClick={() => setActiveTab('upcoming')}>Upcoming</div>
        </div>
      </div>
      {/* Render components based on active tab */}
      {activeTab === 'live' && <LiveSession state={state} />}
      {activeTab === 'previous' && <PreviousSession state={state}/>}
      {activeTab === 'upcoming' && <Upcoming state={state}/>}

    </section>
  );
};

export default FrameRoot;
