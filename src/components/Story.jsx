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
        <div id="about" className="min-h-dvh w-screen bg-black text-blue-50">
            <div className="flex size-full flex-col items-center py-10 pb-24">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    the creative journey
                </p>

                <div className="relative size-full">
                    <AnimatedTitle
                        title="th<b>o</b>unny's<br /> path of design"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />

                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                    ref={frameRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    src="/img/FW_Sticker_16 copy.png"
                                    alt="creative-journey"
                                    className="object-contain h-[25vh] md:h-[30vh] lg:h-[30vh]" // Responsive height for the sticker
                                />
                            </div>
                        </div>

                        {/* for the rounded corner */}
                        <svg
                            className="invisible absolute size-0"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <filter id="flt_tag">
                                    <feGaussianBlur
                                        in="SourceGraphic"
                                        stdDeviation="8"
                                        result="blur"
                                    />
                                    <feColorMatrix
                                        in="blur"
                                        mode="matrix"
                                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                        result="flt_tag"
                                    />
                                    <feComposite
                                        in="SourceGraphic"
                                        in2="flt_tag"
                                        operator="atop"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>

                <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                            Explore my evolution as a creative developer and designer.
                            Uncover the projects, passion, and innovations that define
                            my digital journey.
                        </p>

                        <Button
                            id="skills-btn"
                            title="explore skills"
                            containerClass="mt-5"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FloatingImage;
