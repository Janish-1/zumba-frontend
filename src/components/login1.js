import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login1 = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Validate email using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inputEmail)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
    }
  };

  const handleVerify = async () => {
    try {
      
      // Call the API
      const response = await fetch('http://zumba.ramo.co.in/api/forget-password/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data=await response.json();
      console.log("response",data)
      if (!response.ok) {
        // Handle API errors
        setError(data.error);
        throw new Error('Failed to send reset password email.');
      }else{
        navigate('/forget-password-2')
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex-1 rounded-xl bg-darkslategray-200 flex flex-col items-center justify-start pt-[51px] pb-[38px] pr-[11px] pl-3 box-border gap-[72px] max-w-full z-[1] text-center text-xl text-white font-arvo mq450:gap-[72px]">
      <div className="w-[405px] h-[456px] relative rounded-xl bg-darkslategray-200 hidden max-w-full" />
      <div className="self-stretch flex flex-col items-center justify-start gap-[47px] max-w-full mq450:gap-[47px]">
        <div className="w-[260px] relative flex items-end justify-center z-[2]">
          Please Enter Your Email Address To Receive a Verification Code
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
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div className="w-[186px] flex flex-row items-start justify-start py-0 pr-[11px] pl-0 box-border">
        <button
          className="cursor-pointer [border:none] pt-[13px] px-[5px] pb-1.5 bg-firebrick flex-1 rounded-mini flex flex-row items-end justify-center z-[2] hover:bg-crimson"
          onClick={handleVerify}
          type="button"
        >
          <div className="h-14 w-[175px] relative rounded-mini bg-firebrick hidden" />
          <b className="h-[37px] relative text-11xl inline-block font-arvo text-white text-left z-[1]">
            VERIFY
          </b>
        </button>
      </div>
    </div>
  );
};

export default Login1;
