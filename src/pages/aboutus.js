import React from 'react';
import { Link } from 'react-router-dom';
const Aboutus = () => {
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
                <h1 className=" text-3xl pl-[20px] text-end text-9xl text-firebrick font-roboto">About Us</h1> {/* Apply text-center class */}
                <div className='hidden'>{" "}</div>
            </div>
            {/* <h1 className="text-3xl  text-firebrick  font-bold text-center mb-4">About Us</h1> */}
            <div className="text-lg text-gray-800 leading-relaxed">
                <p className="mb-4">Welcome to our fitness app! We are passionate about promoting health, wellness, and fitness through our platform.</p>
                <p className="mb-4">Our mission is to provide you with the tools, resources, and motivation you need to achieve your fitness goals and lead a healthier lifestyle.</p>
                <p className="mb-4">Our app is dedicated to helping you explore various fitness activities, including gym workouts, cardio exercises, strength training, yoga sessions, and much more.</p>
                <p className="mb-4">Whether you're a beginner or an experienced fitness enthusiast, our app caters to all levels and interests.</p>
                <p className="mb-4">We believe that fitness is not just about physical strength but also about mental well-being.</p>
                <p className="mb-4">That's why our platform offers a holistic approach to health, focusing on both physical and mental fitness.</p>
                <p className="mb-4">Through our community, you can connect with like-minded individuals, share your fitness journey, and find inspiration to stay motivated.</p>
                <p className="mb-4">Thank you for choosing our fitness app to embark on your fitness journey.</p>
                <p className="mb-4">We are committed to supporting you every step of the way as you work towards a healthier, happier you!</p>
            </div>
        </div>
    );
};

export default Aboutus;
