const FrameComponent4 = ({blog}) => {
    return (
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3 text-left text-3xs text-white font-poppins">
        <div className="flex-1 flex flex-col items-center justify-start gap-[33px_0px]">
          <div className="w-[322px] flex flex-row items-start justify-start py-0 pr-11 pl-5 box-border">
            <div className="flex-1 rounded-mini bg-gray-600  flex flex-row items-center justify-between py-[13px] pr-[15px] pl-4 border-[0.5px] border-solid border-yellowgreen">
              <div className="h-16 w-[258px] relative rounded-mini bg-gray-600  box-border hidden border-[0.5px] border-solid border-yellowgreen" />
              <div className="flex flex-row items-end justify-start gap-[0px_8px]">
                <div className="h-8 w-8 relative rounded-8xs bg-firebrick z-[1]">
                  <div className="absolute top-[0px] left-[0px] rounded-8xs bg-firebrick w-8 h-8 hidden" />
                  <img
                    className="absolute top-[4px] left-[4px] w-6 h-6 overflow-hidden z-[2]"
                    loading="eager"
                    alt=""
                    src="/ic-time.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[7px_0px]">
                  <div className="relative leading-[10px] z-[1]">Time</div>
                  <div className="relative text-xs leading-[12px] font-medium text-firebrick z-[1]">
                    {blog.time_duration}
                  </div>
                </div>
              </div>
              <div className="h-[38px] w-px relative box-border z-[1] border-r-[1px] border-solid border-gray-500" />
              <div className="flex flex-row items-end justify-start gap-[0px_8px]">
                <div className="h-8 w-8 relative rounded-8xs bg-firebrick z-[1]">
                  <div className="absolute top-[0px] left-[0px] rounded-8xs bg-firebrick w-8 h-8 hidden" />
                  <img
                    className="absolute top-[5px] left-[4px] w-6 h-6 overflow-hidden z-[2]"
                    loading="eager"
                    alt=""
                    src="/ic-burn.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[7px_0px]">
                  <div className="relative leading-[10px] z-[1]">Burn</div>
                  <div className="relative text-xs leading-[12px] font-medium text-firebrick z-[1]">
                    {blog.calories_burn} kcal
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[17px_0px] text-5xl font-lato">
            <h3 className="m-0 w-[241px] relative text-inherit font-extrabold font-inherit inline-block box-border pr-5">
              Lower Body Training
            </h3>
            <div className="self-stretch relative text-mini leading-[22px]">
              The lower abdomen and hips are the most difficult areas of the body
              to reduce when we are on a diet. Even so, in this area, especially
              the legs as a whole, you can reduce weight even if you don't use
              tools.
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FrameComponent4;
  