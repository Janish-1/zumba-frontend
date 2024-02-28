import ContainerFrame from "../components/container-frame";
import FrameComponent from "../components/frame-component11";
import DateFrame from "../components/date-frame";
import Footer from "../components/Footer";
import LiveCom from "../components/liveCom";

const HomePage = () => {
  return (
    <div className="w-full  relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start pt-[17px] px-0 pb-[100px] box-border gap-[38px] tracking-[normal]">
      <ContainerFrame />
      <FrameComponent />
      <DateFrame />
      <LiveCom/>
      <Footer/>
    </div>
  );
};

export default HomePage;
