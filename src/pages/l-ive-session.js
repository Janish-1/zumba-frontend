import Footer from "../components/Footer";
import FrameRoot from "../components/frame-root";
import LiveSessionFrameWithGraph from "../components/live-session-frame-with-graph";

const LIveSession = () => {
  return (
    <>
      <div className="w-full min-h-screen relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start pt-5  px-2 md:px-0 pb-[110px] box-border gap-5">
        <FrameRoot />
        {/* <LiveSessionFrameWithGraph /> */}
      <Footer />
      </div>
    </>


  );
};

export default LIveSession;
