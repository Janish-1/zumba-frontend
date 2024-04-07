const HeaderFrame = () => {
  return (
    <div className="w-[350px] h-[371px] flex flex-col items-center justify-start gap-[1px] z-[1] text-left text-xl text-small-text font-poppins">
      <div className="w-[330px] flex flex-row items-center justify-start py-0 px-5 box-border gap-[12px]">
        <img
          className="h-[22px] w-[22px] relative"
          loading="eager"
          alt=""
          src="/vector1.svg"
        />
        <div className="h-[72px] flex-1 relative tracking-[0.05em] leading-[118.5%] font-medium inline-block">
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Voice messages anywhere</p>
        </div>
      </div>
      <div className="w-[330px] flex flex-row items-center justify-start py-0 px-5 box-border gap-[12px]">
        <img className="h-[22px] w-[22px] relative" alt="" src="/vector1.svg" />
        <div className="h-[72px] flex-1 relative tracking-[0.05em] leading-[118.5%] font-medium inline-block">
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Voice messages anywhere</p>
        </div>
      </div>
      <div className="w-[330px] flex flex-row items-center justify-start py-0 px-5 box-border gap-[12px]">
        <img className="h-[22px] w-[22px] relative" alt="" src="/vector1.svg" />
        <div className="h-[72px] flex-1 relative tracking-[0.05em] leading-[118.5%] font-medium inline-block">
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Voice messages anywhere</p>
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

export default HeaderFrame;
