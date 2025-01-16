import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "./Button";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const navItems = ["Home", "About", "Portfolio", "Skills", "Contact"];

const NavBar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const audioElementRef = useRef(null);
    const navContainerRef = useRef(null);

    const { y: currentScrollY } = useWindowScroll();
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        if (isAudioPlaying) {
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying]);

    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove("floating-nav");
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current.classList.add("floating-nav");
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current.classList.add("floating-nav");
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        });
    }, [isNavVisible]);

    // Smooth scroll handler
    const handleSmoothScroll = (id) => {
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: `#${id}`, offsetY: 50 }, // Adjust `offsetY` to account for the navbar height
            ease: "power2.inOut",
        });
        setIsMobileMenuOpen(false); // Close mobile menu after clicking
    };

    return (
        <div
            ref={navContainerRef}
            className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
        >
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex items-center justify-between p-4">
                    {/* Logo and Service button */}
                    <div className="flex items-center gap-7">
                        <img src="/img/logo.png" alt="logo" className="w-10" />

                        <Button
                            id="services-button"
                            title="Services"
                            rightIcon={<TiLocationArrow />}
                            containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                            url="https://www.linkedin.com/in/thounny/"
                        />
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-5">
                        {navItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleSmoothScroll(item.toLowerCase())}
                                className="nav-hover-btn"
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={toggleAudioIndicator}
                            className="ml-5 flex items-center space-x-0.5"
                        >
                            <audio
                                ref={audioElementRef}
                                className="hidden"
                                src="/audio/Tazumi_Toyoshima.mp3"
                                loop
                            />
                            {[1, 2, 3, 4].map((bar) => (
                                <div
                                    key={bar}
                                    className={clsx("indicator-line", {
                                        active: isIndicatorActive,
                                    })}
                                    style={{
                                        animationDelay: `${bar * 0.1}s`,
                                    }}
                                />
                            ))}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMobileMenu} className="text-white text-2xl">
                            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-16 inset-x-0 bg-black text-white py-4 z-40 shadow-lg md:hidden">
                        <ul className="flex flex-col items-center gap-4">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => handleSmoothScroll(item.toLowerCase())}
                                        className="nav-hover-btn text-lg"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </header>
        </div>
    );
};

export default NavBar;
