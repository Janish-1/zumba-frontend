import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameC = () => {
  const navigate = useNavigate();

  const onCircleBClick = useCallback(() => {
    navigate("/live-session");
  }, [navigate]);

  const onCilPlusIconClick = useCallback(() => {
    navigate("/live-session");
  }, [navigate]);

  return (
    <footer className="w-[430px] my-0 mx-[!important] absolute top-[837.8px] left-[-0.4px] flex flex-row items-start justify-start">
      <div className="h-[76.5px] w-[437.4px] absolute my-0 mx-[!important] right-[-7.8px] bottom-[6.8px] bg-white shadow-[3px_0px_15px_rgba(0,_0,_0,_0.12)] z-[2]" />
      <input
        className="[border:none] [outline:none] bg-skyblue h-11 w-11 absolute my-0 mx-[!important] right-[31.6px] bottom-[25.8px] rounded-8xs z-[3]"
        type="text"
      />
      <div className="flex-1 bg-darkslategray-200 flex flex-row items-center justify-between pt-[17px] px-[27px] pb-[15px] z-[6]">
        <div className="h-[95px] w-[430px] relative bg-darkslategray-200 [transform:_rotate(-0.05deg)] hidden" />
        <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
          <img
            className="w-[39px] h-[39px] relative overflow-hidden shrink-0 object-contain z-[7]"
            loading="eager"
            alt=""
            src="/homealt@2x.png"
          />
        </div>
        <img
          className="h-[41px] w-[41px] relative overflow-hidden shrink-0 object-contain z-[7]"
          loading="eager"
          alt=""
          src="/foodoutline@2x.png"
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[63px] w-[76px] relative">
          <div
            className="absolute top-[0.05px] left-[0.3px] rounded-[50%] bg-firebrick w-[63px] h-[63px] [transform:_rotate(-0.05deg)] [transform-origin:0_0] cursor-pointer z-[7]"
            onClick={onCircleBClick}
          />
          <img
            className="absolute top-[14px] left-[14.3px] w-9 h-9 overflow-hidden object-contain cursor-pointer z-[8]"
            alt=""
            src="/cilplus@2x.png"
            onClick={onCilPlusIconClick}
          />
        </button>
        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <img
            className="w-10 h-[41px] relative overflow-hidden shrink-0 object-contain z-[7]"
            loading="eager"
            alt=""
            src="/cilgraph@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
          <img
            className="w-10 h-10 relative overflow-hidden shrink-0 object-contain z-[7]"
            loading="eager"
            alt=""
            src="/notification-bell@2x.png"
          />
        </div>
      </div>
    </footer>
  );
};

export default FrameC;
