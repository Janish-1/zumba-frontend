import React from 'react';
import { Link } from 'react-router-dom';

const LiveCom = () => {

    return (
        <>
            <div  className=" max-w-sm bg-darkslategray-200 border border-gray-200 rounded-lg mx-5 shadow dark:border-gray-700 text-white">
                <div className="px-5 pb-[10px]">
                    <h5 className="text-xl font-semibold tracking-tight  text-firebrick dark:text-firebrick">Live sessions.....</h5>
                    <Link to='/live-session'>
                    <img className="rounded-t-lg object-cover w-full" src='https://media.istockphoto.com/id/1395337483/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=lev6DFIvb5CVjdxSxuURswdZYLNHZPT4Y44iUkgm2q4=' alt="lucky draw image" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default LiveCom;
