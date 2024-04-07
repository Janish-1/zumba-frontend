const HealthMessageContainer = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start py-0 px-5 gap-[45px] text-center text-5xl text-white font-lato">
      <div className="w-[270px] flex flex-col items-center justify-start gap-[35px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <h2 className="m-0 self-stretch h-[58px] relative text-inherit capitalize font-extrabold font-inherit inline-block z-[1]">
            Wherever you are health is number one
          </h2>
          <div className="relative text-mini text-firebrick">
            There is no instant way to a healthy life
          </div>
        </div>
        <div className="w-[130px] h-2.5 relative rounded-8xs bg-white">
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white w-[130px] h-2.5 hidden" />
          <div className="absolute top-[2px] left-[2px] rounded-8xs bg-firebrick w-[42px] h-1.5 z-[1]" />
          <div className="absolute top-[5px] left-[49px] rounded-8xs bg-yellowgreen w-[21px] h-[3px] hidden" />
          <div className="absolute top-[5px] left-[70px] rounded-8xs bg-yellowgreen w-[21px] h-[3px] hidden" />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-4 px-[15px] bg-firebrick self-stretch rounded-13xl flex flex-row items-center justify-center">
        <div className="h-14 w-[350px] relative rounded-13xl bg-firebrick hidden" />
        <b className="relative text-base leading-[24px] font-lato text-white text-center z-[1]">
          Get Started
        </b>
      </button>
    </section>
  );
};

export default HealthMessageContainer;
