import ReactTyped from "react-typed";
import { BsArrowDown } from "react-icons/bs"
import Lottie from 'lottie-react'
import hand from '../assets/waving-hand.json'


const Hero = () => {
  const experiences = [
    'Frontend Web Development.',
    'Backend Web Development.',
    'App Development.',
  ]

  return (
    <>
      <div className="" id="hero">
        <section className=" mt-20 lg:mt-14 text-center">
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
        <section className="mt-14 lg:mt-14 text-center font-ubuntu mx-auto max-w-6xl text-2xl lg:text-5xl lg:p-9 text-white">
          <h3 className="">
            <div className="inline-flex items-center  ">
              <p>Hello!</p>
              <div className="h-10 lg:h-20 ">
                <Lottie animationData={hand} className="w-10 " />
              </div>
            </div>
            My name is <span className="text-my-green underline">Johnbull Biobele</span>. I&apos;m a software developer, experienced in{' '}
            <ReactTyped typeSpeed={200} backSpeed={200} className="text-my-green" strings={experiences} loop />
          </h3>
        </section>
        <div className="flex justify-center my-7">
          <a
            href="/assets/mycv.pdf"
            download="biobele-johnbull-cv.pdf"
            className="bg-white px-6 cursor-pointer py-3 transition-all duration-700 hover:shadow-lg hover:shadow-my-green"
          >
            Download CV
          </a>
        </div>
        <div className=" flex flex-col justify-center gap-7 mt-5 items-center text-gray-500">
          <p>Scroll down</p>
          <BsArrowDown size={50} className="animate-bounce text-my-green"/>
        </div>
      </div>
    </>
  );
};

export default Hero;
