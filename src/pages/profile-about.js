import { useCallback } from "react";
import FrameC from "../components/frame-c";

const ProfileAbout = () => {
  const onEllipseIconClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='unsplashVVEwJJRRHgkImage']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full h-[926px] relative bg-white overflow-hidden flex flex-col items-start justify-center text-left text-xs text-black font-roboto">
      <img
        className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/mask-group.svg"
      />
      <img
        className="w-[19.4px] h-[13.2px] relative hidden z-[1]"
        alt=""
        src="/cellular-connection.svg"
      />
      <div className="h-[22px] relative text-mini font-semibold hidden shrink-0 z-[2]">
        9:41
      </div>
      <div className="w-[428px] my-0 mx-[!important] absolute top-[-0.2px] left-[-0.4px] flex flex-row items-start justify-start">
        <img
          className="h-3.5 w-[27.8px] absolute my-0 mx-[!important] top-[28px] right-[23.8px] z-[1]"
          loading="eager"
          alt=""
          src="/battery.svg"
        />
        <img
          className="h-[13.5px] w-[17.4px] absolute my-0 mx-[!important] top-[28px] right-[57.4px] z-[1]"
          loading="eager"
          alt=""
          src="/wifi.svg"
        />
        <img
          className="h-[290px] flex-1 relative rounded-11xl max-w-full overflow-hidden object-cover z-[2]"
          alt=""
          src="/unsplashvvewjjrrhgk@2x.png"
          data-scroll-to="unsplashVVEwJJRRHgkImage"
        />
      </div>
      <img
        className="w-[124px] h-[124px] relative rounded-[50%] object-cover hidden z-[4]"
        alt=""
        src="/unsplashvvewjjrrhgk@2x.png"
      />
      <div className="w-[340px] h-[143px] relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.1)] hidden z-[5]" />
      <div className="relative font-light hidden z-[6]">
        Lead UX/UI Designer At Facebook
      </div>
      <div className="relative font-light hidden z-[7]">
        UI/UX Designer At Google
      </div>
      <div className="w-2 h-2 relative rounded-[50%] bg-gray-400 hidden z-[8]" />
      <div className="relative font-light hidden z-[9]">
        Visualizer At Apple
      </div>
      <div className="w-2 h-2 relative rounded-[50%] bg-gray-400 hidden z-[10]" />
      <div className="relative font-light hidden z-[11]">
        Graphic Designer At Shorobor
      </div>
      <img
        className="w-4 h-4 relative overflow-hidden shrink-0 object-contain hidden z-[12]"
        alt=""
        src="/toolbox@2x.png"
      />
      <div className="relative font-semibold text-center hidden z-[13]">
        Work Experience
      </div>
      <img
        className="w-6 h-6 relative overflow-hidden shrink-0 hidden z-[14]"
        alt=""
        src="/home.svg"
      />
      <div className="h-[29px] relative text-5xl font-semibold text-center hidden z-[15]">
        Dave C. Brown
      </div>
      <div className="relative font-light text-center hidden z-[16]">
        @dave_brown
      </div>
      <div className="relative font-light text-center hidden z-[17]">
        Google Cirtified Ux/Ui Designer
      </div>
      <div className="w-[257px] h-[30px] relative rounded-8xs box-border hidden z-[18] border-[1px] border-solid border-gainsboro" />
      <img
        className="w-[18px] h-[18px] relative overflow-hidden shrink-0 hidden z-[19]"
        alt=""
        src="/settings.svg"
      />
      <div className="relative font-semibold text-center hidden z-[20]">
        EDIT PROFILE
      </div>
      <img
        className="w-[26px] h-[26px] relative rounded-[50%] object-cover hidden cursor-pointer z-[21]"
        alt=""
        src="/ellipse-3@2x.png"
        onClick={onEllipseIconClick}
      />
      <img
        className="w-6 h-6 relative overflow-hidden shrink-0 hidden z-[22]"
        alt=""
        src="/briefcase.svg"
      />
      <img
        className="w-[30px] h-[30px] relative overflow-hidden shrink-0 hidden z-[23]"
        alt=""
        src="/groups.svg"
      />
      <img
        className="w-6 h-6 relative overflow-hidden shrink-0 hidden z-[24]"
        alt=""
        src="/person-add-alt-1.svg"
      />
      {/* <FrameC /> */}
      <div className="w-[403px] flex flex-row items-start justify-end py-0 pr-5 pl-0 box-border text-base text-firebrick">
        <div className="flex-1 flex flex-row items-start justify-start relative">
          <div className="h-2 w-2 absolute my-0 mx-[!important] bottom-[163px] left-[96px] rounded-[50%] bg-gray-400 z-[2]" />
          <div className="h-2 w-2 absolute my-0 mx-[!important] bottom-[86px] left-[96px] rounded-[50%] bg-gray-400 z-[2]" />
          <div className="h-[30px] w-[30px] absolute my-0 mx-[!important] top-[432px] right-[18px] rounded-8xs box-border z-[1] border-[1px] border-solid border-gainsboro" />
          <div className="flex-1 bg-gray-200 flex flex-col items-center justify-start pt-[66px] pb-[159px] pr-[19px] pl-[33px] gap-[40px] z-[5]">
            <div className="w-[383px] h-[927px] relative bg-gray-200 hidden" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-0 text-center text-9xl">
              <div className="flex-1 flex flex-col items-start justify-start gap-[28px]">
                <div className="w-[259px] flex flex-col items-end justify-start gap-[10px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="w-[201px] flex flex-row items-start justify-between py-0 pr-px pl-0 box-border">
                      <img
                        className="h-[13.2px] w-[19.6px] relative z-[6]"
                        loading="eager"
                        alt=""
                        src="/vector.svg"
                      />
                      <img
                        className="h-[89px] w-[89px] relative rounded-[50%] object-cover z-[6]"
                        loading="eager"
                        alt=""
                        src="/unsplashvvewjjrrhgk-1@2x.png"
                      />
                    </div>
                  </div>
                  <h2 className="m-0 h-[33px] relative text-inherit font-semibold font-inherit inline-block z-[6]">
                    Dave C. Brown
                  </h2>
                  <div className="flex flex-row items-start justify-start py-0 px-[53px] text-sm text-white">
                    <div className="relative font-light z-[6]">@dave_brown</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-end justify-start gap-[20px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-0">
                    <div className="h-px flex-1 relative bg-silver z-[6]" />
                  </div>
                  <div className="w-[306px] flex flex-row items-start justify-between">
                    <nav className="m-0 flex flex-col items-start justify-start gap-[14px] text-left text-base text-white font-roboto">
                      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px] gap-[22px]">
                        <img
                          className="h-4 w-4 relative z-[6]"
                          alt=""
                          src="/pen.svg"
                        />
                        <div className="relative z-[6]">Edit Profile</div>
                      </div>
                      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1 gap-[18px]">
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[6]"
                          loading="eager"
                          alt=""
                          src="/new-releases.svg"
                        />
                        <div className="relative z-[6]">Network</div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[15px]">
                        <input
                          className="m-0 h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px] z-[6]"
                          type="checkbox"
                        />
                        <div className="relative z-[6]">Photos/Videos</div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[16px]">
                        <img
                          className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px] z-[6]"
                          loading="eager"
                          alt=""
                          src="/groups.svg"
                        />
                        <div className="relative z-[6]">Group</div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[18px]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 z-[6]"
                          loading="eager"
                          alt=""
                          src="/privacy-tip.svg"
                        />
                        <div className="relative z-[6]">Your Privacy</div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[18px]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 z-[6]"
                          loading="eager"
                          alt=""
                          src="/search.svg"
                        />
                        <div className="relative z-[6]">Search Profile</div>
                      </div>
                    </nav>
                    <div className="flex flex-col items-end justify-start gap-[14px]">
                      <div className="flex flex-row items-start justify-start py-0 pr-1 pl-0">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 z-[6]"
                          loading="eager"
                          alt=""
                          src="/chevron-right.svg"
                        />
                      </div>
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[6]"
                        loading="eager"
                        alt=""
                        src="/chevron-right.svg"
                      />
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[6]"
                        loading="eager"
                        alt=""
                        src="/chevron-right.svg"
                      />
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[6]"
                        loading="eager"
                        alt=""
                        src="/chevron-right.svg"
                      />
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[6]"
                        loading="eager"
                        alt=""
                        src="/chevron-right.svg"
                      />
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[6]"
                        loading="eager"
                        alt=""
                        src="/chevron-right.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-12 gap-[20px] text-white">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[11px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[19px] z-[6]">
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="flex flex-row items-start justify-start gap-[19px]">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        loading="eager"
                        alt=""
                        src="/settings.svg"
                      />
                      <div className="relative">Payments</div>
                    </div>
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="eager"
                      alt=""
                      src="/chevron-right-6.svg"
                    />
                  </div>
                  <div className="w-[305px] flex flex-row items-start justify-between">
                    <div className="flex flex-row items-start justify-start gap-[20px]">
                      <img
                        className="h-[21px] w-[21px] relative min-h-[21px]"
                        loading="eager"
                        alt=""
                        src="/frame.svg"
                      />
                      <div className="relative">About Us</div>
                    </div>
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="eager"
                      alt=""
                      src="/chevron-right-6.svg"
                    />
                  </div>
                  <div className="w-[311px] flex flex-row items-start justify-start py-0 px-1 box-border">
                    <div className="flex-1 flex flex-row items-start justify-between">
                      <div className="flex flex-row items-start justify-start gap-[16px]">
                        <img
                          className="h-[21px] w-[21px] relative min-h-[21px]"
                          loading="eager"
                          alt=""
                          src="/group-45.svg"
                        />
                        <div className="relative">Language</div>
                      </div>
                      <img
                        className="h-6 w-6 relative min-h-[24px]"
                        loading="eager"
                        alt=""
                        src="/chevron-right-6.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[310px] h-px relative box-border z-[6] border-t-[1px] border-solid border-silver" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-3.5">
              <div className="flex flex-row items-start justify-start gap-[18px]">
                <img
                  className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px] z-[6]"
                  loading="eager"
                  alt=""
                  src="/logout.svg"
                />
                <div className="relative z-[6]">Log Out</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAbout;
