import React from "react";

const LiveSessionFrameWithGraph = ({ content, handleNavigation }) => {

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <div className="flex-grow" /> 
      <button
        className="bg-firebrick w-[274px] text-white py-2 px-4 text-xl rounded-2xl"
        onClick={handleNavigation} 
      >
        {content}
      </button>
    </section>
  );
};

export default LiveSessionFrameWithGraph;
