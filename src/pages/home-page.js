import ContainerFrame from "../components/container-frame";
import FrameComponent from "../components/frame-component11";
import DateFrame from "../components/date-frame";
import Footer from "../components/Footer";
import LiveCom from "../components/liveCom";
import LatestLuckydraw from "../components/LatestLuckydraw";

const HomePage = () => {
  return (
    <div className="w-full  relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start pt-[17px] px-0 pb-[100px] box-border gap-[38px] tracking-[normal]">
      <ContainerFrame />
      <FrameComponent />
      <DateFrame />
      <section className="self-stretch flex flex-col items-end justify-start py-0 px-3 box-border gap-[33px] max-w-full text-left text-6xl text-firebrick font-roboto">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[12px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[167px]">
            <h3 className="m-0 self-stretch relative text-inherit font-extrabold font-inherit">
              Live Sessions
            </h3>
          </div>
        </div>
      </div>
      <LiveCom/>
      </section>
      <section className="self-stretch flex flex-col items-center justify-center py-0 px-3 box-border gap-[33px] max-w-full text-center text-6xl text-firebrick font-roboto">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[12px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[167px]">
            <h3 className="m-0 self-stretch relative text-inherit font-extrabold font-inherit">
              Last Luckydraw Status
            </h3>
          </div>
        </div>
      </div>
      <LatestLuckydraw/>
      </section>
      <Footer/>
    </div>
  );
};

export default HomePage;
