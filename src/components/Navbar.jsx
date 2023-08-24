import { CgMenu, CgMenuMotion } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const { active, inactive } = {
    active:
      "fixed top-0 ease-in-out duration-500 right-0 z-20 p-4 select-none shadow-lg h-full items-center flex flex-col gap-10 w-1/2 bg-my-ash bg-opacity-75 text-gray-500",
    inactive:
      "fixed right-[-100%] top-0 ease-in-out duration-500 z-20 p-4 select-none shadow-lg h-full items-center flex flex-col gap-10 w-1/2 bg-my-ash bg-opacity-75 text-gray-500",
  };

  return (
    <>
      <nav className="sticky top-0 z-20 flex w-full select-none items-center justify-between py-8 backdrop-blur-sm">
        <h3 className="text-3xl text-white">
          hendrix<span className="font-semibold text-my-green">thecoder</span>
        </h3>

        <div className=" hidden items-center gap-10 text-my-gray lg:flex ">
          <Link to="hero" spy={true} smooth={true} offset={-200} duration={500}>
            <a
              href=""
              className="transition-colors delay-200 duration-500 hover:text-white"
            >
              Home
            </a>
          </Link>
          <Link
            to="technologies"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <a
              href=""
              className="transition-colors delay-200 duration-500 hover:text-white"
            >
              Tech Stack
            </a>
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <a
              href=""
              className="transition-colors delay-200 duration-500 hover:text-white"
            >
              Projects
            </a>
          </Link>

          <Link to="faq" spy={true} smooth={true} offset={-100} duration={500}>
            <a
              href=""
              className="transition-colors delay-200 duration-500 hover:text-white"
            >
              FAQs
            </a>
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <a
              href=""
              className="rounded-md bg-white px-6 py-3 text-black transition-all duration-700 hover:shadow-lg hover:shadow-my-green"
            >
              Get In Touch
            </a>
          </Link>
        </div>

        {/* Mobile menu navbar toggle begins here */}
        <div
          className=" z-50 cursor-pointer text-my-green lg:hidden"
          onClick={() => setNav(!nav)}
        >
          {nav ? "" : <CgMenu size={32} />}
        </div>
        {/* Mobile menu navbar toggle ends here */}
      </nav>
      <div className={nav ? active : inactive}>
        <CgMenuMotion
          size={32}
          className="absolute right-4 top-9 cursor-pointer text-my-green"
          onClick={() => setNav(!nav)}
        />
        <div className="mb-10"></div>
        <Link to="hero" spy={true} smooth={true} offset={-200} duration={500}>
          <a
            href=""
            className="transition-colors delay-200 duration-500 hover:text-white"
          >
            Home
          </a>
        </Link>
        <Link
          to="technologies"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <a
            href=""
            className="transition-colors delay-200 duration-500 hover:text-white"
          >
            Tech Stack
          </a>
        </Link>

        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <a
            href=""
            className="transition-colors delay-200 duration-500 hover:text-white"
          >
            Projects
          </a>
        </Link>

        <Link to="faq" spy={true} smooth={true} offset={-100} duration={500}>
          <a
            href=""
            className="transition-colors delay-200 duration-500 hover:text-white"
          >
            FAQs
          </a>
        </Link>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <a
            href=""
            className="rounded-md bg-white px-6 py-3 text-black transition-all duration-700 hover:shadow-lg hover:shadow-my-green"
          >
            Get In Touch
          </a>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
