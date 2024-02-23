import { useCallback } from "react";
import FreeText from "../components/free-text";
import PremiumFeaturesFrame from "../components/premium-features-frame";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Premium = () => {
  const navigate = useNavigate();

  const onNotificationBellIconClick = useCallback(() => {
    navigate("/notification");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start pt-[79px] px-0 pb-0 box-border gap-[32px]">
     
      <main className="self-stretch flex flex-row items-start justify-start pt-0 pb-3 pr-[25px] pl-[18px]">
        <section className="flex-1 rounded-16xl bg-darkslategray-200 flex flex-col items-start justify-start py-[30px] px-0 gap-[30px] text-center text-xl text-small-text font-poppins">
          <FreeText free="Premium" notificationBell="$25" />
          <PremiumFeaturesFrame />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] text-7xl text-gray-100">
            <div className="flex-1 rounded-sm bg-firebrick flex flex-row items-center justify-center z-[1]">
              <div className="self-stretch w-[327px] relative rounded-sm bg-firebrick hidden" />
              <b className="h-[55px] flex-1 relative tracking-[0.05em] leading-[118.5%] flex items-center justify-center z-[1]">{`Buy now `}</b>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Premium;
