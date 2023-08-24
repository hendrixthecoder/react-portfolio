import voter from "../assets/voter.jpeg";
import countrydata from "../assets/countrydata.png";
import coinmaker from "../assets/company.jpeg";
import { FiLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="mt-32 text-white" id="projects">
      <div className="flex w-full flex-col gap-5 text-center">
        <h3 className="text-5xl underline text-my-green">Projects</h3>
        <p className="text-gray-500">Here you will find some of my works.</p>
      </div>
      <div className="mt-20 flex flex-col gap-5 md:grid md:grid-cols-3">
        <div className="flex flex-col border border-my-green">
          <div className="relative pb-[50%]">
            <img
              src={voter}
              className="absolute h-full w-full object-fill"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-6 p-4">
            <h3 className="text-2xl font-medium text-my-green">Voter</h3>
            <p className="text-gray-500">
              SP Voting App built using{" "}
              <span className="text-my-green">Laravel</span> as an{" "}
              <span className="text-my-green">API backend</span>,{" "}
              <span className="text-my-green">TailwindCSS </span>
              for styling, <span className="text-my-green">AJAX</span> for
              making HTTP requests to update voting results and creating votes,
              <span className="text-my-green"> JQuery</span> for manipulating the
              DOM.
            </p>
            <div className="flex items-center gap-3">
              <FiLink className="text-my-green" size={20} />
              <a
                href="https://github.com/hendrixthecoder/voter_ajax"
                className="overflow-hidden text-my-green hover:underline"
              >
                github.com/hendrixthecoder/voter_ajax
              </a>
            </div>
            <div className="flex gap-2 overflow-hidden text-xs text-my-ash">
              <div className="bg-my-green p-2">Laravel</div>
              <div className="bg-my-green p-2">AJAX</div>
              <div className="bg-my-green p-2">JQuery</div>
              <div className="bg-my-green p-2">TailwindCSS</div>
              <div className="bg-my-green p-2">GitHub</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-my-green">
          <div className="relative pb-[50%]">
            <img
              src={countrydata}
              className="absolute h-full w-full object-fill "
              alt=""
            />
          </div>
          <div className="flex flex-col gap-6 p-3 ">
            <h3 className="text-2xl font-medium text-my-green">WeaMap</h3>
            <p className="text-gray-500">
              SP Weather/Data App built with{" "}
              <span className="text-my-green">React</span> used for getting
              weather and trivial informations about countries by consuming
              endpoints to get these information using{" "}
              <span className="text-my-green">Axios</span>.
            </p>
            <div className="flex items-center gap-3 max-sm:text-sm ">
              <FiLink className="text-my-green" size={20} />
              <a
                href="https://github.com/hendrixthecoder/country_data_app"
                className="overflow-hidden text-my-green hover:underline"
              >
                github.com/hendrixthecoder/country_data_app
              </a>
            </div>
            <div className="flex gap-2 overflow-hidden text-xs text-my-ash">
              <div className="bg-my-green p-2">React</div>
              <div className="bg-my-green p-2">Axios</div>
              <div className="bg-my-green p-2">CSS</div>
              <div className="bg-my-green p-2">GitHub</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-my-green">
          <div className="relative pb-[50%]">
            <img
              src={coinmaker}
              className="absolute h-full w-full object-fill "
              alt=""
            />
          </div>
          <div className="flex flex-col gap-6 p-4">
            <h3 className="text-2xl font-medium text-my-green">
              CriptaliaElite
            </h3>
            <p className="text-gray-500">
              Full Stack Crypto Investment Company built with{" "}
              <span className="text-my-green">Laravel</span> and{" "}
              <span className="text-my-green">TailwindCSS</span> for styling,
              features include Automatic Payment System. Set up CI/CD using GitHub actions.
            </p>
            <div className="flex items-center gap-3">
              <FiLink className="text-my-green" size={20} />
              <a
                href="https://github.com/hendrixthecoder/coinmaker"
                className="overflow-hidden text-my-green hover:underline"
              >
                github.com/hendrixthecoder/coinmaker
              </a>
            </div>
            <div className="flex gap-2 overflow-hidden text-xs text-my-ash">
              <div className="bg-my-green p-2">Laravel</div>
              <div className="bg-my-green p-2">TailwindCSS</div>
              <div className="bg-my-green p-2">GitHub</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
