const PremiumFeaturesFrame = () => {
  return (
    <div className="w-[350px] flex flex-col items-center justify-start pt-0 px-0 pb-20 box-border gap-[1px] z-[1] text-left text-xl text-small-text font-poppins">
      <div className="w-[330px] flex flex-row items-center justify-start py-0 px-5 box-border gap-[12px]">
        <img
          className="h-[22px] w-[22px] relative"
          loading="eager"
          alt=""
          src="/vector1.svg"
        />
        <div className="flex-1 relative tracking-[0.05em] leading-[118.5%] font-medium">{`Ad Free Exprience `}</div>
      </div>
      <div className="w-[330px] flex flex-row items-center justify-start py-0 px-5 box-border gap-[12px]">
        <img className="h-[22px] w-[22px] relative" alt="" src="/vector1.svg" />
        <div className="h-[120px] flex-1 relative tracking-[0.05em] leading-[118.5%] font-medium inline-block">
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Access to all Exclusive features</p>
          <p className="m-0">{` `}</p>
        </div>
      </div>
      <div className="w-[330px] flex flex-row items-center justify-start py-0 px-5 box-border gap-[12px]">
        <img className="h-[22px] w-[22px] relative" alt="" src="/vector1.svg" />
        <div className="flex-1 relative tracking-[0.05em] leading-[118.5%] font-medium">{`Offline Streaming `}</div>
      </div>
      <div className="flex flex-row items-center justify-start py-0 px-5 gap-[10px]">
        <img className="h-[22px] w-[22px] relative" alt="" src="/vector1.svg" />
        <div className="h-[120px] relative tracking-[0.05em] leading-[118.5%] font-medium inline-block">
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{`Background Play back `}</p>
          <p className="m-0">{`so you can watch while `}</p>
          <p className="m-0">using other app.</p>
        </div>
      </div>
      <img
        className="w-[290px] h-px relative object-contain hidden"
        alt=""
        src="/line-1.svg"
      />
    </div>
  );
};

export default PremiumFeaturesFrame;
