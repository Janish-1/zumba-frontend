import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSignInButtonClick = useCallback(() => {
    navigate("/log-in-page");
  }, [navigate]);

  return (
    <section className="absolute top-[255px] left-[0px] rounded-xl bg-darkslategray-200 w-full h-[456px] z-[1] text-left text-base text-gray-200 font-roboto">
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslategray-200 w-[100%] h-[456px] hidden" />
      <div className="absolute top-[41px] left-[73px] text-xl font-arvo text-white text-center flex items-end justify-center w-[260px] z-[2]">
        Your New Password Must Be Different From Your Old Password
      </div>
      <div>
        <button
          className="cursor-pointer [border:none] p-0 bg-firebrick absolute top-[359px] left-[125px] rounded-mini w-[159px] h-14 z-[2]"
          onClick={onSignInButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-firebrick w-[159px] h-14 hidden" />
          <b className="absolute top-[11px] left-[39px] text-11xl inline-block font-arvo text-white text-left w-[82px] z-[1]">
            SAVE
          </b>
        </button>
      </div>

      <div className="absolute w-[100%] top-[158px] h-14">
        <img
          className="absolute top-[0px] left-[0px] w-[100%]  h-14"
          loading="eager"
          alt=""
          src="/password.svg"
        />
        <input
          type="text"
          className="absolute top-[19px] [border:none] [outline:none] bg-[transparent] left-[53px] inline-block  h-[17.4px] z-[3]"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
        />
      </div>
      <div className="absolute w-full top-[239px]  h-14">
        <img
          className="absolute top-[0px] left-[0px] w-[100%] h-14"
          loading="eager"
          alt=""
          src="/password.svg"
        />
        <input
          type="text"
          className="absolute top-[19px] [border:none] [outline:none] bg-[transparent] left-[52px] inline-block h-[17.4px] z-[3]"

          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />

      </div>
    </section>
  );
};

export default Login;
