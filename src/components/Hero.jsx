import { useRef, useState } from 'react';

const Hero = () => {
    // State hooks
    const [currentIndex, setCurrentIndex] = useState(1); // Current video index
    const [hasClicked, setHasClicked] = useState(false); // Track if mini video was clicked
    const [isLoading, setIsLoading] = useState(true); // Track loading state
    const [loadedVideos, setLoadedVideos] = useState(0); // Number of videos loaded

    // Constants and refs
    const totalVideos = 4; // Total number of videos
    const nextVideoRef = useRef(null); // Ref for next video element

    // Handle video loaded event
    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1); // Increment loaded videos
    }

    // 0 % 4 = 0 + 1 => 1
    // 1 % 4 = 1 + 1 => 2...
    // 4 % 4 = 0 + 1 => 1
    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    // Handle clicking on mini video
    const handleMiniVideoClick = () => {
        setHasClicked(true); // Mark as clicked

        // Increment the video index and loop back to 0 after reaching the total
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalVideos);
    };

    const getVideoSrc = (index) => {
        `videos/hero-${index}.mp4`;
    }

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            {/* Main Hero section */}
            <h1 className="absolute top-4 left-4 text-2xl font-bold text-white">Hero Section</h1>

            {/* Video frame container */}
            <div
                id="video-frame"
                className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
            >
                {/* Mini Video Player */}
                <div
                    className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg"
                >
                    <div
                        onClick={handleMiniVideoClick}
                        className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                        <video
                            loop
                            ref={nextVideoRef}
                            src={getVideoSrc(currentIndex + 1)}
                            muted
                            id="current-video"
                            className='size-64 origin-center scale-150 object-cover object-center'
                            onLoadedData={handleVideoLoad}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
