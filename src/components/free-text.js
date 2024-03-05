const FreeText = ({ free, notificationBell }) => {
  return (
    <div className="flex flex-row items-start justify-start py-0 px-[20px] text-left text-7xl text-white font-poppins">
      <div className="flex flex-col items-start justify-start">
        <b className="h-[39px] relative tracking-[0.05em] inline-block z-[1]">
          {free}
        </b>
        <div className="flex flex-row items-center justify-start text-16xl">
          <b className="h-[69px] relative inline-block z-[1]">
            {notificationBell}
          </b>
          <h3 className="m-0 h-[57px] relative text-9xl flex items-end z-[1] font-inherit">
            <span className="[line-break:anywhere]">
              <span>/</span>
              <span className="font-medium">mon</span>
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FreeText;
