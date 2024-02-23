const Notify = () => {
  return (
    <div className="self-stretch rounded-xl bg-darkslategray-200 flex flex-row flex-wrap items-end justify-center py-2 pr-[13px] pl-[15px] gap-[43px] text-left text-mini text-gray-100 font-arvo">
      <div className="h-[106px] w-[406px] relative rounded-xl bg-darkslategray-200 hidden" />
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border min-w-[149px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
            <div className="flex-1 relative z-[1]">
              I Strayed Hydrated for Two Weeks, Learn How?
            </div>
          </div>
          {/* <div className="flex flex-row items-start justify-start gap-[5px] font-roboto">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
              loading="eager"
              alt=""
              src="/alarmclock.svg"
            />
            <div className="flex flex-row items-center justify-start gap-[1px]">
              <div className="flex flex-col items-start justify-start py-0 pr-[3px] pl-0">
                <div className="relative z-[1]">06-June-2023</div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                loading="eager"
                alt=""
                src="/plus.svg"
              />
              <div className="relative z-[1]">Follow</div>
            </div>
          </div> */}
        </div>
      </div>
      <img
        className="h-[90px] w-[106px] relative rounded-xl object-cover z-[1]"
        loading="eager"
        alt=""
        src="/rectangle-27@2x.png"
      />
    </div>
  );
};

export default Notify;