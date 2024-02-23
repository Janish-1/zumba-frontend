import Footer from "../components/Footer";
import LuckyFrameRoot from "../components/Luckyframe";

const Luckydraw = () => {
  return (
    <>
      <div className="w-full min-h-screen relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start pt-5  px-2 md:px-0 pb-[110px] box-border gap-5">
        <LuckyFrameRoot />
      <Footer />
      </div>
    </>


  );
};

export default Luckydraw;
