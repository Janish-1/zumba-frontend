import React from 'react';
import LiveSessionFrameWithGraph from './live-session-frame-with-graph';

const PreviousSession = ({ state }) => {
    const { previousSessions, loading } = state;
    const BASE_URL = process.env.REACT_APP_API_URL;

    const handleWatchSession = (videoLink) => {
        window.location.href = videoLink; // Redirect to the video link
    };

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : previousSessions.length === 0 ? (
                <div style={{ color: 'red', textAlign: 'center' }}>No previous sessions available.</div>
            ) : (
                previousSessions.map((session, index) => (
                    <section key={index} style={{ marginBottom: '20px' }} className="self-stretch rounded-3xs bg-darkslategray-200 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-start pt-[19px] pb-[17px] pr-[37px] pl-9 box-border gap-[10px] max-w-full z-[1] text-left text-lg text-firebrick font-roboto">
                        <div className="w-[370px] h-[361px] relative rounded-3xs bg-darkslategray-200 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-0">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                                <div className="flex flex-row items-start justify-start gap-[17px]">
                                    <div className="flex flex-col items-start justify-start py-0 pr-0.5 pl-0">
                                        <div className="flex flex-row items-start justify-start py-0 px-0">
                                            <h3 className="m-0 relative text-inherit leading-[150%] capitalize font-bold font-inherit z-[1]">
                                                {session.name}
                                            </h3>
                                        </div>
                                        <div className="relative text-xs leading-[150%] font-light text-white whitespace-nowrap z-[1]">
                                            <span className="capitalize">{session.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-px pb-[5px]">
                            <div className="flex-1 flex flex-row items-start justify-start relative">
                                <div className="h-px w-2.5 absolute my-0 mx-[!important] bottom-[80.9px] left-[62.2px]" />
                                <img
                                    className="self-stretch relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                                    loading="eager"
                                    alt=""
                                    src={`${BASE_URL}${session.poster}`}
                                />
                            </div>
                        </div>
                        {/* Time Display */}
                        <LiveSessionFrameWithGraph content={'Watch Here'} handleNavigation={() => handleWatchSession(session.youtube_live_link)} />
                    </section>
                ))
            )}
        </div>
    );
};

export default PreviousSession;
