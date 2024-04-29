import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (menu) => {
        if (menu !== 'plus') {
            setActiveMenu(menu);
            // You can navigate or perform other actions here
            if (menu === 'notification') {
                navigate("/profile-main");
            }
            if (menu === 'home') {
                navigate("/");
            }
            if (menu === 'food') {
                navigate("/allworkouts");
            }
            if (menu === 'graph') {
                navigate("/luckydraw");
            }
            // Add other menu navigation logic if needed
        } else {
            if (menu === 'plus') {
                navigate("/live-session");
            }
        }
    };

    return (
        <div className="fixed bottom-0 left-0 w-full z-50">
            <footer className="bg-darkslategray-200 flex items-center justify-between py-1 px-2">
                <div className={`flex items-center justify-center ${activeMenu === 'home' ? 'active' : ''}`} onClick={() => handleMenuClick('home')}>
                    <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                    >
                        <path fill={activeMenu === 'home' ? 'red' : 'white'} d="M21.853 12.353l-9-9c-.195-.195-.451-.293-.707-.293s-.512.098-.707.293l-9 9c-.391.391-.391 1.023 0 1.414s1.023.391 1.414 0l.293-.293v7.536c0 .551.448 1 1 1h6v-6c0-.265.105-.52.293-.707l.829-.829c.195-.195.451-.293.707-.293s.512.098.707.293l.829.829c.188.187.293.442.293.707v6h5c.552 0 1-.449 1-1v-7.536l.293.293c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414z"></path>
                    </svg>
                </div>
                <div className={`flex items-center justify-center ${activeMenu === 'food' ? 'active' : ''}`} onClick={() => handleMenuClick('food')}>
                    <img
                        className="w-8 h-8 overflow-hidden"
                        alt=""
                        src="/exercise-svgrepo-com.svg"
                    />
                </div>
                <button className="cursor-pointer relative p-0 bg-firebrick h-12 w-12 rounded-full" onClick={() => handleMenuClick('plus')}>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <img
                            className="w-6 h-6 overflow-hidden"
                            alt="dumbell"
                            src="/live.png"
                        />
                    </div>
                </button>
                {/* <div className={`flex items-center justify-center ${activeMenu === 'graph' ? 'active' : ''}`} onClick={() => handleMenuClick('graph')}>
                    <img
                        className="w-8 h-8"
                        alt="trophy"
                        src="/trophy.svg"
                        style={{ fill: activeMenu === 'graph' ? 'red' : 'white' }}
                    />
                </div>

                <div className={`flex items-center justify-center ${activeMenu === 'notification' ? 'active' : ''}`} onClick={() => handleMenuClick('notification')}>
                    <svg
                        className="w-6 h-6"
                        viewBox="0 0 23 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.5 12.5C19.8338 12.5 23.8572 16.4354 22.8473 23.7959C22.7527 24.4853 22.1511 25 21.4399 25H1.5601C0.84886 25 0.247335 24.4853 0.152728 23.7959C-0.857243 16.4354 3.16622 12.5 11.5 12.5ZM11.5 15.2778C5.30203 15.2778 2.61033 17.4579 2.85196 22.2222H20.148C20.3897 17.4579 17.698 15.2778 11.5 15.2778ZM11.5 0C14.6369 0 17.1799 2.48731 17.1799 5.55556C17.1799 8.6238 14.6369 11.1111 11.5 11.1111C8.36305 11.1111 5.82005 8.6238 5.82005 5.55556C5.82005 2.48731 8.36305 0 11.5 0ZM11.5 2.77778C9.93153 2.77778 8.66003 4.02143 8.66003 5.55556C8.66003 7.08968 9.93153 8.33333 11.5 8.33333C13.0685 8.33333 14.34 7.08968 14.34 5.55556C14.34 4.02143 13.0685 2.77778 11.5 2.77778Z"
                            fill={activeMenu === 'notification' ? 'red' : 'white'}
                        />
                    </svg>

                </div> */}
            </footer>
        </div>
    );
};

export default Footer;
