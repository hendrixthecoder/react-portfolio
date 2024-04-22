import coinmaker from "../assets/company.jpeg";
import doodleflow from "../assets/doodleflow.png";
import draganddrop from "../assets/draganddrop.png";
import { FiLink } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="mt-32 text-white" id="projects">
      <div className="flex w-full flex-col gap-5 text-center">
        <h3 className="text-5xl text-my-green underline">Projects</h3>
        <p className="text-gray-500">Here you will find some of my works.</p>
      </div>
      <div className="mt-20 flex flex-col gap-5 md:grid md:grid-cols-3">
        <div className="flex flex-col border border-my-green">
          {/* <div className="relative pb-[50%]">
            <img
              src={coinmaker}
              className="absolute h-full w-full object-fill "
              alt=""
            />
          </div> */}
          {/* <div className="flex flex-col gap-6 p-4">
            <h3 className="text-2xl font-medium text-my-green">
              CriptaliaElite
            </h3>
            <p className="text-gray-500">
              Full Stack Crypto Investment Company built with{" "}
              <span className="text-my-green">Laravel</span> and{" "}
              <span className="text-my-green">TailwindCSS</span> for styling,
              features include Automatic Payment System. Set up CI/CD using
              GitHub actions.
            </p>
            <div className="flex items-center gap-3">
              <FiLink className="text-my-green" size={20} />
              <a
                href="https://github.com/hendrixthecoder/coinmaker"
                className="break-all text-my-green hover:underline"
              >
                github.com/hendrixthecoder/coinmaker
              </a>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-my-ash">
              <div className="bg-my-green p-2">Laravel</div>
              <div className="bg-my-green p-2">TailwindCSS</div>
              <div className="bg-my-green p-2">GitHub</div>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col border border-my-green">
          <div className="relative pb-[50%]">
            <img
              src={doodleflow}
              className="absolute h-full w-full object-fill "
              alt=""
            />
          </div>
          <div className="flex flex-col gap-6 p-4">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://doodleflow.vercel.app/"
              className="flex items-center gap-2 text-2xl font-medium text-my-green underline"
            >
              DoodleFlow
              <FaExternalLinkAlt className="" size={15} />
            </a>
            <p className="text-gray-500">
              Drawing App built with{" "}
              <span className="text-green-500">NextJS</span> for UI,{" "}
              <span className="text-green-500">Firebase</span> for Auth,{" "}
              <span className="text-green-500">TypeScript</span> for type safety
              and <span className="text-green-500">WebSockets</span> for
              Realtime drawing updates.
            </p>
            <div className="flex items-center gap-3">
              <FiLink className="text-my-green" size={20} />
              <a
                href="https://github.com/hendrixthecoder/doodleflow"
                className="break-all text-my-green hover:underline"
              >
                github.com/hendrixthecoder/doodleflow
              </a>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-my-ash">
              <div className="bg-my-green p-2">React/NextJS</div>
              <div className="bg-my-green p-2">TailwindCSS</div>
              <div className="bg-my-green p-2">WebSockets</div>
              <div className="bg-my-green p-2">TypeScript</div>
              <div className="bg-my-green p-2">Firebase</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-my-green">
          <div className="relative pb-[50%]">
            <img
              src={draganddrop}
              className="absolute h-full w-full object-fill "
              alt=""
            />
          </div>
          <div className="flex flex-col gap-6 p-4">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://project-manager-two-lake.vercel.app/"
              className="flex items-center gap-2 text-2xl font-medium text-my-green underline"
            >
              Draganddrop
              <FaExternalLinkAlt className="" size={15} />
            </a>
            <p className="text-gray-500">
              Drag and drop kanban board application built using{" "}
              <span className="text-green-500">NuxtJS</span> and{" "}
              <span className="text-green-500">HTML Drag and Drop API</span>.
            </p>
            <div className="flex items-center gap-3">
              <FiLink className="text-my-green" size={20} />
              <a
                href="https://github.com/hendrixthecoder/project-manager"
                className="break-all text-my-green hover:underline"
              >
                https://github.com/hendrixthecoder/project-manager
              </a>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-my-ash">
              <div className="bg-my-green p-2">NuxtJS</div>
              <div className="bg-my-green p-2">HTML5 Drag and Drop API</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
