const GroupComponent1 = () => {
  return (
    <section className="rounded-3xs bg-darkslategray-200 flex flex-col items-start justify-start pt-4 px-5 pb-[15px] box-border gap-[31px] max-w-full text-left text-lg text-gray-800 font-roboto mq450:gap-[31px]">
      <div className="w-[370px] h-[123px] relative rounded-3xs bg-darkslategray-200 hidden max-w-full" />
      <div className="flex flex-row items-center justify-start gap-[14px]">
        <img
          className="h-10 w-10 relative rounded-[50%] object-cover [transform:_rotate(-0.05deg)] z-[1]"
          loading="eager"
          alt=""
          src="/ellipse-5@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <h3 className="m-0 relative text-inherit font-normal font-inherit z-[1]">
            What's on your head?
          </h3>
        </div>
      </div>
      <div className="flex flex-row items-start justify-end py-0 pr-[45px] pl-14 text-sm text-white mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <div className="flex flex-row items-center justify-start py-0 pr-[9px] pl-0 gap-[2px]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 [transform:_rotate(-0.05deg)] z-[1]"
              loading="eager"
              alt=""
              src="/add-photo-alternate.svg"
            />
            <div className="relative leading-[150%] capitalize z-[1]">
              image
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-0 pr-[9px] pl-0 gap-[4px]">
            <div className="h-4 flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
              <div className="w-px h-[17px] relative box-border z-[2] border-r-[1px] border-solid border-black" />
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 [transform:_rotate(-0.05deg)] z-[1]"
              loading="eager"
              alt=""
              src="/movie-creation.svg"
            />
            <div className="relative leading-[150%] capitalize z-[1]">
              Videos
            </div>
          </div>
          <div className="h-4 flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
            <div className="w-px h-[17px] relative box-border z-[2] border-r-[1px] border-solid border-black" />
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 [transform:_rotate(-0.05deg)] z-[1]"
            loading="eager"
            alt=""
            src="/movie-creation.svg"
          />
          <div className="relative leading-[150%] capitalize z-[1]">Attach</div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent1;
