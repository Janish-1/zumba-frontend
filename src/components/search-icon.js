const SearchIcon = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-1 text-left text-3xs text-white font-poppins">
      <div className="flex-1 rounded-7xl bg-darkslategray-200 flex flex-row items-end justify-start pt-0 pb-2.5 pr-[19px] pl-2.5 gap-[12px]">
        <div className="h-[120px] w-[350px] relative rounded-7xl bg-darkslategray-200 hidden" />
        <img
          className="h-[100px] w-[100px] relative object-cover z-[1]"
          loading="eager"
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border min-w-[136px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
              <div className="self-stretch flex flex-row items-start justify-end text-darkslategray-200">
                <div className="w-[61px] rounded-t-none rounded-b-md bg-white flex flex-row items-center justify-center p-0.5 box-border z-[1]">
                  <div className="relative">Beginner</div>
                </div>
              </div>
              <div className="relative text-base font-medium z-[1]">Sit Up</div>
              <div className="relative text-smi z-[1]">20 Sit up a day</div>
            </div>
            <div className="self-stretch rounded-10xs bg-white flex flex-row items-center justify-start z-[1] text-5xs">
              <div className="h-4 w-[209px] relative rounded-10xs bg-white hidden" />
              <div className="w-[113px] rounded-10xs bg-firebrick flex flex-row items-center justify-center py-1 px-[3px] box-border z-[1]">
                <div className="h-4 w-[113px] relative rounded-10xs bg-firebrick hidden" />
                <div className="relative leading-[8px] font-medium z-[2]">
                  75%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchIcon;
