import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NotificationBellFrame = () => {
  const navigate = useNavigate();

  const onBellNotifFrameClick = useCallback(() => {
    navigate("/live-session");
  }, [navigate]);

  const onCilPlusIconClick = useCallback(() => {
    navigate("/live-session");
  }, [navigate]);

  return (
    <section className="self-stretch bg-darkslategray-200 flex flex-row items-center justify-between py-4 px-[27px]">
      <div className="h-[95px] w-[430px] relative bg-darkslategray-200 hidden" />
      <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
        <img
          className="w-[39px] h-[39px] relative overflow-hidden shrink-0 z-[1]"
          loading="eager"
          alt=""
          src="/homealt1.svg"
        />
      </div>
      <img
        className="h-[41px] w-[41px] relative overflow-hidden shrink-0 z-[1]"
        loading="eager"
        alt=""
        src="/foodoutline1.svg"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[63px] w-[76px] relative">
        <div
          className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-firebrick w-[63px] cursor-pointer z-[1]"
          onClick={onBellNotifFrameClick}
        />
        <img
          className="absolute top-[14px] left-[14px] w-9 h-9 overflow-hidden cursor-pointer z-[2]"
          alt=""
          src="/cilplus.svg"
          onClick={onCilPlusIconClick}
        />
      </button>
      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
        <img
          className="w-10 h-[41px] relative overflow-hidden shrink-0 z-[1]"
          loading="eager"
          alt=""
          src="/cilgraph1.svg"
        />
      </div>
      <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
        <img
          className="w-10 h-10 relative overflow-hidden shrink-0 z-[1]"
          loading="eager"
          alt=""
          src="/notification-bell1.svg"
        />
      </div>
    </section>
  );
};

export default NotificationBellFrame;
