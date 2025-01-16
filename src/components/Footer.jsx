import { FaDiscord, FaGithubAlt, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
    { href: "https://discord.com/users/144265877754347520", icon: <FaDiscord /> },
    { href: "https://www.youtube.com/channel/UCTPSmsWGmrVXjVXD2DPXoUQ", icon: <FaYoutube /> },
    { href: "https://github.com/thounny", icon: <FaGithubAlt /> },
    { href: "https://www.linkedin.com/in/thounny/", icon: <FaLinkedinIn /> },
];

const Footer = () => {
    return (
        <footer className="w-screen bg-pink-300 py-4 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm font-helvetica-neue md:text-left">
                    &copy; thounny 2025. All rights reserved
                </p>

                <div className="flex justify-center gap-4  md:justify-start">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black transition-colors duration-500 ease-in-out hover:text-white"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <a
                    href="#privacy-policy"
                    className="text-center text-sm font-helvetica-neue hover:underline md:text-right"
                >
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
};

export default Footer;