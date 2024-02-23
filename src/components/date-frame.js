import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./frame-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogCategories } from "../redux/actions/blogCategoryActions";
const DateFrame = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.category);
  console.log("category", state);

  const onViewAllButtonClick = useCallback(() => {
    navigate("/exercises");
  }, [navigate]);
  useEffect(() => {
    dispatch(fetchBlogCategories());
  }, [dispatch])
  return (
    <section className="self-stretch flex flex-col items-end justify-start py-0 px-3 box-border gap-[33px] max-w-full text-left text-9xl text-firebrick font-roboto">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[12px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[167px]">
            <h3 className="m-0 self-stretch relative text-inherit font-extrabold font-inherit">
              Popular Exercises
            </h3>
          </div>
          {/* <button className="cursor-pointer [border:none] py-0 pr-[13px] pl-0 bg-[transparent] w-[133px] flex flex-row items-center justify-start box-border">
            <div
              className="h-11 flex-1 relative rounded-6xl bg-darkslategray-200 cursor-pointer"
              // onClick={onViewAllButtonClick}
            />
            <div className="relative text-xl font-arvo text-white text-left z-[1] ml-[-100px]">
              View All
            </div>
          </button> */}
        </div>
      </div>
      <FrameComponent state={state}/>
    </section>
  );
};

export default DateFrame;
