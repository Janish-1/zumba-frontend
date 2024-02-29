import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';

const MainFrame = () => {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const BASE_URL = 'https://zumba.ramo.co.in/api/login/'

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const initialValues = {
    email: '',
    password: '',
  };
  const [otp, setOtp] = useState('');

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),

  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("values", values);
      const response = await axios.post(`${BASE_URL}`, values, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        localStorage.setItem('userId', response.data.user_id);
        // Retrieve OTP from the response and set it in the state
        const otpFromResponse = response.data.otp;
        setOtp(otpFromResponse);
        
        setLogged(true);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: response.statusText
        });
      }
    } catch (error) {
      // Log the error message
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.error
      });
      // console.log("error",error.response.data.error);
      console.error('Error:', error.message);
    }
    setSubmitting(false);
  };

  const handleVerifyOTP = async () => {
    try {
      const id = localStorage.getItem('userId'); // Retrieve user ID from localStorage
      console.log("user id and otp", id, otp)
      const response = await axios.post(
        'https://zumba.ramo.co.in/api/otpverify/',
        { otp, id },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Response from verifyotp:', response);

      if (response.status === 200) {
        // If OTP verification is successful, set logged state to true
        console.log('verified')
        navigate("/");
        setLogged(true);
      } else {
        // Handle error response
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.error
      });
      console.error('Error in catch:', error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="m-0 self-stretch rounded-xl bg-darkslategray-200 flex flex-col items-center justify-start pt-[45px] pb-3 px-5 gap-[25px] z-[1]">
        <div className="flex flex-row items-start justify-start pt-0 px-5 pb-[3px]">
          <h3 className="m-0 relative text-6xl font-normal font-arvo text-firebrick text-justify z-[2]">
            Sign in to your Account
          </h3>
        </div>

        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
          <div className="flex-1 rounded-mini bg-gray-100 flex flex-row items-center justify-start py-4 px-[13px] gap-[21px] z-[2]">
            <div className="h-14 w-[382px] relative rounded-mini bg-gray-100 hidden" />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/email-open.svg"
            />
            <Field
              className="w-[192.9px] [border:none] [outline:none] font-roboto text-base bg-[transparent] h-[19px] relative text-gray-200 text-left inline-block z-[3]"
              name="email"
              placeholder="Enter Email Address"
              type="email"
            />
          </div>
        </div>
        <ErrorMessage name="email" component="div" className="text-red-500 px-5 pb-2 font-roboto text-sm" />

        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
          <div className="flex-1 rounded-mini bg-gray-100 flex flex-row items-start justify-between pt-[15px] pb-[13px] pr-6 pl-[9px] z-[2]">
            <div className="h-14 w-[382px] relative rounded-mini bg-gray-100 hidden" />
            <div className="w-full flex flex-row items-end justify-start gap-[19px]">
              <img
                className="h-7 w-[27px] relative overflow-hidden shrink-0 z-[3]"
                alt=""
                src="/lock.svg"
              />
              <Field
                className="w-full border-none outline-none font-roboto text-base bg-transparent h-19px flex-1 relative text-gray-200 text-left inline-block z-3"
                name="password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
              />
            </div>
            <img
              className={`h-6 w-6 relative overflow-hidden shrink-0 z-[3] ${showPassword ? 'cursor-pointer' : ''}`}
              alt=""
              src="/eyeslash.svg"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>
        <ErrorMessage name="password" component="div" className="text-red-500 px-5 pb-2 font-roboto text-sm" />
        {logged && <div className="self-stretch flex flex-col items-center justify-start gap-[10px] max-w-full mq450:gap-[10px]">
          <div className="self-stretch rounded-mini bg-gray-100 flex flex-row items-start justify-start pt-3.5 px-2.5 pb-2.5 box-border gap-[10px] max-w-full z-[1]">
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
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-0 text-left text-base text-gray-100 font-roboto">
            {/* <div className="relative z-[2]" onClick={handleSubmit}>Resend Code</div> */}
          </div>
        </div>}
        <div className="flex flex-col items-center justify-start gap-[21px]">
          <div className="w-[180px] flex flex-row items-start justify-start pt-0 pb-1.5 pr-[5px] pl-0 box-border">
            <div className="flex-1 flex flex-col items-center justify-start gap-[17px]">
              <div className="flex flex-row items-start justify-start py-0 pr-[17px] pl-[22px]">
                <div
                  className="relative text-base font-roboto text-gray-100 text-left cursor-pointer z-[2]"
                  onClick={() => navigate('/forget-password-1')}
                >
                  Forget Password?
                </div>
              </div>
              {logged ? (<button
                className="cursor-pointer [border:none] py-1 bg-firebrick self-stretch rounded-mini shadow-[0px_4px_4px_rgba(255,_218,_218,_0.25)] flex flex-row items-center justify-end z-[2]"
                onClick={handleVerifyOTP}
                type="button"
              >
                <b className=" flex-1 relative text-11xl inline-block font-arvo text-white  z-[1]">
                  Verify
                </b>
              </button>) : (<button
                className="cursor-pointer [border:none] py-1 bg-firebrick self-stretch rounded-mini shadow-[0px_4px_4px_rgba(255,_218,_218,_0.25)] flex flex-row items-center justify-end z-[2]"
                type="submit"
              >
                <div className="h-14 w-full relative rounded-mini bg-firebrick hidden" />
                <b className=" flex-1 relative text-11xl inline-block font-arvo text-white  z-[1]">
                  Sign In
                </b>
              </button>)}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start cursor-pointer z-[2] gap-[21px]" >
            <div className="relative text-base font-roboto text-gray-100 text-left">
              Don't have an account{" "}
            </div>
            <Link to='/sign-up-page'>
              <div className="relative text-lg [text-decoration:underline] font-extrabold font-roboto text-firebrick text-justify">
                {" "} SIGN UP
              </div>
            </Link>

          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default MainFrame;
