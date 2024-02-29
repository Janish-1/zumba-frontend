import React from 'react';

const Completedluckydraw = ({ state }) => {
    const { completedLuckyDraws, loading } = state;
    const base = "https://zumbafront.ramo.co.in";

    // Function to capitalize the winner's name
    const capitalizeWinnerName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    // Function to format the prize amount as ₹5000/-
    const formatPrice = (price) => {
        return `₹${price.split("-")[0]}-`;
    };

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                completedLuckyDraws?.map((draw, index) => (
                    <div key={index} className="w-full max-w-sm bg-darkslategray-200 border border-gray-200 rounded-lg shadow dark:border-gray-700 text-white">
                        <div className="px-5 pb-[10px]">
                            <h5 className="text-xl font-semibold tracking-tight text-white dark:text-white">{draw.name.toUpperCase()}</h5>
                            <img className="rounded-lg  object-cover w-full" src={`${base}${draw.poster}`} alt="lucky draw image" />
                            <div className="mt-3">
                                <p className="text-lg text-white  dark:text-white">Winner's</p>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <div className="bg-gray-200 p-2 rounded-md">
                                    <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span>1<sup>st</sup></span>
                                        <span>{capitalizeWinnerName(draw.winner_candidates1)}</span>
                                        <span>{formatPrice(draw.first_price)}</span>
                                    </p>
                                </div>
                                <div className="bg-gray-200 p-2 rounded-md">
                                    <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span>2<sup>nd</sup></span>
                                        <span>{capitalizeWinnerName(draw.winner_candidates2)}</span>
                                        <span>{formatPrice(draw.second_price)}</span>
                                    </p>
                                </div>
                                <div className="bg-gray-200 p-2 rounded-md">
                                    <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span>3<sup>rd</sup></span>
                                        <span>{capitalizeWinnerName(draw.winner_candidates3)}</span>
                                        <span>{formatPrice(draw.third_price)}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};

export default Completedluckydraw;
