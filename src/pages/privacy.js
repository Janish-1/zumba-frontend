import React from 'react';
import { Link } from 'react-router-dom';
const Privacy = () => {
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
                <h1 className=" text-3xl pl-[20px] text-end text-9xl text-firebrick font-roboto">Privacy</h1> {/* Apply text-center class */}
                <div className='hidden'>{" "}</div>
            </div>
      {/* <h1 className="text-3xl  text-firebrick  font-bold text-center mb-4">Privacy</h1> */}
      <div className="text-lg text-gray-800 leading-relaxed">
        <p className="mb-4">Your privacy is important to us. This Privacy Policy outlines the types of personal information we receive and collect when you use our fitness app, as well as how we safeguard your information.</p>
        <p className="mb-4">We collect and store certain information when you interact with our app, such as your name, email address, and usage data. This information is used to provide and improve our services, personalize your experience, and communicate with you.</p>
        <p className="mb-4">We may also use cookies and similar technologies to analyze trends, administer the app, track users' movements around the app, and gather demographic information.</p>
        <p className="mb-4">Your personal information is never shared with third parties without your consent, except in cases where it is required by law or necessary to protect our rights, property, or safety.</p>
        <p className="mb-4">We take appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>
        <p className="mb-4">By using our fitness app, you consent to the collection and use of your personal information as outlined in this Privacy Policy.</p>
        <p className="mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review the Privacy Policy periodically.</p>
        <p className="mb-4">If you have any questions or concerns about our Privacy Policy, please contact us.</p>
      </div>
    </div>
  );
};

export default Privacy;
