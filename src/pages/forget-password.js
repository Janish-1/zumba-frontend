import Login from "../components/login";

const ForgetPassword = () => {
  return (
    <div className="w-full h-screen relative bg-gray-200 overflow-hidden flex flex-col items-center justify-end pt-[129px] pb-[92px] pr-[13px] pl-3 box-border">
      <main className="self-stretch h-[711px] relative">
        <section className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start">
          <div className="h-[673.9px] flex-1 relative flex items-center justify-center z-[0]">
            <img
              className="h-full flex-1 max-w-full overflow-hidden object-contain absolute left-[0px] top-[0px] w-full [transform:scale(1.035)]"
              alt=""
              src="/dumble-icons.svg"
            />
          </div>
          <div className="h-[266px] w-[266px] absolute my-0 mx-[!important] top-[-54px] left-[61px]">
            <div className="absolute top-[0px] left-[0px] w-[266px] h-[266px] z-[1] flex items-center justify-center">
              <img
                className="w-full h-full z-[1] object-contain absolute left-[0px] top-[0px] [transform:scale(1.188)]"
                alt=""
                src="/lock.svg"
              />
            </div>
            <img
              className="absolute top-[30px] left-[61px] w-[162px] h-[184px] z-[2]"
              loading="eager"
              alt=""
              src="/vector2.svg"
            />
          </div>
        </section>
        <Login />
      </main>
    </div>
  );
};

export default ForgetPassword;
