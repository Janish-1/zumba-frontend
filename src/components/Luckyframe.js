import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchLuckyDraws } from "../redux/actions/luckyDrawActions";
import OngoingLucky from "./OngoingLucky";
import Completedluckydraw from "./Completedlucky";
import { Link } from "react-router-dom"; 

const LuckyFrameRoot = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.luckydraw);
  console.log("lucky data in com", state);
  const [activeTab, setActiveTab] = useState('ongoing');
  useEffect(() => {
    dispatch(fetchLuckyDraws());
  }, [dispatch]);

  return (
    <section className="self-stretch flex flex-col items-center justify-start py-0 px-3 gap-[25px] text-left text-base text-gray-100 font-roboto">
      <header className="self-stretch flex flex-row items-center justify-between pt-0 px-1.5 pb-2 text-left  text-firebrick font-roboto">
        <div className="flex flex-col items-start justify-start pt-1 pb-0 pr-[19px] pl-0">
          <Link to="/">
            <img
              className="w-[34px] h-[34px] relative overflow-hidden shrink-0 object-contain"
              loading="eager"
              alt=""
              src="/right.svg"
            />
          </Link>
        </div>
        <h3 className="m-0 relative  font-extrabold text-9xl inline-block">
          Lucky Draw
        </h3>
        <Link to="/profile-main">
          <img
            className="h-[50.1px] rounded-full w-[50px] relative object-cover"
            loading="eager"
            alt=""
            src="/male-avatar.jpg"
          />
        </Link>
      </header>
      <div className="w-[100%] flex flex-row items-start justify-start  box-border">
        <div className="flex-1 bg-darkslategray-200 flex flex-row items-center justify-center  w-full">
          <div className={`w-full flex flex-row items-center justify-center py-2 px-5 z-[1]  ${activeTab === 'completed' ? 'bg-firebrick ' : ''}`} onClick={() => setActiveTab('completed')}>Completed</div>
          <div className={`w-full  flex flex-row items-center justify-center  py-2 px-5  z-[1]  ${activeTab === 'ongoing' ? 'bg-firebrick' : ''}`} onClick={() => setActiveTab('ongoing')}>Ongoing</div>
        </div>
      </div>
      {/* Render components based on active tab */}
      {activeTab === 'ongoing' && <OngoingLucky state={state} />}
      {activeTab === 'completed' && <Completedluckydraw state={state}/>}
      {/* {activeTab === 'upcoming' && <UpcomingLucky state={state}/>} */}
    </section>
  );
};

export default LuckyFrameRoot
