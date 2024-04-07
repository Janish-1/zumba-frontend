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
    <section className="self-stretch flex flex-col items-end justify-start py-0 px-3 box-border gap-[33px] max-w-full text-left text-6xl text-firebrick font-roboto">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[12px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[167px]">
            <h3 className="m-0 self-stretch relative text-inherit font-extrabold font-inherit">
              Popular Exercises
            </h3>
          </div>
        </div>
      </div>
      <FrameComponent state={state}/>
    </section>
  );
};

export default DateFrame;
