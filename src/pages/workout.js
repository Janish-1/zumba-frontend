import { useState } from 'react';
// import YouTube from 'react-youtube';
import FrameComponent4 from "../components/frameComponent4";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import YouTube from '@u-wave/react-youtube';

const Workout = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.category.blogs);
  const allBlogs=useSelector((state)=>state.category.allBlogs);
  const base = "http://13.201.135.248:8000";
  // const [showPlayer, setShowPlayer] = useState(false); // State to toggle showing the player
  const [player, setPlayer] = useState(null); // State to hold the YouTube player
  const [playTime, setPlayTime] = useState(0); // State to hold the play time
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing
  const [startTime, setStartTime] = useState(0); // State to hold the start time of the video
  
// Find the blog with the given id
let blog = null;
if (blogs.length > 0) {
  blog = blogs.find((blog) => blog.id == id);
} else {
  blog = allBlogs.find((blog) => blog.id == id);
}
  console.log("blogs id", id);
  console.log("blog", blog);

  const onReady = (event) => {
    setPlayer(event.target);
    
};

const onPlay = () => {
    setIsPlaying(true);
    setStartTime(player.getCurrentTime()); // Set the start time when the video starts playing
};

const onPause = () => {
    setIsPlaying(false);
    const currentTime = player.getCurrentTime();
    const elapsedTime = currentTime - startTime; // Calculate the elapsed time
    setPlayTime(playTime + elapsedTime); // Update the total play time
};

const onProgress = (event) => {
    if (isPlaying) {
        setPlayTime(event.seconds); // Update play time if the video is still playing
    }
};

const startWorkout = () => {
    if (player) {
        player.playVideo(); // Play the video when starting the workout
    }
};

const pauseWorkout = () => {
    if (player) {
        player.pauseVideo(); // Pause the video when pausing the workout
    }
};


  return (
    <div className="h-screen bg-gray-300">
      <div className="w-full relative bg-gray-300 overflow-hidden flex flex-col items-end justify-start pt-10 px-0 pb-16 box-border gap-16">
        <header className="self-stretch flex flex-row items-start justify-start py-0 px-5 text-left text-base text-white font-poppins">
          <div className="w-32 flex flex-row items-start justify-between">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-6"
              loading="eager"
              alt=""
              src="/back.svg"
            />
            <div className="relative leading-6 font-medium">Workout</div>
          </div>
        </header>
        <section className="w-full md:w-96 flex flex-col items-center justify-start pt-0 pb-16 px-3 box-border gap-4">
            <div className="w-full md:w-80 h-0 pb-[56.25%] relative">
            <div>
            <YouTube
                video={getYouTubeVideoId(blog?.video_link)}
                autoplay={false} // Autoplay is set to false initially
                controls={false} // Show YouTube player controls
                onReady={onReady}
                onPlaying={onPlay}
                showCaptions={false}
                onPause={onPause}
                    width='100%'
                  height='100%'
                onProgress={onProgress}
                modestBranding={false}
                style={{ pointerEvents: 'none' }} // Inline style to disable pointer events
                allowFullscreen={true}
                showRelatedVideos={false}
            />
            </div>
          
            </div>
          
          <FrameComponent4 blog={blog} />
        </section>
        {/* <div>Play Time: {playTime}</div> */}
        <footer className="fixed bottom-0 left-0 w-full py-4 px-2">
          <div className="container mx-auto flex items-center justify-center">
             {!isPlaying
             ?
             ( <button className="cursor-pointer bg-firebrick text-white py-3 px-6 rounded-full text-lg font-semibold" onClick={startWorkout}>
                Let's Start
              </button>)
              :
              (<button className="cursor-pointer bg-firebrick text-white py-3 px-6 rounded-full text-lg font-semibold" onClick={pauseWorkout}>
                paused
              </button>)}
          </div>
        </footer>
      </div>
    </div>
  );
};

// Function to extract the YouTube video ID from the link
const getYouTubeVideoId = (link) => {
  const videoId = link.split('v=')[1];
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    return videoId.substring(0, ampersandPosition);
  }
  return videoId;
};

export default Workout;
