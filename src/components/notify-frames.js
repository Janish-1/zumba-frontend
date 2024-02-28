const NotifyFrames = () => {
  return (
    <div className="self-stretch rounded-xl bg-darkslategray-200 flex flex-row items-center justify-center text-left text-mini text-gray-100 font-arvo">
      <div className="self-stretch w-[406px] relative rounded-xl bg-darkslategray-200 hidden" />
      <div className="flex-1 rounded-xl bg-darkslategray-200 flex flex-row flex-wrap items-end justify-start py-2 pr-[13px] pl-[15px]  gap-5 z-[1]">
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
              <div className="relative z-[1]">
                <p className="m-0">Healthy Diet Greater in People</p>
                <p className="m-0">Generic Risk for Obesity</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-[60px] w-[76px] relative rounded-xl object-cover z-[1]"
            loading="eager"
            alt=""
            src="/rectangle-25@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default NotifyFrames;
