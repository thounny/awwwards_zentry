import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });
    });

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <p className="font-helvetica-neue text-sm uppercase md:text-[10px]">
                    Welcome to Tone&apos;s World
                </p>

                <AnimatedTitle
                    title="Designing for <b>Impact</b>, <br /> Developing with <b>Purpose</b>"
                    containerClass="mt-5 !text-black text-center"
                />

                <div className="about-subtext">
                    <p> I&apos;m Thounny Keo, a passionate Creative Developer and Designer.</p>
                    <p className="text-gray-500">
                        Currently a Frontend Developer student at Year Up United, I specialize in crafting modern digital experiences with a focus on interactivity, motion design, and accessibility.
                    </p>
                </div>
            </div>

            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <img
                        src="img/yurt.gif"
                        alt="Background"
                        className="absolute left-0 top-0 size-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;