import HealthMessageContainer from "../components/health-message-container";

const StartPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-6 box-border gap-[9px]">
      <section className="self-stretch h-[565px] relative">
        <img
          className="absolute top-[0px] left-[0px] w-[396px] h-[565px] object-cover"
          loading="eager"
          alt=""
          src="/image@2x.png"
        />
        <div className="absolute top-[372px] left-[0px] [background:linear-gradient(180deg,_rgba(139,_90,_90,_0),_#fff)] w-[390px] h-[193px] z-[1]" />
      </section>
      <div className="w-[71px] h-3.5 absolute my-0 mx-[!important] bottom-[213px] left-[76px] bg-firebrick" />
      <HealthMessageContainer />
    </div>
  );
};

export default StartPage;
