import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
    const frameRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const xPos = clientX - rect.left;
        const yPos = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((yPos - centerY) / centerY) * -20;
        const rotateY = ((xPos - centerX) / centerX) * 20;

        gsap.to(element, {
            duration: 0.1,
            rotateX,
            rotateY,
            transformPerspective: 700,
            ease: "power1.inOut",
        });
    };

    const handleMouseLeave = () => {
        const element = frameRef.current;

        if (element) {
            gsap.to(element, {
                duration: 0.3,
                rotateX: 0,
                rotateY: 0,
                ease: "power1.inOut",
            });
        }
    };

    return (
        <div
            id="skills"
            className="min-h-screen w-screen bg-black text-blue-50 flex flex-col items-center px-5 md:px-10"
        >
            <p className="font-helvetica-neue text-xs uppercase mt-10 md:mt-16 md:text-sm">
                the creative journey
            </p>

            <div className="relative w-full mt-5 md:mt-10 text-center">
                <AnimatedTitle
                    title="th<b>o</b>unny's<br /> path of design"
                    containerClass="pointer-events-none mix-blend-difference relative z-10 text-4xl md:text-5xl font-black leading-tight"
                />

                <p className="mt-4 text-sm text-white-400 max-w-xs mx-auto md:mt-6 md:text-base md:max-w-md font-helvetica-neue">
                    Explore my evolution as a <b>creative developer</b> and <b>designer</b>.
                    Uncover the <b>projects</b>, <b>passion</b>, and <b>innovations</b> that define my
                    digital journey.
                </p>

            </div>

            <div className="relative mt-10 md:mt-16 flex justify-center">
                <video
                    ref={frameRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    src="/videos/last.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-contain w-[90%] h-[200px] md:w-[70%] md:h-[300px] lg:w-[60%] lg:h-[600px]"
                />
            </div>

            <div className="mt-10 md:mt-16">
                <Button
                    id="skills-btn"
                    title="explore skills"
                    containerClass="cursor-pointer px-6 py-2 text-sm md:text-base"
                    url="https://thounny.github.io/30-day-code-challenge/"
                />
            </div>
        </div>
    );
};

export default FloatingImage;
