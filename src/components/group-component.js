const GroupComponent = () => {
  return (
    <section className="self-stretch rounded-3xs bg-darkslategray-200 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-start pt-[19px] pb-[17px] pr-[37px] pl-9 box-border gap-[10px] max-w-full z-[1] text-left text-lg text-firebrick font-roboto">
      <div className="w-[370px] h-[361px] relative rounded-3xs bg-darkslategray-200 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-0">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
          <div className="flex flex-row items-start justify-start gap-[17px]">
            <img
              className="h-[50px] w-[50px] relative rounded-[50%] object-cover [transform:_rotate(-0.05deg)] z-[1]"
              loading="eager"
              alt=""
              src="/ellipse-13@2x.png"
            />
            <div className="flex flex-col items-start justify-start py-0 pr-0.5 pl-0">
              <div className="flex flex-row items-start justify-start py-0 px-0">
                <h3 className="m-0 relative text-inherit leading-[150%] capitalize font-bold font-inherit z-[1]">
                  Kriston Watshon
                </h3>
              </div>
              <div className="relative text-xs leading-[150%] font-light text-white whitespace-nowrap z-[1]">
                <span className="capitalize">{`08:39 `}</span>
                <span className="lowercase">am</span>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[46px] relative text-sm leading-[150%] capitalize font-light text-white inline-block shrink-0 z-[1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            natoque id aenean.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-px pb-[5px]">
        <div className="flex-1 flex flex-row items-start justify-start relative">
          <div className="h-px w-2.5 absolute my-0 mx-[!important] bottom-[80.9px] left-[62.2px]" />
          <img
            className="h-[177px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover [transform:_rotate(-0.05deg)] z-[1]"
            loading="eager"
            alt=""
            src="/rectangle-23@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch h-[25px] flex flex-row items-start justify-start py-0 pr-0 pl-[9px] box-border text-sm text-white">
        <div className="self-stretch flex-1 flex flex-row items-end justify-between gap-[20px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[17px]">
            <div className="flex flex-row items-start justify-start gap-[5px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 [transform:_rotate(-0.05deg)] min-h-[24px] z-[1]"
                loading="eager"
                alt=""
                src="/like-1.svg"
              />
              <div className="relative leading-[150%] capitalize font-medium z-[1]">
                1,964
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[5px]">
              <input
                className="m-0 h-[24.3px] w-6 relative box-border z-[1] border-[0px] border-solid border-white"
                type="checkbox"
              />
              <div className="relative leading-[150%] capitalize font-medium z-[1]">
                135
              </div>
            </div>
            <img
              className="h-[21.6px] w-6 relative object-contain [transform:_rotate(-0.05deg)] z-[1]"
              loading="eager"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <img
            className="h-6 w-[16.9px] relative object-contain [transform:_rotate(-0.05deg)] z-[1]"
            loading="eager"
            alt=""
            src="/group@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default GroupComponent;
