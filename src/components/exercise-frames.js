const ExerciseFrames = ({ image, jumpingJacks, exerciseNames }) => {
  return (
    <div className="self-stretch rounded-mini bg-darkslategray-100 flex flex-row items-center justify-between py-2 pr-[22px] pl-2 text-left text-base text-white font-lato">
      <div className="h-[74px] w-[350px] relative rounded-mini bg-darkslategray-100 hidden" />
      <div className="flex flex-row items-center justify-start gap-[8px]">
        <img
          className="h-[58px] w-[58px] relative object-cover z-[1]"
          loading="eager"
          alt=""
          src={image}
        />
        <div className="flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[22px] font-medium z-[1]">
            {jumpingJacks}
          </div>
          <div className="relative text-smi text-gray-800 z-[1]">
            {exerciseNames}
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
  );
};

export default ExerciseFrames;
