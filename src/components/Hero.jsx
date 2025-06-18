import ReactTyped from "react-typed";
import { BsArrowDown } from "react-icons/bs";
import Lottie from "lottie-react";
import hand from "../assets/waving-hand.json";

const Hero = () => {
  const experiences = [
    "Frontend Web Development.",
    "Backend Web Development.",
    "App Development.",
    "Content Writing.",
  ];

  return (
    <>
      <div className="" id="hero">
        <section className=" mt-20 text-center lg:mt-14">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 animate-shadow-pulse rounded-full bg-my-green blur transition-all duration-700  "></div>
              <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full bg-white ">
                <img
                  src="./assets/portfolio.png"
                  className="object-fit"
                  alt="Photo of Myself: Biobele Johnbull"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto mt-14 max-w-6xl text-center font-ubuntu text-2xl text-white lg:mt-14 lg:p-9 lg:text-5xl">
          <h3 className="min-h-[11rem] flex-col items-center gap-0.5 max-md:flex">
            <div className="inline-flex items-center  ">
              <p>Hello!</p>
              <div className="flex h-10 items-center">
                <Lottie animationData={hand} className="w-10 " />
              </div>
            </div>
            My name is{" "}
            <span className="text-my-green underline">Johnbull Biobele.</span>
            <span>
              {" "}
              I&apos;m a software engineer, experienced in{" "}
              <ReactTyped
                typeSpeed={200}
                backSpeed={200}
                className="text-my-green"
                strings={experiences}
                loop
              />
            </span>
          </h3>
        </section>
        <div className="my-5 flex items-center justify-center text-center text-my-green underline">
          Little about me? Well I&apos;m a human first, I love life, writing and
          I am obsessed with learning.
        </div>
        <div className="my-7 flex justify-center">
          <a
            href="/assets/mycv.pdf"
            download="biobele-johnbull-cv.pdf"
            className="cursor-pointer bg-white px-6 py-3 transition-all duration-700 hover:shadow-lg hover:shadow-my-green "
          >
            Download CV
          </a>
        </div>
        <div className=" mt-5 flex flex-col items-center justify-center gap-7 text-gray-500">
          <p>Scroll down</p>
          <BsArrowDown size={50} className="animate-bounce text-my-green" />
        </div>
      </div>
    </>
  );
};

export default Hero;
