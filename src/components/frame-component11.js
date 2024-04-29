import PlayCircleIcon from "./play-circle-icon";
import { Link } from "react-router-dom";
const FrameComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pr-4 pl-[13px] box-border max-w-full text-left text-9xl text-firebrick font-roboto">
      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">

        <div className="flex-1 rounded-xl bg-darkslategray-200 flex flex-col items-start justify-start pt-[37px] px-[21px] pb-[19px] box-border gap-[31px] max-w-full mq450:gap-[31px]">
          <div className="w-full flex flex-col items-start justify-start gap-[11px]">
            <div className="w-full flex flex-row items-start justify-start py-0 px-1.5 box-border">
              <h2 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block z-[1]">
                Welcome To Talent Gurukul 
              </h2>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1.5 text-3xs text-white font-arvo">
              <div className="flex-1 relative z-[2]">
                Let's start a healthy journey with us
              </div>
            </div>
          </div>
          <div className="w-[201px] flex flex-row items-center justify-start gap-[15px] text-xl font-arvo">
          <Link to='/allworkouts'>
            <PlayCircleIcon />
          </Link>
            <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <b className="self-stretch  relative inline-block z-[1]">
                Get Started
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
