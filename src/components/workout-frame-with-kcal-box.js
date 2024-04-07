import { useCallback } from "react";

const WorkoutFrameWithKcalBox = () => {
  const onWorkout1ContainerClick = useCallback(() => {
    // Please sync "Workout" to the project
  }, []);

  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 pr-[22px] pl-5 text-left text-5xl text-white font-lato">
      <div
        className="flex-1 flex flex-row items-center justify-start relative cursor-pointer"
        onClick={onWorkout1ContainerClick}
      >
        <div className="h-[calc(100%_-_0.3px)] w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0.3px] left-[0px]">
          <img
            className="absolute h-[calc(100%_+_0.3px)] w-full top-[0.4px] right-[0px] bottom-[-0.7px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image-1@2x.png"
          />
          <div className="absolute h-[calc(100%_+_0.3px)] w-full top-[0.4px] right-[0px] bottom-[-0.7px] left-[0px] rounded-4xl [background:linear-gradient(91.78deg,_rgba(0,_0,_0,_0.51),_rgba(0,_0,_0,_0))] z-[1]" />
        </div>
        <div className="w-[184px] rounded-tl-4xl rounded-tr-none rounded-br-none rounded-bl-4xl [background:linear-gradient(90.29deg,_#353535,_rgba(75,_75,_75,_0))] flex flex-col items-end justify-start pt-[25px] px-0 pb-8 box-border gap-[17px_0px] z-[2]">
          <div className="self-stretch h-[216.3px] relative rounded-tl-4xl rounded-tr-none rounded-br-none rounded-bl-4xl [background:linear-gradient(90.29deg,_#353535,_rgba(75,_75,_75,_0))] hidden" />
          <h1 className="m-0 w-[159.1px] h-[72.1px] relative text-inherit font-bold font-inherit inline-block shrink-0 z-[3]">
            <p className="m-0">Lower Body</p>
            <p className="m-0">Training</p>
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px]">
            <button className="cursor-pointer [border:none] py-1 pr-1.5 pl-2 bg-gray-400 rounded-4xs flex flex-row items-center justify-start gap-[0px_4px] z-[3]">
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                alt=""
                src="/box-11.svg"
              />
              <div className="relative text-xs leading-[18px] font-lato text-gray-300 text-left">
                500 Kcal
              </div>
            </button>
          </div>
          <div className="self-stretch h-[27px] flex flex-row items-start justify-start py-0 px-[25px] box-border">
            <button className="cursor-pointer [border:none] py-1 pr-1.5 pl-2 bg-gray-400 rounded-4xs flex flex-row items-center justify-start gap-[0px_4px] z-[3]">
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                alt=""
                src="/ball-9.svg"
              />
              <div className="relative text-xs leading-[18px] font-lato text-gray-300 text-left">
                50 Min
              </div>
            </button>
          </div>
        </div>
        <img
          className="h-[47.2px] w-[47.2px] absolute my-0 mx-[!important] top-[84.9px] right-[24.9px] object-cover z-[2]"
          loading="eager"
          alt=""
          src="/ic-play-1@2x.png"
        />
      </div>
    </section>
  );
};

export default WorkoutFrameWithKcalBox;
