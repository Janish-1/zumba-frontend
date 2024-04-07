import NotifyFrames from "../components/notify-frames";
import Notify1 from "../components/notify1";
import Notify from "../components/notify";
import NotificationBellFrame from "../components/notification-bell-frame";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Notification1 = () => {
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start pt-[17px] px-0 pb-[100px] box-border gap-[30px]">
      <header className="self-stretch flex flex-row items-center justify-between pt-0 px-[18px] pb-[9px] text-left text-9xl text-firebrick font-roboto">
        <div className="flex flex-col items-start justify-start pt-1 pb-0  pl-0">
        <Link to='/'>
        <img
            className="w-[100%] h-[34px] relative overflow-hidden shrink-0 object-contain"
            loading="eager"
            alt=""
            src="/right.svg"
          />
        </Link>
          
        </div>
        <div className="flex flex-col items-start justify-center  px-0 pb-0">
          <h3 className="m-0 relative text-6xl font-extrabold  inline-block">
            Notifications
          </h3>
        </div>
        <div>

        <Link to='/profile-main'>
        <img
          className="h-[40.1px] w-[40px] relative object-cover"
          loading="eager"
          alt=""
          src="/profile@2x.png"
        />
        </Link>
        </div>
      
      </header>
      <section className="self-stretch flex flex-col items-start justify-start py-0 px-3 gap-[18px]">
        <button className="cursor-pointer [border:none] pt-4 pb-[19px] pr-[21px] pl-[18px] bg-[transparent] self-stretch rounded-xl flex flex-col items-end justify-start gap-[169px] bg-cover bg-no-repeat bg-[top]">
          <div className="self-stretch flex flex-row items-start justify-start">
          <img
            className="w-6 h-6 relative overflow-hidden pr-2 shrink-0 z-[1]"
            alt=""
            src="/cildiamond.svg"
          />
            <div className="w-[100%] relative text-mini font-roboto text-gray-100 text-left inline-block shrink-0 z-[1]">
              Subscribe To Unlock New Features and Get a Free Gym Kit
            </div>
          </div>

        </button>
        <NotifyFrames />
        <NotifyFrames />
        <NotifyFrames />
        {/* <Notify1 />
        <Notify />
        <Notify1 />
        <Notify /> */}
      </section>
      {/* <NotificationBellFrame /> */}
      <Footer/>
    </div>
  );
};

export default Notification1;
