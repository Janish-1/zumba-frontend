import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PopularWorkoutsFrame = ({ blogs }) => {
  console.log("blogs",blogs);
  const navigate = useNavigate();
  const base = "http://zumba.ramo.co.in"
  const onWorkout1ContainerClick = useCallback((id) => {
    navigate(`/workout/${id}`);
  }, [navigate]);

  return (
    <>
      <section className="self-stretch flex flex-row items-start justify-start pb-2 py-0 pr-0 mx-3  text-left text-lg text-white font-lato">
        <div className="w-[100%] flex flex-row items-start justify-start gap-[20px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[182px]">
            {blogs.map((blog, index) => {
              const timeDuration = "00:12:35"; // Example time duration

              // Split the time duration into hours, minutes, and seconds
              const [hours, minutes, seconds] = blog.time_duration.split(":");

              // Convert hours, minutes, and seconds to numbers
              const hoursNum = hours ? parseInt(hours) : 0;
              const minutesNum = minutes ? parseInt(minutes) : 0;
              const secondsNum = seconds ? parseInt(seconds) : 0;

              let displayDuration = ""; // Variable to hold the display format

              // If there are hours, include them in the display
              if (hoursNum > 0) {
                displayDuration += hoursNum.toString() + "h ";
              }

              // Include minutes and seconds in the display
              if (minutesNum > 0) {
                displayDuration += minutesNum.toString() + "m ";
              }
              if (secondsNum > 0) {
                displayDuration += secondsNum.toString() + "s";
              }

              console.log("Display Duration:", displayDuration); // Output the display format
              const roundedCalories = Math.round(blog.calories_burn);


              return (
                <div
                  key={index}
                  className="self-stretch h-[174px] flex flex-row items-center justify-between py-0 pr-0 pl-0 box-border relative cursor-pointer"
                  onClick={()=>onWorkout1ContainerClick(blog.id)}
                >
                  <div className="h-full w-full absolute my-0  top-[0px] right-[0px] bottom-[0px] left-[0px] cursor-pointer rounded-4xl ">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover rounded-4xl"
                      alt=""
                      src={`${base}/${blog.blog_photo}`}
                    />
                    <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-4xl [background:linear-gradient(91.78deg,_rgba(0,_0,_0,_0.51),_rgba(0,_0,_0,_0))] z-[1]" />
                  </div>
                  <nav className="m-0 self-stretch w-[157px] rounded-tl-4xl rounded-tr-none rounded-br-none rounded-bl-4xl [background:linear-gradient(90.29deg,_#353535,_rgba(75,_75,_75,_0))] flex flex-col items-center justify-center py-5 px-0 box-border gap-[12px] z-[2] text-left text-5xl text-white font-lato overflow-hidden">
                    <div className="w-[147px] h-[174px] relative rounded-tl-4xl rounded-tr-none rounded-br-none rounded-bl-4xl [background:linear-gradient(90.29deg,_#353535,_rgba(75,_75,_75,_0))] hidden" />
                    <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit z-[3] text-center">
                      <p className="m-0">{blog.title}</p>
                      <p className="m-0">{blog.subtitle}</p>
                    </h1>
                    <div className="flex flex-row items-start justify-start py-0 pr-[57px] pl-5">
                      <button className="cursor-pointer [border:none] py-1 pr-1.5 pl-2 bg-gray-500 rounded-4xs flex flex-row items-center justify-start gap-[4px] z-[3]">
                        <img
                          className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                          alt=""
                          src="/box-11.svg"
                        />
                        <div className="relative text-xs leading-[18px] font-lato text-gray-300 text-left">
                          {roundedCalories} Kcal
                        </div>
                      </button>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                      <button className="cursor-pointer [border:none] py-1 pr-1.5 pl-2 bg-gray-500 rounded-4xs flex flex-row items-center justify-start gap-[4px] z-[3]">
                        <img
                          className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                          alt=""
                          src="/ball-9.svg"
                        />
                        <div className="relative text-xs leading-[18px] font-lato text-gray-300 text-left">
                          {displayDuration}
                        </div>
                      </button>
                    </div>
                  </nav>
                  <img
                    className="h-[38px] w-[38px] pr-2 relative object-cover z-[2]"
                    loading="eager"
                    alt=""
                    src="/ic-play1@2x.png"
                  />
                </div>
              )
            }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularWorkoutsFrame;
