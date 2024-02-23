import AccountInfoFrame from "../components/account-info-frame";

const SignUpPage = () => {
  return (
    <div className="w-full relative  bg-gray-200 overflow-hidden flex flex-col items-center justify-end pt-[311px] pb-[77px] pr-[13px] pl-3 box-border text-justify text-23xl text-firebrick font-arvo">
      <div className="w-[403px] h-[674px] my-0 mx-[!important] absolute top-[129px] left-[12px] flex flex-row items-start justify-start py-[58px] px-2 box-border">
        <div className="h-[30%] w-[61%] absolute my-0 mx-[!important] top-[-135px] left-[-50px] z-[2] flex items-center justify-center">
          <img
            className="h-full w-full z-[2] object-contain absolute left-[0px] top-[0px] [transform:scale(1.204)]"
            alt=""
            src="/red-black-minimalist-fitness-logo--2-1@2x.png"
          />
        </div>
        <div className="h-[calc(100%_-_0.1px)] w-[calc(100%_+_0.1px)] absolute my-0 mx-[!important] top-[0px] right-[-0.1px] bottom-[0.1px] left-[0px] flex items-center justify-center z-[0]">
          <img
            className="h-full w-full max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.035)]"
            alt=""
            src="/dumble-icons.svg"
          />
        </div>
        <h1 className="m-0 h-[104px] w-[251px] relative text-inherit font-bold font-inherit flex items-end shrink-0 z-[1]">
          Shape Your Muscles
        </h1>

      </div>
      <AccountInfoFrame />
    </div>
  );
};

export default SignUpPage;
