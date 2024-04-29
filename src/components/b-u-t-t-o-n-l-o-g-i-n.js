import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BUTTONLOGIN = () => {
  const navigate = useNavigate();

  const onRectangleLoginClick = useCallback(() => {
    navigate("/log-in-page");
  }, [navigate]);

  const onSIGNUPTextClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <footer className="self-stretch bg-darkslategray-200 flex flex-col items-center justify-start pt-[31px] pb-[41px] pr-[27px] pl-[31px] gap-[30px] text-left text-base text-white font-arvo">
      <div className="w-[430px] h-[179px] relative bg-darkslategray-200 hidden" />
      <button className="cursor-pointer [border:none] pt-[11px] pb-2 pr-[26px] pl-[116px] bg-[transparent] self-stretch flex flex-row items-center justify-center relative gap-[70px]"
                onClick={onRectangleLoginClick}

      >
        <div
          className="h-full w-[calc(100%_-_1.3px)] absolute my-0 mx-[!important] top-[0px] right-[1.7px] bottom-[0px] left-[-0.4px] bg-firebrick cursor-pointer z-[1]"
        />
        <b className="h-[37px] w-[136px] relative text-11xl inline-block font-arvo text-white text-left shrink-0 z-[2]">
          SIGN IN
        </b>
        <input className="m-0 h-[27px] w-6" type="checkbox" style={{visibility:'hidden'}}/>
      </button>
      <div className="flex flex-row items-start justify-start py-0 pr-1.5 pl-0">
        <div className="flex flex-row items-end justify-start gap-[3.3px]">
          <div className="relative z-[1]">{`DON’T HAVE ACCOUNT `}</div>
          <div
            className="relative text-lg [text-decoration:underline] font-extrabold font-roboto text-firebrick text-justify cursor-pointer z-[1]"
            onClick={onSIGNUPTextClick}
          >
            SIGN UP
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BUTTONLOGIN;
