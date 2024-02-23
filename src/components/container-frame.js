import { Link } from 'react-router-dom';

const ContainerFrame = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-2 pb-[22px] pr-[21px] pl-8 box-border max-w-full text-left text-lg text-gray-100 font-rubik">
      <div className="flex-1 flex flex-col items-end justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[27px] text-xl font-roboto">
          <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[153px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
              <Link to="/profile-main"> {/* Wrap image inside Link */}
                <img
                  className="h-[56.1px] w-[54px] relative object-cover cursor-pointer"
                  loading="eager"
                  alt=""
                  src="/profile1@2x.png"
                />
              </Link>
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className=" relative font-medium inline-block">
                  HI, WASIF
                </div>
                <div className="h-[29px] relative text-3xl font-extrabold text-firebrick inline-block">
                  GET IN SHAPE
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[13px]">
          <Link to='/luckydraw'>
          <img
              className="h-[40px] w-[40px] relative object-cover"
              loading="eager"
              alt=""
              src="/fortunewheel-1@2x.png"
            />
          </Link>
            <img
              className="h-[40px] w-[40px] relative object-contain"
              loading="eager"
              alt=""
              src="/diamond-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerFrame;
