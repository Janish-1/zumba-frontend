import PopularWorkoutsFrame from "../components/popular-workouts-frame";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"; // Import useState
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogCategoryById } from "../redux/actions/blogCategoryActions";

const Exercises = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.category.blogs);

  // State for the search query
  const [searchQuery, setSearchQuery] = useState("");
  // State for the filtered blogs
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    dispatch(fetchBlogCategoryById(id));
  }, [dispatch, id]);

  // Update filteredBlogs whenever blogs or searchQuery changes
  useEffect(() => {
    // Filter blogs based on the search query
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBlogs(filtered);
  }, [blogs, searchQuery]);

  return (
    <div className=" bg-gray-200">
      <div className="w-full   relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start pt-[30px] px-0 pb-3 box-border gap-[16px] text-left text-sm text-white font-lato">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-[7px]">
          <div className="flex flex-col items-start justify-start gap-[3px]">
            <div className="relative font-semibold">Good Morning 🔥</div>
            <h1 className="m-0 relative text-5xl font-extrabold font-inherit text-firebrick">
              Pramuditya Uzumaki
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-2">
          <div className="flex-1 rounded-xl bg-firebrick flex flex-row items-center justify-start p-3 gap-[10px]">
            <div className="h-12 w-[350px] relative rounded-xl bg-firebrick hidden" />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/ic-search.svg"
            />
            {/* Search input */}
            <input
              className="w-[100%] [border:none] [outline:none] font-lato text-sm bg-[transparent] h-[17px] relative text-white text-left inline-block z-[1]"
              placeholder="Search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 text-lg">
          <h3 className="m-0 relative text-inherit font-bold font-inherit">
            Popular Workouts
          </h3>
        </div>
        {/* Pass filteredBlogs to the PopularWorkoutsFrame component */}
        <PopularWorkoutsFrame blogs={filteredBlogs} />
        <Footer />
      </div>
    </div>
  );
};

export default Exercises;
