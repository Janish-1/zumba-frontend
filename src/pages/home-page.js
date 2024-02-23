import ContainerFrame from "../components/container-frame";
import FrameComponent from "../components/frame-component11";
import DateFrame from "../components/date-frame";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="w-full h-[100vh] relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start pt-[17px] px-0 pb-0 box-border gap-[38px] tracking-[normal]">
      <ContainerFrame />
      <FrameComponent />
      <DateFrame />
      <Footer/>
    </div>
  );
};

export default HomePage;
