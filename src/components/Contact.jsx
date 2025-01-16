/* eslint-disable react/prop-types */
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img src={src} />
    </div>
);

const Contact = () => {
    return (
        <div id="contact" className="my-20 min-h-96 w-screen px-10">
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                {/* Left Decorative Images */}
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox
                        src="/img/lean.jpg"
                        clipClass="contact-clip-path-2"
                    />
                    <ImageClipBox
                        src="/videos/project-5.gif"
                        clipClass="contact-clip-path-1 lg:translate-y-40 translate-y-60"
                    />
                </div>

                {/* Right Decorative Images */}
                <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox
                        src="/img/me.jpg"
                        clipClass="contact-clip-path-2 relative md:scale-125"
                    />
                    <ImageClipBox
                        src="/img/yes.gif"
                        clipClass="sword-man-clip-path md:scale-125"
                    />
                </div>

                {/* Contact Section Content */}
                <div className="flex flex-col items-center text-center" id="contact">
                    <p className="mb-10 font-general text-[10px] uppercase">
                        Connect with Me
                    </p>

                    <AnimatedTitle
                        title="Let&#39;s c<b>o</b>llaborate <br /> on <b>i</b>nnovative <br /> p<b>r</b>ojects."
                        className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
                    />

                    <p className="mt-5 max-w-2xl text-sm text-white-400 font-helvetica-neue">
                        As a creative developer and designer, I specialize in crafting
                        innovative digital experiences. Let&#39;s work together to create
                        something extraordinary.
                    </p>

                    <Button
                        title="Get in Touch"
                        containerClass="mt-10 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
