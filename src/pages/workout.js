import { useState } from 'react';
import FrameComponent4 from "../components/frameComponent4";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import YouTube from '@u-wave/react-youtube';

const Workout = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.category.blogs);
  const allBlogs = useSelector((state) => state.category.allBlogs);
  const [player, setPlayer] = useState(null); 
  const [playTime, setPlayTime] = useState(0); 
  const [isPlaying, setIsPlaying] = useState(false); 
  const [startTime, setStartTime] = useState(0); 

  let blog = null;
  if (blogs.length > 0) {
    blog = blogs.find((blog) => blog.id == id);
  } else {
    blog = allBlogs.find((blog) => blog.id == id);
  }

  const onReady = (event) => {
    setPlayer(event.target); 
  };

  const onPlay = () => {
    setIsPlaying(true);
    setStartTime(player.getCurrentTime());
  };

  const onPause = () => {
    setIsPlaying(false);
    const currentTime = player.getCurrentTime();
    const elapsedTime = currentTime - startTime;
    setPlayTime(playTime + elapsedTime);
  };

  const onProgress = (event) => {
    if (isPlaying) {
      setPlayTime(event.seconds);
    }
  };

  const startWorkout = () => {
    if (player) {
      player.playVideo();
    }
  };

  const pauseWorkout = () => {
    if (player) {
      player.pauseVideo();
    }
  };

  return (
    <div className="h-screen bg-gray-300">
      <div className="w-full relative bg-gray-300 overflow-hidden flex flex-col items-end justify-start pt-10 px-0 pb-16 box-border gap-16">
        <header className="self-stretch flex flex-row items-start justify-start py-0 px-5 text-left text-base text-white font-poppins">
          <div className="w-32 flex flex-row items-start justify-between">
            <Link to='/allworkouts'>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-6"
                loading="eager"
                alt=""
                src="/back.svg"
              />
            </Link>
            <div className="relative leading-6 text-firebrick text-xl font-medium">Workout</div>
          </div>
        </header>
        <section className="w-full md:w-96 flex flex-col items-center justify-start  pb-16 px-3 box-border gap-4">
          <div className="w-full md:w-80 h-96 relative">
            <YouTube
              video={getYouTubeVideoId(blog?.video_link)}
              autoplay={false}
              controls={true}
              onReady={onReady}
              onPlaying={onPlay}
              showCaptions={false}
              onPause={onPause}
              width='100%'
              height='100%'
              onProgress={onProgress}
              modestBranding={false}
              allowFullscreen={true}
              showRelatedVideos={false}
            />
          </div>
          <FrameComponent4 blog={blog} />
        </section>
        <footer className="fixed bottom-0 left-0 w-full py-4 px-2">
          <div className="container mx-auto flex items-center justify-center">
            {!isPlaying
              ?
              (<button className="cursor-pointer bg-firebrick text-white py-3 px-6 rounded-full text-lg font-semibold" onClick={startWorkout}>
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

const getYouTubeVideoId = (link) => {
  const videoId = link?.split('/').pop()?.split('?')[0];
  const ampersandPosition = videoId?.indexOf('&');
  if (ampersandPosition !== -1) {
    return videoId?.substring(0, ampersandPosition);
  }
  return videoId;
};

export default Workout;

