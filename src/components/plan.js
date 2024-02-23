const Plan = () => {
  return (
    <div className="w-[350px] rounded-7xl bg-darkslategray-200 flex flex-row items-start justify-start pt-0 pb-2.5 pr-[19px] pl-2.5 box-border gap-[12px] ml-[-370px] text-left text-3xs text-darkslategray-200 font-poppins">
      <div className="h-[120px] w-[350px] relative rounded-7xl bg-darkslategray-200 hidden" />
      <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
        <img
          className="w-[100px] h-[100px] relative object-cover z-[1]"
          alt=""
          src="/mask-group-1@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[17px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch h-10 relative">
            <div className="absolute top-[0px] left-[148px] rounded-t-none rounded-b-md bg-white w-[61px] flex flex-row items-center justify-center p-0.5 box-border z-[1]">
              <div className="relative">Beginner</div>
            </div>
            <div className="absolute top-[16px] left-[0px] text-base font-medium text-white z-[1]">
              Knee Push Up
            </div>
          </div>
          <div className="relative text-smi text-white z-[1]">
            20 Sit up a day
          </div>
        </div>
        <div className="self-stretch rounded-10xs bg-lightgoldenrodyellow flex flex-row items-center justify-start z-[1] text-5xs text-white">
          <div className="h-4 w-[209px] relative rounded-10xs bg-lightgoldenrodyellow hidden" />
          <div className="rounded-10xs bg-firebrick flex flex-row items-center justify-center py-1 pr-[25px] pl-[23px] z-[1]">
            <div className="h-4 w-[65px] relative rounded-10xs bg-firebrick hidden" />
            <div className="relative leading-[8px] font-medium z-[2]">45%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
