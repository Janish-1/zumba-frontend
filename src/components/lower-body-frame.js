import ExerciseFrames from "./exercise-frames";

const LowerBodyFrame = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start py-0 px-5 gap-[16px] text-left text-base text-white font-lato">
      <div className="self-stretch flex flex-row items-start justify-between text-xl">
        <b className="relative">Rounds</b>
        <div className="relative leading-[30px] font-medium text-base">
          <span>1</span>
          <span className="text-xs">/8</span>
        </div>
      </div>
      <ExerciseFrames
        image="/image-1@2x.png"
        jumpingJacks="Jumping Jacks"
        exerciseNames="00:30"
      />
      <div className="self-stretch flex flex-col items-start justify-start">
        <ExerciseFrames
          image="/iamge@2x.png"
          jumpingJacks="Squats"
          exerciseNames="01:00"
        />
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 mt-[-30px]">
          <button className="cursor-pointer [border:none] p-4 bg-firebrick flex-1 rounded-13xl flex flex-row items-center justify-center z-[2]">
            <div className="h-14 w-[350px] relative rounded-13xl bg-firebrick hidden" />
            <div className="relative text-base leading-[24px] font-semibold font-poppins text-white text-left z-[1]">
              Lets Workout
            </div>
          </button>
        </div>
        <div className="self-stretch rounded-mini bg-darkslategray-100 flex flex-row items-center justify-between py-2 pr-[22px] pl-2 mt-[-30px]">
          <div className="h-[74px] w-[350px] relative rounded-mini bg-darkslategray-100 hidden" />
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <img
              className="h-[58px] w-[58px] relative object-contain z-[1]"
              loading="eager"
              alt=""
              src="/image-2@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[22px] font-medium z-[1]">
                Backward Lunge
              </div>
              <div className="relative text-xs font-poppins text-dimgray-100">
                00:30
              </div>
            </div>
          </div>
          <img
            className="h-7 w-7 relative z-[1]"
            loading="eager"
            alt=""
            src="/ic-play.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default LowerBodyFrame;
