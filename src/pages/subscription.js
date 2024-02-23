import { useCallback } from "react";
import FreeText from "../components/free-text";
import HeaderFrame from "../components/header-frame";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const navigate = useNavigate();

  const onNotificationBellIconClick = useCallback(() => {
    navigate("/notification");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start pt-[79px] px-0 pb-0 box-border gap-[32px]">
      <header className="w-[362px] h-7 flex flex-row items-start justify-start py-0 pr-[35px] pl-5 box-border text-center text-lg text-white font-archivo">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-0 pl-[39px]">
            <div className="self-stretch flex-1 flex flex-row items-start justify-between">
              <div className="relative [transform:_rotate(0.05deg)]">{`Free `}</div>
              <div className="relative text-gray-900 [transform:_rotate(0.05deg)]">
                Premium
              </div>
            </div>
          </div>
          <div className="w-[130px] h-0.5 relative rounded-12xs bg-white [transform:_rotate(0.05deg)]" />
        </div>
      </header>
      <main className="self-stretch flex flex-row items-start justify-start pt-0 pb-3 pr-[25px] pl-[18px]">
        <section className="flex-1 rounded-16xl bg-darkslategray-200 flex flex-col items-start justify-start py-[30px] px-0 gap-[30px] text-center text-xl text-small-text font-poppins">
          <div className="self-stretch h-[654px] relative rounded-16xl bg-darkslategray-200 hidden" />
          <div className="w-[290px] relative tracking-[0.05em] leading-[118.5%] font-medium hidden">
            Learn more
          </div>
          <FreeText free="Free" notificationBell="$0" />
          <HeaderFrame />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] text-7xl text-white">
            <div className="flex-1 rounded-sm bg-firebrick flex flex-row items-center justify-center z-[1]">
              <div className="self-stretch w-[327px] relative rounded-sm bg-firebrick hidden" />
              <b className="h-[55px] flex-1 relative tracking-[0.05em] leading-[118.5%] flex items-center justify-center z-[1]">
                Already using
              </b>
            </div>
          </div>
        </section>
      </main>
      <footer className="self-stretch bg-darkslategray-200 flex flex-row items-center justify-between py-4 pr-[25px] pl-[27px]">
        <div className="h-[95px] w-[430px] relative bg-darkslategray-200 hidden" />
        <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
          <img
            className="w-[39px] h-[39px] relative overflow-hidden shrink-0 z-[1]"
            loading="eager"
            alt=""
            src="/homealt1.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
          <img
            className="w-[41px] h-[41px] relative overflow-hidden shrink-0 z-[1]"
            loading="eager"
            alt=""
            src="/foodoutline1.svg"
          />
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[63px] w-[76px] relative">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-firebrick w-[63px] z-[1]" />
          <img
            className="absolute top-[14px] left-[14px] w-9 h-9 overflow-hidden z-[2]"
            alt=""
            src="/cilplus.svg"
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
            className="w-10 h-10 relative overflow-hidden shrink-0 cursor-pointer z-[1]"
            loading="eager"
            alt=""
            src="/notification-bell1.svg"
            onClick={onNotificationBellIconClick}
          />
        </div>
      </footer>
    </div>
  );
};

export default Subscription;
