import React from 'react';

const UpcomingLucky = () => {
    return (
        <div className="w-full max-w-sm bg-darkslategray-200 border border-gray-200 rounded-lg shadow dark:border-gray-700 text-white">
            <img className="rounded-t-lg object-cover w-full" src="https://image.shutterstock.com/image-vector/realistic-3d-spinning-fortune-wheel-260nw-664557445.jpg" alt="lucky draw image" />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Lucky Draw Event</h5>
                <div className="mt-3">
                    <p className="text-lg text-gray-600  dark:text-white">Start Date: January 1, 2024</p>
                    <p className="text-lg text-gray-600  dark:text-white">End Date: January 31, 2024</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gray-200 p-2 rounded-md">
                        <p>1st Prize:</p>
                        <p>$1000</p>
                    </div>
                    <div className="bg-gray-200 p-2 rounded-md">
                        <p>2nd Prize:</p>
                        <p>$500</p>
                    </div>
                    <div className="bg-gray-200 p-2 rounded-md">
                        <p>3rd Prize:</p>
                        <p>$300</p>
                    </div>

                </div>
               
            </div>
        </div>
    );
};

export default UpcomingLucky;
