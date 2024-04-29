import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const AccountInfoFrame = () => {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_API_URL;

  const initialValues = {
    name: '',
    fatherName: '',
    address: '',
    aadharNo: '',
    photo: null,
    phoneNumber: '',
    email: '',
  };

  console.log("intial values ", initialValues)

  const phoneRegExp = /^\+[1-9]{1}[0-9]{3,14}$/;  // Example regex, adjust according to your needs

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    fatherName: Yup.string().required('Father name is required'),
    address: Yup.string().required('Address is required'),
    aadharNo: Yup.string()
      .matches(/^\d{12}$/, 'Aadhar number must be exactly 12 digits')
      .required('Aadhar number is required'),
    photo: Yup.mixed().required('A photo is required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required')
  });

  const PhotoInput = () => {
    const { setFieldValue } = useFormikContext();

    const handleFileChange = (event) => {
      const file = event.currentTarget.files[0];
      setFieldValue("photo", file);  // Update Formik's state with the new file
    };

    return (
      <div className="w-full flex flex-row items-center justify-start gap-[10px] pt-[10px] pb-[10px]">
        <label htmlFor="photo-upload" className="block text-sm font-medium text-gray-700">
          Upload Photo:
        </label>
        <input
          type="file"
          id="photo-upload"
          name="photo"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-900
                           border border-gray-300 rounded-md
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-full file:border-0
                           file:text-sm file:font-semibold
                           file:bg-violet-50 file:text-violet-700
                           hover:file:bg-violet-100"
        />
      </div>
    );
  };


  const handleSubmit = async (values, { setSubmitting }) => {
    const formData = new FormData();
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        formData.append(key, values[key]);
      }
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/register/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'SUCCESS',
          text: "You have Successfully Registered, Please Login to have Healthy Life",
        });
        navigate("/log-in-page");
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response?.data?.msg || "An error occurred",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="m-0 self-stretch rounded-xl bg-darkslategray-200 flex flex-col items-center justify-start pt-[45px] pb-3 px-4 gap-[25px] z-[1]">
        <div className="flex flex-row items-start justify-start pt-0 px-5 pb-[3px]">
          <h3 className="m-0 relative text-xl font-normal font-arvo text-firebrick text-justify z-[2]">
            Sign Up to create Account
          </h3>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
          <div className="flex-1 rounded-mini bg-gray-100 flex flex-row items-center justify-start pt-[13px] px-[9px] pb-3.5 gap-[17px] z-[2]">
            <div className="h-14 w-full relative rounded-mini bg-gray-100 hidden" />
            <img
              className="h-[29px] w-[29px] relative overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/accountoutline.svg"
            />
            <Field
              className="w-full [border:none] [outline:none] font-roboto text-base bg-[transparent] h-[19px] relative text-gray-200 text-left inline-block z-[3]"
              name="name"
              placeholder="Name"
              type="text"
            />
          </div>
        </div>
        <ErrorMessage name="name" component="div" className="text-red-500 px-5 pb-2 font-roboto text-sm" />

        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
          <div className="flex-1 rounded-mini bg-gray-100 flex flex-row items-center justify-start py-4 px-[13px] gap-[21px] z-[2]">
            <div className="h-14 w-full relative rounded-mini bg-gray-100 hidden" />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/email-open.svg" // Use appropriate icon for email
            />
            <Field
              className="w-full [border:none] [outline:none] font-roboto text-base bg-[transparent] h-[19px] relative text-gray-200 text-left inline-block z-[3]"
              name="email"
              placeholder="Email"
              type="email"
            />
          </div>
        </div>
        <ErrorMessage name="email" component="div" className="text-red-500 px-5 pb-2 font-roboto text-sm" />


        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
          <div className="flex-1 rounded-mini bg-gray-100 flex flex-row items-center justify-start py-4 px-[13px] gap-[21px] z-[2]">
            <div className="h-14 w-full relative rounded-mini bg-gray-100 hidden" />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/email-open.svg"
            />
            <Field
              className="w-full [border:none] [outline:none] font-roboto text-base bg-[transparent] h-[19px] relative text-gray-200 text-left inline-block z-[3]"
              name="fatherName"
              placeholder="Enter Father's Name"
              type="text"
            />
          </div>
        </div>
        <ErrorMessage name="fatherName" component="div" className="text-red-500 px-5 pb-2 font-roboto text-sm" />

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
                name="address"
                placeholder="Enter Address"
                type="text"
              />
            </div>
          </div>
        </div>
        <ErrorMessage name="address" component="div" className="text-red-500 px-5 pb-2 font-roboto text-sm" />

        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
          <div className="flex-1 rounded-mini bg-gray-100 flex flex-row items-start justify-between pt-[15px] pb-[13px] pr-6 pl-[9px] z-[2]">
            <div className="h-14 w-[382px] relative rounded-mini bg-gray-100 hidden" />
            <div className="w-full flex flex-row items-end justify-start gap-[19px]">
              <img
                className="h-7 w-[27px] relative overflow-hidden shrink-0 z-[3]"
                alt=""
                src="/lock.svg" // Assuming you have a suitable icon for the phone
              />
              <Field
                className="w-full border-none outline-none font-roboto text-base bg-transparent h-19px flex-1 relative text-gray-200 text-left inline-block z-3"
                name="phoneNumber"
                placeholder="+CountryCode PhoneNumber"
                type="text"
              />
            </div>
          </div>
        </div>
        <ErrorMessage name="phoneNumber" component="div" className="text-red-500 px-5 pb-2 font-roboto text-sm" />

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
                name="aadharNo"
                placeholder="Aadhar Number"
                type="text"
              />
            </div>
          </div>
        </div>
        <ErrorMessage name="aadharNo" component="div" className="text-red-500 px-5 pb-2 font-roboto text-sm" />
        Enter a Photo: <PhotoInput />
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
