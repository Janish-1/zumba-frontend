import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';
const Contactus = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
     <div className='flex flex-row items-center ' >
                <Link to={'/profile-main'}>
                    <img
                        className="h-[34px] object-contain"
                        loading="eager"
                        alt=""
                        src="/right.svg"
                    />
                </Link>
                <h1 className=" text-3xl pl-[20px] text-end text-9xl text-firebrick font-roboto">Contact Us</h1> {/* Apply text-center class */}
                <div className='hidden'>{" "}</div>
            </div>
      {/* <h1 className="text-3xl text-firebrick  font-bold text-center mb-4">Contact Us</h1> */}
      <div className="text-lg text-gray-800 leading-relaxed">
        <p className="mb-4">Feel free to reach out to us using the following contact details:</p>
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-2" />
          <span>Phone: +1234567890</span>
        </div>
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-2" />
          <span>Email: example@example.com</span>
        </div>
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faFacebook} className="text-blue-500 mr-2" />
          <span>Facebook: facebook.com/example</span>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
