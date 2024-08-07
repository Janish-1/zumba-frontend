import React from 'react';
import LiveSessionFrameWithGraph from './live-session-frame-with-graph';
import axios from 'axios';
const LiveSession = ({ state }) => {
    const { liveSessions, loading } = state;
    const BASE_URL = process.env.REACT_APP_API_URL;
    // console.log("livesession ",liveSessions)
    const handleWatchSession = async (videoLink, liveSessionId) => {
        const user=localStorage.getItem("userId");
    
        try {
            // Define the data to be sent in the request body
            const requestData = {
                user: user,
                live_session: liveSessionId
            };
    
            // Make the POST request using Axios
            const response = await axios.post(`${BASE_URL}/api/attendence/`, requestData);
            if(response.status==200){
                console.log("successfully attend live session")
            }
            // Redirect to the video link
            window.location.href = videoLink;
        } catch (error) {
            // Handle errors
            console.error('Error occurred:', error);
    
            // Redirect to the video link even if an error occurs (optional)
            window.location.href = videoLink;
        }
    };

    // Get current time
    const currentTime = new Date();

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : liveSessions.length === 0 ? (
                <div style={{ color: 'red', textAlign: 'center' }}>No live sessions available.</div>
            ) : (
                liveSessions.map((session, index) => {
                    // Convert start time to Date object
                    const startTimeArray = session.live_session_starttime.split(':');
                    const startTime = new Date();
                    startTime.setHours(parseInt(startTimeArray[0], 10));
                    startTime.setMinutes(parseInt(startTimeArray[1], 10));
                    startTime.setSeconds(parseInt(startTimeArray[2], 10));

                    // Compare current time with start time
                    const isButtonDisabled = currentTime < startTime;

                    return (
                        <section key={index} className="self-stretch rounded-3xs bg-darkslategray-200 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-start pt-[19px] pb-[17px] pr-[37px] pl-9 box-border gap-[10px] max-w-full z-[1] text-left text-lg text-firebrick font-roboto" style={{ marginBottom: '20px' }}>
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
                            <div className="ml-4 text-sm text-white">
                                <p>Start Time: {session.live_session_starttime}</p>
                                <p>End Time: {session.live_session_endtime}</p>
                            </div>
                            <div>
                                {
                                    !isButtonDisabled ? (
                                        <LiveSessionFrameWithGraph content={'Watch Live'} handleNavigation={() => handleWatchSession(session.youtube_live_link,session.id)} />
                                    ) : ''
                                }
                            </div>
                        </section>
                    );
                })
            )}
        </div>
    )
}

export default LiveSession;
