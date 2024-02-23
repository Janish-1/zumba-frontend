import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchLuckyDraws } from "../redux/actions/luckyDrawActions";
import OngoingLucky from "./OngoingLucky";
import Completedluckydraw from "./Completedlucky";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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
      <header className="self-stretch flex flex-row items-center justify-between pt-0 px-1.5 pb-2 text-left text-9xl text-firebrick font-roboto">
        <div className="flex flex-col items-start justify-start pt-1 pb-0 pr-[19px] pl-0">
          {/* Wrap the image inside Link */}
          <Link to="/">
            <img
              className="w-[34px] h-[34px] relative overflow-hidden shrink-0 object-contain"
              loading="eager"
              alt=""
              src="/right.svg"
            />
          </Link>
        </div>
        <h2 className="m-0 h-[33px] relative text-inherit font-extrabold font-inherit inline-block">
          Luckydraw
        </h2>
        {/* Wrap the image inside Link */}
        <Link to="/profile">
          <img
            className="h-[56.1px] w-[54px] relative object-cover"
            loading="eager"
            alt=""
            src="/profile@2x.png"
          />
        </Link>
      </header>
      <div className="w-[100%] flex flex-row items-start justify-start pt-0 px-5 pb-[17px] box-border">
        <div className="flex-1 rounded-4xs bg-darkslategray-200 flex flex-row items-center justify-around pt-1 pb-[5px] px-5 w-full">
          <div className={`rounded-4xs flex flex-row items-center justify-center pt-1 pb-[3px] px-1 z-[1]  ${activeTab === 'completed' ? 'bg-firebrick ' : ''}`} onClick={() => setActiveTab('completed')}>Completed</div>
          <div className={`rounded-4xs  flex flex-row items-center justify-center pt-1 pb-[3px]  px-1  z-[1]  ${activeTab === 'ongoing' ? 'bg-firebrick' : ''}`} onClick={() => setActiveTab('ongoing')}>Ongoing</div>
          {/* <div className={`rounded-4xs flex flex-row items-center justify-center pt-1 pb-[3px]  px-1 z-[1] ${activeTab === 'upcoming' ? ' bg-firebrick ' : ''}`} onClick={() => setActiveTab('upcoming')}>Upcoming</div> */}
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
