import YouTube from '@u-wave/react-youtube';
import { useState } from 'react';

const VideoApp = () => {
    const [player, setPlayer] = useState(null); // State to hold the YouTube player
    const [playTime, setPlayTime] = useState(0); // State to hold the play time
    const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing
    const [startTime, setStartTime] = useState(0); // State to hold the start time of the video

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
        <div>
            <YouTube
                video={getYouTubeVideoId('https://www.youtube.com/watch?v=FlBUw7UzIjw')}
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
            <div>Play Time: {playTime}</div>
            <button onClick={startWorkout}>Start Workout</button>
            <button onClick={pauseWorkout}>Pause Workout</button>
            <div>{isPlaying ? 'Video is playing' : 'Video is paused'}</div>
        </div>
    );
};

export default VideoApp;

// Function to extract the YouTube video ID from the link
const getYouTubeVideoId = (link) => {
    const videoId = link.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        return videoId.substring(0, ampersandPosition);
    }
    return videoId;
};
