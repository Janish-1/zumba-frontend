import React, { useEffect } from 'react';
import { fetchLuckyDraws } from '../redux/actions/luckyDrawActions';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrophy } from 'react-icons/fa'; // Import icons from Font Awesome

const LatestLuckydraw = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.luckydraw);
    const { completedLuckyDraws, loading } = state;

    // Function to capitalize the winner's name
    const capitalizeWinnerName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    // Function to format the prize amount as ₹5000/-
    const formatPrice = (price) => {
        return `₹${price.split("-")[0]}`;
    };

    useEffect(() => {
        dispatch(fetchLuckyDraws());
    }, [dispatch]);

    // Get the most recently completed draw
    const latestDraw = completedLuckyDraws.length > 0 ? completedLuckyDraws[completedLuckyDraws.length - 1] : null;

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : latestDraw ? (
                <div className="w-full max-w-sm bg-darkslategray-200 border border-gray-200 rounded-lg shadow dark:border-gray-700 text-white">
                    <div className="px-2 pb-[10px]">
                        <h5 className="text-xl font-semibold tracking-tight text-white text-center dark:text-white">{latestDraw.name.toUpperCase()}</h5>
                        <div className="grid grid-cols-1 gap-1">
                            <div className={`bg-gray-200 px-2 py-1 rounded-md`}>
                                <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign:'start'}}>
                                    <span><FaTrophy style={{color:'#ffd700'}}/>{" "}1<sup>st</sup></span> {/* First place icon */}
                                    <span>{capitalizeWinnerName(latestDraw.winner_candidates1)}</span>
                                    <span>{formatPrice(latestDraw.first_price)}</span>
                                </p>
                            </div>
                            <div className={`bg-gray-200 px-2 py-1 rounded-md `}>
                                <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,textAlign:'start'}}>
                                    <span><FaTrophy style={{color:'#a9b8aa'}}/>{" "}2<sup>nd</sup></span> {/* Second place icon */}
                                    <span>{capitalizeWinnerName(latestDraw.winner_candidates2)}</span>
                                    <span>{formatPrice(latestDraw.second_price)}</span>
                                </p>
                            </div>
                            <div className={`bg-gray-200 px-2 py-1 rounded-md`}>
                                <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,textAlign:'start'}}>
                                    <span><FaTrophy style={{color:'#9F6700'}}/>{" "}3<sup>rd</sup></span> {/* Third place icon */}
                                    <span>{capitalizeWinnerName(latestDraw.winner_candidates3)}</span>
                                    <span>{formatPrice(latestDraw.third_price)}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No completed draws available.</p>
            )}
        </>
    );
};

export default LatestLuckydraw;
