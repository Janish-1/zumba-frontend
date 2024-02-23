const CilgraphNotificationBell = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
      <footer className="self-stretch bg-darkslategray-200 flex flex-row items-center justify-between pt-3.5 pb-[15px] pr-[23px] pl-6 z-[2]">
        <div className="h-[86px] w-[390px] relative bg-darkslategray-200 hidden" />
        <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0">
          <img
            className="w-9 h-9 relative overflow-hidden shrink-0 z-[3]"
            alt=""
            src="/homealt.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0">
          <img
            className="w-[38px] h-[38px] relative overflow-hidden shrink-0 z-[3]"
            loading="eager"
            alt=""
            src="/foodoutline3.svg"
          />
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[57px] w-[69px] relative">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-firebrick w-[57px] z-[3]" />
          <img
            className="absolute top-[13px] left-[13px] w-8 h-[33px] overflow-hidden z-[4]"
            alt=""
            src="/cilplus.svg"
          />
        </button>
        <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
          <img
            className="w-9 h-[37px] relative overflow-hidden shrink-0 z-[3]"
            loading="eager"
            alt=""
            src="/cilgraph3.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
          <img
            className="w-9 h-9 relative overflow-hidden shrink-0 z-[3]"
            loading="eager"
            alt=""
            src="/notification-bell3.svg"
          />
        </div>
      </footer>
    </div>
  );
};

export default CilgraphNotificationBell;
