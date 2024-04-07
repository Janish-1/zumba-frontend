import { useMemo } from "react";

const DumbellRowsSection = ({
  bicycleSolid,
  cycling,
  propFlex,
  propPadding,
  propHeight,
  propWidth,
  propAlignSelf,
  propWidth1,
}) => {
  const dumbellRowsSectionStyle = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
    };
  }, [propFlex, propPadding]);

  const bicycleSolidIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
    };
  }, [propAlignSelf, propWidth1]);

  return (
    <div
      className="flex-[0.9256] rounded-xl bg-darkslategray-200 flex flex-col items-center justify-start pt-2 pb-2.5 pr-[3px] pl-3 box-border gap-[40px] min-w-[95px] text-center text-lg text-white font-arvo mq450:flex-1"
      style={dumbellRowsSectionStyle}
    >
      <div className="w-[127px] h-[162px] relative rounded-xl bg-darkslategray-200 hidden" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[15px] pl-1">
        <div className="flex-1 flex flex-col items-center justify-start gap-[12px]">
          <div className="flex flex-row items-start justify-start py-0 pr-[22px] pl-[25px]">
            <img
              className="h-[46px] w-[46px] relative overflow-hidden shrink-0 z-[1]"
              loading="eager"
              alt=""
              src={bicycleSolid}
              style={bicycleSolidIconStyle}
            />
          </div>
          <b className="relative z-[1]">{cycling}</b>
        </div>
      </div>
      {/* <div
        className="self-stretch flex flex-row items-center justify-start gap-[3px] text-left text-sm"
        style={frameDivStyle}
      >
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
          loading="eager"
          alt=""
          src="/clock.svg"
        />
        <div className="flex-1 relative z-[1]">1Hr 20Min</div>
      </div> */}
    </div>
  );
};

export default DumbellRowsSection;
