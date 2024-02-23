import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login1 = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    otp: '',
    newPassword: '',
    confirmPassword: '',
  });


  const handleOtpChange = (e) => {
    const { value } = e.target;
    setOtp(value);
    setErrors(prevErrors => ({
      ...prevErrors,
      otp: value.trim() === '' ? 'Please enter the verification code.' : '',
    }));
  };

  const handleNewPasswordChange = (e) => {
    const { value } = e.target;
    setNewPassword(value);
    setErrors(prevErrors => ({
      ...prevErrors,
      newPassword: value.trim() === '' ? 'Please enter a new password.' : '',
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    setErrors(prevErrors => ({
      ...prevErrors,
      confirmPassword: value.trim() === '' ? 'Please confirm your new password.' :
        value !== newPassword ? 'Passwords do not match.' : '',
    }));
  };
  const handleNewPassword = async () => {
    try {
      const new_password=newPassword;      
      const response = await fetch('http://13.201.135.248:8000/api/new-password-set/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp ,new_password}),
      });
      const data=await response.json();
      console.log("response",data)
      if (!response.ok) {
        // Handle API errors
        setErrors(data.error);
        throw new Error('Failed to send reset password email.');
      }else{
        navigate('/log-in-page')
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex-1 rounded-xl bg-darkslategray-200 flex flex-col items-center justify-start pt-[51px] pb-[38px] pr-[11px] pl-3 box-border gap-[72px] max-w-full z-[1] text-center text-xl text-white font-arvo mq450:gap-[72px]">
      <div className="w-[405px] h-[456px] relative rounded-xl bg-darkslategray-200 hidden max-w-full" />
      <div className="self-stretch flex flex-col items-center justify-start  max-w-full gap-3 mq450:gap-[10px]">
        <div className="w-[260px] relative flex items-end justify-center z-[2]">
          Enter Verification Code Just Sent To Your Email Address
        </div>
        <div className="self-stretch rounded-mini bg-gray-100 flex flex-row items-start justify-start pt-3.5 px-2.5 pb-2.5 box-border gap-[20px] max-w-full z-[1]">
          <div className="h-[51.2px] w-[382px] relative rounded-mini bg-gray-100 hidden max-w-full" />
          <img
            className="h-[27px] w-7 relative overflow-hidden shrink-0 z-[2]"
            alt=""
            src="/formtextboxpassword.svg"
          />
          <input
            className="w-[193px] [border:none] [outline:none] bg-[transparent] h-5 flex flex-col items-start justify-start pt-[3px] px-0 pb-[0.10000000000000142px] box-border font-roboto text-base text-gray-200"
            placeholder="Enter Verification Code"
            type="text"
            value={otp}
            onChange={handleOtpChange}
          />

        </div>
        {errors.otp && <p className="text-red-500">{errors.otp}</p>}

        <div className="self-stretch rounded-mini bg-gray-100 flex flex-row items-start justify-start pt-3.5 px-2.5 pb-2.5 box-border gap-[20px] max-w-full z-[1]">
          <div className="h-[51.2px] w-[382px] relative rounded-mini bg-gray-100 hidden max-w-full" />
          <img
            className="h-[27px] w-7 relative overflow-hidden shrink-0 z-[2]"
            alt=""
            src="/formtextboxpassword.svg"
          />
          <input
            className="w-[193px] [border:none] [outline:none] bg-[transparent] h-5 flex flex-col items-start justify-start pt-[3px] px-0 pb-[0.10000000000000142px] box-border font-roboto text-base text-gray-200"
            placeholder="New Password"
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </div>
        {errors.newPassword && <p className="text-red-500">{errors.newPassword}</p>}

        <div className="self-stretch rounded-mini bg-gray-100 flex flex-row items-start justify-start pt-3.5 px-2.5 pb-2.5 box-border gap-[20px] max-w-full z-[1]">
          <div className="h-[51.2px] w-[382px] relative rounded-mini bg-gray-100 hidden max-w-full" />
          <img
            className="h-[27px] w-7 relative overflow-hidden shrink-0 z-[2]"
            alt=""
            src="/formtextboxpassword.svg"
          />
          <input
            className="w-[193px] [border:none] [outline:none] bg-[transparent] h-5 flex flex-col items-start justify-start pt-[3px] px-0 pb-[0.10000000000000142px] box-border font-roboto text-base text-gray-200"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
      </div>
      <div className="w-[186px] flex flex-row items-start justify-start py-0 pr-[11px] pl-0 box-border">
        <button
          className="cursor-pointer [border:none] pt-[13px] px-[5px] pb-1.5 bg-firebrick flex-1 rounded-mini flex flex-row items-end justify-center z-[2] hover:bg-crimson"
          onClick={handleNewPassword}
        >
          <div className="h-14 w-[175px] relative rounded-mini bg-firebrick hidden" />
          <b className="h-[37px] relative text-11xl inline-block font-arvo text-white text-left z-[1]">
            Save
          </b>
        </button>
      </div>
    </div>
  );
};

export default Login1;
