import { useRef, useState } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';

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
        setLoadedVideos((prev) => prev + 1); // Increment loaded videos count
    };

    // Calculate upcoming video index, looped within valid range
    const upcomingVideoIndex = currentIndex % totalVideos || totalVideos;

    // Handle clicking on mini video
    const handleMiniVideoClick = () => {
        setHasClicked(true); // Mark as clicked

        // Increment the video index and loop back to 1 after reaching the total
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalVideos || totalVideos);
    };

    // Helper function to get video source path
    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

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
                <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                    <div
                        onClick={handleMiniVideoClick}
                        className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                    >
                        {/* Upcoming video for mini player */}
                        <video
                            loop
                            ref={nextVideoRef}
                            src={getVideoSrc(upcomingVideoIndex)}
                            muted
                            id="current-video"
                            className="size-64 origin-center scale-150 object-cover object-center"
                            onLoadedData={handleVideoLoad}
                        />
                    </div>
                </div>

                {/* Main video player */}
                <video
                    src={getVideoSrc(currentIndex)}
                    ref={nextVideoRef}
                    muted
                    autoPlay
                    loop
                    id='next-video'
                    className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                    onLoadedData={handleVideoLoad}
                />
                <video
                    src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                    // autoPlay
                    loop
                    muted
                    className='absolute left-0 top-0 size-full object-cover object-center'
                    onLoadedData={handleVideoLoad}
                />

                <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>
                    <b>K</b>eo
                </h1>

                <div className='absolute left-0 top-0 z-40 size-full'>
                    <div className='mt-24 px-5 sm:px-10'>
                        <h1 className='special-font hero-heading text-blue-100'>
                            Tho<b>u</b>nny
                        </h1>

                        <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>
                            Enter Tone&apos;s World. <br /> Creative Developer & Designer
                        </p>
                        <Button
                            id="watch-trailer"
                            title="Watch Trailer"
                            leftIcon={<TiLocationArrow />}
                            containerClass="bg-yellow-300 flex-center gap-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
