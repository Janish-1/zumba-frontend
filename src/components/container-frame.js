import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser } from '../redux/actions/userActions';
const ContainerFrame = () => {
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.user.user);
  console.log("user details",user);
  useEffect(()=>{
    const id=localStorage.getItem('userId')
    console.log("userId ",id)
    dispatch(fetchUser(id))
  },[dispatch])
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-2 pb-[22px] pr-[21px] pl-2 box-border max-w-full text-left text-lg text-gray-100 font-rubik">
      <div className="flex-1 flex flex-col items-end justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[27px] text-xl font-roboto">
          <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[153px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
              <Link to="/profile-main"> {/* Wrap image inside Link */}
                <img
                  className="h-[48.1px] w-[48px] rounded-full relative object-cover cursor-pointer"
                  loading="eager"
                  alt=""
                  src="/male-avatar.jpg"
                />
              </Link>
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className=" relative text-mini font-medium inline-block">
                 HI, {user?.username}
                </div>
                <div className="h-[29px] text-mini relative  font-extrabold text-firebrick inline-block">
                  STUDY HARD
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[13px]">
          {/* <Link to='/luckydraw'>
          <img
              className="h-[35px] w-[35px] relative object-cover"
              loading="eager"
              alt=""
              src="/fortunewheel-1@2x.png"
            />
          </Link> */}
          {/* <Link to='/live-session'>
          <img
              className="h-[30px] w-[30px] relative object-contain"
              loading="eager"
              alt=""
              src="/diamond-1@2x.png"
            />
          </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerFrame;
