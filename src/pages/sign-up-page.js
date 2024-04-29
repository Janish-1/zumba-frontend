import AccountInfoFrame from "../components/account-info-frame";

const SignUpPage = () => {
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-center justify-end pt-[311px] pb-[77px] pr-[13px] pl-3 box-border text-justify text-23xl text-firebrick font-arvo">
      <div className="w-[403px] h-[674px] my-0 mx-[!important] absolute top-[129px] left-[12px] flex flex-row items-start justify-start py-[58px] px-2 box-border">
        <div className="h-[30%] w-[61%] absolute my-0 mx-[!important] top-[-135px] left-[30px] z-[2] flex items-center justify-center">
          <img
            className="h-full w-full z-[2] object-contain absolute left-70 top-0 transform scale-[1vw] min-w-0 min-h-0"
            alt="Fitness Logo"
            src="/red-black-minimalist-fitness-logo--2-1@2x.png"
          />
        </div>
        <h1 className="m-0 h-[104px] w-[251px] relative text-inherit font-bold font-inherit flex items-end shrink-0 z-[1]">
          Grow your Brain
        </h1>

      </div>
      <AccountInfoFrame />
    </div>
  );
};

export default SignUpPage;
