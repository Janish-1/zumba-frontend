import PlayCircleIcon from "./play-circle-icon";

const FrameComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pr-4 pl-[13px] box-border max-w-full text-left text-16xl text-firebrick font-roboto">
      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[262px] w-[150px] absolute my-0 mx-[!important] top-[-45px] right-[-18px] overflow-hidden shrink-0 z-[1]"
          loading="eager"
          alt=""
          src="/yoga-pic.svg"
        />
        <div className="flex-1 rounded-xl bg-darkslategray-200 flex flex-col items-start justify-start pt-[37px] px-[21px] pb-[19px] box-border gap-[31px] max-w-full mq450:gap-[31px]">
          <div className="w-[401px] h-[309px] relative rounded-xl bg-darkslategray-200 hidden max-w-full" />
          <div className="w-[266px] flex flex-col items-start justify-start gap-[11px]">
            {/* <button className="cursor-pointer [border:none] pt-2.5 pb-[9px] pr-[11px] pl-[17px] bg-gray-200 w-[151px] rounded-6xl flex flex-row items-center justify-end box-border whitespace-nowrap z-[1] hover:bg-dimgray-300">
              <div className="h-11 w-[151px] relative rounded-6xl bg-gray-200 hidden" />
              <div className="flex-1 relative text-xl font-arvo text-white text-left z-[2]">
                Entry Level
              </div>
            </button> */}
            <div className="w-[218px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
              <h2 className="m-0 h-[41px] flex-1 relative text-inherit font-bold font-inherit inline-block z-[1]">
                Bench Press
              </h2>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1.5 text-xl text-white font-arvo">
              <div className="flex-1 relative z-[2]">
                10 Bench Press Workout Videos For You
              </div>
            </div>
          </div>
          <div className="w-[261px] flex flex-row items-center justify-start gap-[15px] text-6xl font-arvo">
            <PlayCircleIcon />
            <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <b className="self-stretch h-[31px] relative inline-block z-[1]">
                34 Minutes
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
