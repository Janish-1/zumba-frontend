const ExerciseFrames1 = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start py-0 px-5 gap-[24px] text-left text-3xs text-white font-poppins">
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch h-[250px] relative">
          <img
            className="absolute top-[0px] left-[0px] w-[350px] h-[250px] object-cover"
            alt=""
            src="/image@2x.png"
          />
          <div className="absolute top-[116px] left-[0px] rounded-t-none rounded-b-4xl [background:linear-gradient(-3.63deg,_#1d1d1d,_rgba(104,_104,_104,_0))] w-[350px] h-[134px] z-[1]" />
        </div>
        <div className="w-[258px] rounded-mini bg-gray-700 [backdrop-filter:blur(6px)] box-border flex flex-row items-center justify-start py-[13px] pr-[15px] pl-4 gap-[30px] z-[2] mt-[-32px] border-[0.5px] border-solid border-yellowgreen">
          <div className="h-16 w-[258px] relative rounded-mini bg-gray-700 [backdrop-filter:blur(6px)] box-border hidden border-[0.5px] border-solid border-yellowgreen" />
          <div className="flex-1 flex flex-row items-end justify-start gap-[8px]">
            <div className="h-8 w-8 relative rounded-8xs bg-firebrick z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-firebrick w-8 h-8 hidden" />
              <img
                className="absolute top-[4px] left-[4px] w-6 h-6 overflow-hidden z-[2]"
                loading="eager"
                alt=""
                src="/ic-time.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[7px]">
              <div className="relative leading-[10px] z-[1]">Time</div>
              <div className="relative text-xs leading-[12px] font-medium text-firebrick z-[1]">
                20 min
              </div>
            </div>
          </div>
          <div className="h-[38px] w-px relative box-border z-[1] border-r-[1px] border-solid border-gray-600" />
          <div className="flex-1 flex flex-row items-end justify-start gap-[8px]">
            <div className="h-8 w-8 relative rounded-8xs bg-firebrick z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-firebrick w-8 h-8 hidden" />
              <img
                className="absolute top-[5px] left-[4px] w-6 h-6 overflow-hidden z-[2]"
                loading="eager"
                alt=""
                src="/ic-burn.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[7px]">
              <div className="relative leading-[10px] z-[1]">Burn</div>
              <div className="relative text-xs leading-[12px] font-medium text-firebrick z-[1]">
                95 kcal
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[17px] text-5xl font-lato">
        <h3 className="m-0 relative text-inherit font-extrabold font-inherit">
          Lower Body Training
        </h3>
        <div className="self-stretch relative text-mini leading-[22px] text-gray-800">
          The lower abdomen and hips are the most difficult areas of the body to
          reduce when we are on a diet. Even so, in this area, especially the
          legs as a whole, you can reduce weight even if you don't use tools.
        </div>
      </div>
    </section>
  );
};

export default ExerciseFrames1;
