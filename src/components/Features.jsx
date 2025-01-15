/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();

        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle("");
    };

    return (
        <div
            ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoverOpacity, setHoverOpacity] = useState(0);
    const hoverButtonRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!hoverButtonRef.current) return;
        const rect = hoverButtonRef.current.getBoundingClientRect();

        setCursorPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    const handleMouseEnter = () => setHoverOpacity(1);
    const handleMouseLeave = () => setHoverOpacity(0);

    return (
        <div className="relative size-full">
            <img
                src={src}
                alt={title}
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                    )}
                </div>

                {isComingSoon && (
                    <div
                        ref={hoverButtonRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
                    >
                        {/* Radial gradient hover effect */}
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                            style={{
                                opacity: hoverOpacity,
                                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                            }}
                        />
                        <TiLocationArrow className="relative z-20" />
                        <p className="relative z-20">coming soon</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const Features = () => (
    <section className="bg-black pb-52">
        <div className="container mx-auto px-3 md:px-10">
            <div className="px-5 py-32">
                <p className="font-circular-web text-lg text-blue-50">
                    Featured Projects
                </p>
                <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                    Explore my journey as a creative developer and designer, showcasing projects that merge innovation, interactivity, and design.
                </p>
            </div>

            <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                <BentoCard
                    src="videos/project-1.gif"
                    title={
                        <>
                            Shad<b>98</b>
                        </>
                    }
                    description="A Windows 98-inspired component library, showcasing draggable functionality and retro design."
                    isComingSoon
                />
            </BentoTilt>

            <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
                <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                    <BentoCard
                        src="videos/project-3.gif"
                        title={
                            <>
                                Log<b>98</b>
                            </>
                        }
                        description="An iOS journal app inspired by Windows 98 aesthetics, offering a customizable retro experience."
                        isComingSoon
                    />
                </BentoTilt>

                <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                    <BentoCard
                        src="videos/project-4.gif"
                        title={
                            <>
                                RAW<b>SCAPE</b>
                            </>
                        }
                        description="An immersive digital experience blending brutalist design and modern web technologies."
                        isComingSoon
                    />
                </BentoTilt>

                <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                    <BentoCard
                        src="videos/project-5.gif"
                        title={
                            <>
                                Mira<b>Gen</b>
                            </>
                        }
                        description="A PC-98-inspired horror game exploring themes of guilt, memory, and morality."
                        isComingSoon
                    />
                </BentoTilt>

                <BentoTilt className="border-hsla relative mb-7 h-96 md:h-[50vh] w-full col-span-2 overflow-hidden rounded-none">
                    <BentoCard
                        src="videos/project-2.gif"
                        title={
                            <>
                                Wired<b>AI</b>
                            </>
                        }
                        description="An AI-powered chatbot application that leverages React, Appwrite, and TailwindCSS for seamless user interactions and futuristic design."
                        isComingSoon
                    />
                </BentoTilt>





            </div>
        </div>
    </section>
);

export default Features;
