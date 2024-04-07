import Login1 from "../components/login1";

const ForgetPassword1 = () => {
  return (
    <div className="w-full h-screen relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start pt-20 pb-[92px] pr-[13px] pl-3 box-border gap-[38px] tracking-[normal]">
      <section className="w-[323px] flex flex-row items-start justify-start py-0 pr-[37px] pl-5 box-border max-w-full">
        <div className="h-[266px] flex-1 relative">
          <div className="absolute top-[0px] left-[0px] w-full h-full z-[1] flex items-center justify-center">
            <img
              className="w-full h-full z-[1] object-contain absolute left-[0px] top-[0px] [transform:scale(1.188)]"
              alt=""
              src="/lock.svg"
            />
          </div>
          <img
            className="absolute top-[34px] left-[47px] w-[180px] h-[174px] z-[2]"
            loading="eager"
            alt=""
            src="/vector3.svg"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[673.9px] w-[100%] absolute my-0 mx-[!important] top-[-255px] left-[0px] flex items-center justify-center z-[0]">
          <img
            className="h-full w-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.035)]"
            alt=""
            src="/dumble-icons.svg"
          />
        </div>
        <Login1 />
      </section>
    </div>
  );
};

export default ForgetPassword1;
