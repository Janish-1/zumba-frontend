import React from 'react';
import BUTTONLOGIN from '../components/b-u-t-t-o-n-l-o-g-i-n'

const WelcomeScreen = () => {
  return (
    <>

      <div className="w-full bg-gray-200 h-[100vh] relative flex justify-center items-center overflow-x-hidden">
        {/* First div: Logo */}
        <div className=" absolute top-0 left-0">
          <img
            className="h-[120px] w-auto"
            alt=""
            src="/red-black-minimalist-fitness-logo--2-1@2x.png"
          />
        </div>

        {/* Second div: Main Content */}
        <div className="absolute inset-0 flex top-0 justify-center items-center overflow-x-hidden">
          <img
            className="max-h-[50vh] top-[94px] max-w-full object-cover z-10 absolute"
            alt=""
            src="/polygon-shape.svg"
          />
          <img
            className="max-h-[50vh]  top-[94px] max-w-full z-20 absolute"
            alt=""
            src="/unsplashqkqwdvrqqy8@2x.png"
          />
          <img
            className="max-h-[50vh]  top-[94px] max-w-full z-30 absolute"
            alt=""
            src="/unsplashqkqwdvrqqy8-1@2x.png"
          />
          <img
            className="max-h-[50vh]  top-[94px] max-w-full z-40 absolute"
            alt=""
            src="/dumble-icons.svg"
          />
        </div>

      </div>
     <div style={{ position: 'absolute', bottom: '0px', left: '0', right: '0', margin: 'auto', zIndex: '999' }}>
  <BUTTONLOGIN />
</div>



    </>
  );
};

export default WelcomeScreen;
