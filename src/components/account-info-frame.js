import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const AccountInfoFrame = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const BASE_URL='https://zumba.ramo.co.in/api/register/'

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };const validationSchema = Yup.object({
    username: Yup.string()
      .required('Full name is required')
      .matches(/^\S*$/, 'Username cannot contain spaces'), // This regex ensures no spaces are allowed
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  });
  

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("values",values);
      const response = await axios.post(`${BASE_URL}`, values, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) {
        // Successful signup, navigate to login page or any other route
        Swal.fire({
          icon: 'success',
          title: 'SUCCESS',
          text: "You have Successfully Registered, Please Login to have Healthy Life"
        });
        navigate("/log-in-page");
      } else {
        // Handle error response
        console.log("response ",response)
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.msg
      });
      console.log("error",error)
      console.error('Error:', error.message);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="m-0 self-stretch rounded-xl bg-darkslategray-200 flex flex-col items-center justify-start pt-[45px] pb-3 px-4 gap-[25px] z-[1]">
        <div className="flex flex-row items-start justify-start pt-0 px-5 pb-[3px]">
          <h3 className="m-0 relative text-6xl font-normal font-arvo text-firebrick text-justify z-[2]">
            Sign Up to create Account
          </h3>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
          <div className="flex-1 rounded-mini bg-gray-100 flex flex-row items-center justify-start pt-[13px] px-[9px] pb-3.5 gap-[17px] z-[2]">
            <div className="h-14 w-[382px] relative rounded-mini bg-gray-100 hidden" />
            <img
              className="h-[29px] w-[29px] relative overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/accountoutline.svg"
            />
            <Field
              className="w-[192.9px] [border:none] [outline:none] font-roboto text-base bg-[transparent] h-[19px] relative text-gray-200 text-left inline-block z-[3]"
              name="username"
              placeholder="username"
              type="text"
            />
          </div>
        </div>
        <ErrorMessage name="username" component="div" className="text-red-500 px-5 pb-2 font-roboto text-sm" />

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
              className="h-6 w-6 relative overflow-hidden shrink-0 z-[3] cursor-pointer"
              alt=""
              src="/eyeslash.svg"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>
        <ErrorMessage name="password" component="div" className="text-red-500 px-5 pb-2 font-roboto text-sm" />

        <div className="self-stretch rounded-mini bg-gray-100 flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
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
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
              />
            </div>
          </div>
        </div>
        <ErrorMessage name="confirmPassword" component="div" className="text-red-500 px-5 pb-2 font-roboto text-sm" />

        <div className="w-full flex flex-col items-center justify-start gap-[21px]">
          <div className="w-full flex flex-row items-start justify-start ">
            <button
              type="submit"
              className=" w-full cursor-pointer text-center [border:none] bg-firebrick py-1 rounded-mini flex flex-row items-center justify-center box-border z-[2]"
            >
              <b className=" text-11xl font-arvo text-white  z-[1]">
                SIGN UP
              </b>
            </button>
          </div>
          <div className="flex flex-row items-center justify-start cursor-pointer z-[2] gap-[21px]" >
            <div className="relative text-base font-roboto text-gray-100 text-left">
              Already have an account{" "}
            </div>
            <Link to='/log-in-page'>
            <div className="relative text-lg [text-decoration:underline] font-extrabold font-roboto text-firebrick text-justify">
              {" "} SIGN IN
            </div>
            </Link>
           
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default AccountInfoFrame;
