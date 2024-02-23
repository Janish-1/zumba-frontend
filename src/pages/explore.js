import GroupComponent1 from "../components/group-component1";
import Thirdframeshare from "../components/thirdframeshare";
import GroupComponent from "../components/group-component";
import FrameComponent1 from "../components/frame-component1";

const Explore = () => {
  return (
    <div className="w-full h-[926px] relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start pt-[63px] px-0 pb-0 box-border gap-[10px] [transform:_rotate(0.05deg)] [transform-origin:0_0] tracking-[normal] text-left text-lg text-white font-roboto mq450:h-auto">
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain [transform:_rotate(-0.05deg)] hidden z-[0]"
        alt=""
        src="/mask-group@2x.png"
      />
      <div className="w-2.5 h-px relative hidden z-[1]" />
      <div className="w-[389px] flex flex-row items-start justify-end pt-0 px-5 pb-[30px] box-border max-w-full">
        <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[9px]">
          <img
            className="h-7 w-7 relative overflow-hidden shrink-0 [transform:_rotate(-0.05deg)] min-h-[28px]"
            loading="eager"
            alt=""
            src="/frame-73.svg"
          />
          <div className="w-[34px] flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
            <img
              className="w-7 h-7 relative overflow-hidden shrink-0 [transform:_rotate(-0.05deg)]"
              loading="eager"
              alt=""
              src="/notifications-none.svg"
            />
          </div>
          <h3 className="m-0 relative text-inherit font-normal font-inherit">
            
          </h3>
        </div>
      </div>
      <main className="w-[411px] flex flex-col items-start justify-start py-0 pr-[21px] pl-5 box-border gap-[40px] max-w-full">
        <GroupComponent1 />
        {/* <Thirdframeshare /> */}
        <GroupComponent />
      </main>
      <img
        className="w-[254px] h-[254px] absolute my-0 mx-[!important] top-[0px] left-[-37px] object-contain [transform:_rotate(-0.05deg)] z-[2]"
        alt=""
        src="/red-black-minimalist-fitness-logo--2-1@2x.png"
      />
      {/* <FrameComponent1 /> */}
    </div>
  );
};

export default Explore;
