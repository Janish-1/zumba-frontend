import React from 'react';

const OngoingLucky = ({ state }) => {
    const { ongoingLuckyDraws, loading } = state;
    const base = "https://zumbafront.ramo.co.in";
    console.log("ongoing events ", ongoingLuckyDraws);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                ongoingLuckyDraws.map((draw, index) => {
                    const currentDate = new Date();
                    const startDate = new Date(draw.lucky_draw_startdate);

                    return (
                        <div key={index} className="w-full max-w-sm bg-darkslategray-200 border border-gray-200 rounded-lg shadow dark:border-gray-700 text-white">
                            <div className="px-5 pb-[10px]">
                                <h5 className="text-xl font-semibold tracking-tight text-white dark:text-white">{draw.name.toUpperCase()}</h5>
                                <img className="rounded-t-lg object-cover w-full" src={`${base}${draw.poster}`} alt="lucky draw image" />
                                <div className="mt-3">
                                    <p className="text-lg text-white dark:text-white">Start Date: {draw.lucky_draw_startdate}</p>
                                    <p className="text-lg text-white  dark:text-white">End Date: {draw.lucky_draw_enddate}</p>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="bg-gray-200 p-2 rounded-md">
                                        <p>1st Prize:</p>
                                        <p>{draw.first_price}</p>
                                    </div>
                                    <div className="bg-gray-200 p-2 rounded-md">
                                        <p>2nd Prize:</p>
                                        <p>{draw.second_price}</p>
                                    </div>
                                    <div className="bg-gray-200 p-2 rounded-md">
                                        <p>3rd Prize:</p>
                                        <p>{draw.third_price}</p>
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mt-5">
                                    <button 
                                        className="text-white w-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        disabled={currentDate < startDate}
                                    >
                                        {currentDate < startDate ? "Starts Soon" : "Participate"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </>
    );
};

export default OngoingLucky;
