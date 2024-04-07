const SearchIcon1 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-1 text-left text-3xs text-white font-poppins">
      <div className="flex-1 rounded-4xl bg-darkslategray-200 flex flex-row items-end justify-start pt-0 pb-2.5 pr-[19px] pl-2.5 gap-[12px]">
        <div className="h-[120px] w-[350px] relative rounded-4xl bg-darkslategray-200 hidden" />
        <img
          className="h-[100px] w-[100px] relative object-cover z-[1]"
          loading="eager"
          alt=""
          src="/image-21@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border min-w-[136px]">
          <div className="self-stretch flex flex-col items-end justify-start gap-[5px]">
            <div className="w-[81px] rounded-t-none rounded-b-md bg-white flex flex-row items-center justify-center p-0.5 box-border z-[1] text-darkslategray-200">
              <div className="relative">Intermediate</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[9px] px-0 text-base">
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative font-medium z-[1]">Push Up</div>
                <div className="relative text-smi z-[1]">100 Push up a day</div>
              </div>
            </div>
            <div className="self-stretch rounded-10xs bg-white flex flex-row items-center justify-start z-[1] text-5xs">
              <div className="h-4 w-[209px] relative rounded-10xs bg-white hidden" />
              <div className="rounded-10xs bg-firebrick flex flex-row items-center justify-center py-1 pr-[25px] pl-[23px] z-[1]">
                <div className="h-4 w-[65px] relative rounded-10xs bg-firebrick hidden" />
                <div className="relative leading-[8px] font-medium z-[2]">
                  45%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchIcon1;
