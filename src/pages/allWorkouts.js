import PopularWorkoutsFrame from "../components/popular-workouts-frame";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"; // Import useState
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlog } from "../redux/actions/blogCategoryActions";
import { fetchUser } from '../redux/actions/userActions';

const getGreeting = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "Good Morning 🔥";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good Afternoon 🔥";
  } else if (currentHour >= 18 && currentHour < 22) {
    return "Good Evening 🔥";
  } else {
    return "Good Night 🔥";
  }
};
const AllWorkouts = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.category.allBlogs);
  const user = useSelector((state) => state.user.user);

console.log("all blogs",blogs)
  // State for the search query
  const [searchQuery, setSearchQuery] = useState("");
  // State for the filtered blogs
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [greeting, setGreeting] = useState(getGreeting()); // Initialize greeting state

  useEffect(() => {
    // Update greeting message every minute to reflect the time change
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000); // 60000 milliseconds = 1 minute

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    dispatch(fetchAllBlog());
    const id = localStorage.getItem("userId");
    dispatch(fetchUser(id))
  }, [dispatch]);

  // Update filteredBlogs whenever blogs or searchQuery changes
  useEffect(() => {
    // Filter blogs based on the search query
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBlogs(filtered);
  }, [blogs, searchQuery]);

  return (
    <div className="bg-gray-200">
      <div className="w-full   relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start pt-[30px] px-0 pb-[80px] box-border gap-[16px] text-left text-sm text-white font-lato">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-[7px]">
          <div className="flex flex-col items-start justify-start gap-[3px]">
            <div className="relative font-semibold">{greeting}</div>
            <h1 className="m-0 relative text-5xl font-extrabold font-inherit text-firebrick">
            {user?.username}
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

export default AllWorkouts;
