import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';

const MainFrame = () => {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpRequested, setOtpRequested] = useState(false); // Manages the flow of OTP request
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_API_URL;
  const [planStatus,setPlanStatus]=useState(null);

  const initialValues = {
    phoneNumber: '',
    otp: '',
  };

  const validationSchema = Yup.object({
    phoneNumber: Yup.string().required('Phone number is required').matches(/^\+[1-9]{1}[0-9]{3,14}$/, "Phone number is not valid"),
    otp: Yup.string().when("otpRequested", {
      is: true,
      then: Yup.string().required('OTP is required').min(6, 'OTP must be 6 digits').max(6),
    }),
  });

  const handleRequestOTP = async (values, { setSubmitting }) => {
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/api/login/`, { phoneNumber: values.phoneNumber }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        localStorage.setItem('userId', response.data.user_id);
        setPlanStatus(response.data.status);
        Swal.fire({
          icon: 'success',
          title: 'Success...',
          text: 'OTP Send Success'
        });
        setOtpRequested(true);
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response?.data?.error || "An unexpected error occurred"
      });
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const handleVerifyOTP = async (values, { setSubmitting }) => {
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/api/otpverify/`, { phoneNumber: values.phoneNumber, otp: values.otp });
      if (response.status === 200) {
        if(planStatus==="active"){
          navigate("/");
        }else{
          navigate('/premium');
        }
        setLogged(true);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'OTP verification failed'
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response?.data?.error || "An unexpected error occurred"
      });
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={otpRequested ? handleVerifyOTP : handleRequestOTP}
    >
      <Form className="w-full relative rounded-xl bg-darkslategray-200 flex flex-col pb-3 pl-[10px] top-5 items-center justify-start gap-[25px] z-[1]">
        <div className="flex flex-row items-start justify-start  px-5 pb-[3px] pt-2">
          <h3 className="m-0 relative text-6xl font-normal font-arvo text-firebrick text-justify z-[2]">
            Sign in to your Account
          </h3>
        </div>

        <div className="w-full self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
          <div className="flex-1 rounded-mini bg-gray-100 flex flex-row items-center justify-start py-4 px-2 gap-[21px] z-[2]">
            <Field
              className="w-full [border:none] [outline:none] font-roboto text-base bg-[transparent] h-[19px] relative text-gray-200 text-left inline-block z-[3]"
              name={otpRequested ? "otp" : "phoneNumber"}
              placeholder={otpRequested ? "Enter OTP" : "Enter Phone Number"}
              type="text"
            />
          </div>
        </div>
        <ErrorMessage name={otpRequested ? "otp" : "phoneNumber"} component="div" className="text-red-500 px-5 pb-2 font-roboto text-sm" />

        <div className="flex flex-col items-center justify-start gap-[21px]">
          <button
            className="cursor-pointer [border:none] py-1 bg-firebrick self-stretch rounded-mini shadow-[0px_4px_4px_rgba(255,_218,_218,_0.25)] flex flex-row items-center justify-end z-[2]"
            type="submit"
            disabled={loading}
          >
            <b className="flex-1 relative text-11xl inline-block font-arvo text-white z-[1]">
              {loading ? 'Processing...' : otpRequested ? 'Verify OTP' : 'Request OTP'}
            </b>
          </button>
          <Link to='/sign-up-page'>
            <div className="relative text-lg [text-decoration:underline] font-extrabold font-roboto text-firebrick text-justify">
              SIGN UP
            </div>
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

export default MainFrame;
