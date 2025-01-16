/* eslint-disable react/prop-types */
import clsx from "clsx";

const Button = ({ id, title, rightIcon, leftIcon, containerClass, url }) => {
    const Element = url ? "a" : "button"; // Use <a> if url is provided, otherwise <button>

    return (
        <Element
            id={id}
            href={url} // Only applies if it's an <a> tag
            target={url ? "_blank" : undefined} // Open link in a new tab
            rel={url ? "noopener noreferrer" : undefined} // Security for external links
            className={clsx(
                "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-pink-300 px-7 py-3 text-black",
                containerClass
            )}
        >
            {leftIcon}

            <span className="relative inline-flex overflow-hidden font-helvetica-neue text-xs uppercase">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                    {title}
                </div>
                <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    {title}
                </div>
            </span>

            {rightIcon}
        </Element>
    );
};

export default Button;
