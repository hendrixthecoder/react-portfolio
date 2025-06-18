import {
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaGitAlt,
  FaReact,
  FaBootstrap,
  FaFeather,
  FaDocker,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiMysql,
  SiGraphql,
  SiMongodb,
  SiTailwindcss,
  SiRedis,
  SiNuxtdotjs,
  SiJest,
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { DiPostgresql } from "react-icons/di";

const BACKEND_TECHNOLOGIES = [
  {
    name: "PHP",
    icon: FaPhp,
    color: "text-blue-600",
  },
  {
    name: "Laravel",
    icon: FaLaravel,
    color: "text-red-500",
  },
  {
    name: "Node/Express",
    icon: FaNodeJs,
    color: "text-green-500",
  },
  {
    name: "FeathersJS",
    icon: FaFeather,
    color: "text-green-600",
  },
  {
    name: "Redis",
    icon: SiRedis,
    color: "text-red-500",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-400",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-600",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    color: "text-[#F6009B]",
  },
];

const FRONTEND_TECHNOLOGIES = [
  {
    name: "React/NextJS",
    icon: FaReact,
    color: "text-blue-500",
  },
  {
    name: "NuxtJS",
    icon: SiNuxtdotjs,
    color: "text-green-500",
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    color: "text-blue-400",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    color: "text-purple-800",
  },
  {
    name: "JS/Typescript",
    icon: IoLogoJavascript,
    color: "text-yellow-500",
  },
];

const OTHER_TECHNOLOGIES = [
  {
    name: "GIT, GitHub Actions",
    icon: FaGitAlt,
    color: "text-red-600",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "text-blue-600",
  },
  {
    name: "Golang",
    icon: FaGolang,
    color: "text-blue-400",
  },
  {
    name: "Jest",
    icon: SiJest,
    color: "text-blue-400",
  },
  {
    name: "AWS",
    icon: DiPostgresql,
    color: "text-blue-400",
  },
];

const Technologies = () => {
  return (
    <section className="mt-32 text-center text-white" id="technologies">
      <div className="flex flex-col gap-9 md:grid md:grid-cols-2 md:items-center">
        <div>
          <h3 className="text-5xl text-my-green underline">
            Technologies I work with
          </h3>
          <p className="mt-4 text-gray-500">
            Here you&apos;ll find technologies I have used and work with.
          </p>
        </div>
        <div className="justify-center-center grid grid-cols-3 gap-4 p-4 text-my-green">
          <div className=" flex w-full flex-col gap-4 text-sm text-white">
            <div className="text-lg font-bold text-my-green ">Backend</div>

            {BACKEND_TECHNOLOGIES.map((TECH, idx) => {
              return (
                <div className="flex gap-3" key={idx}>
                  <TECH.icon size={23} className={TECH.color} />
                  <p>{TECH.name}</p>
                </div>
              );
            })}
          </div>

          <div className=" flex w-full flex-col gap-4 text-white">
            <div className="text-lg font-bold text-my-green">Front End</div>

            {FRONTEND_TECHNOLOGIES.map((TECH, idx) => {
              return (
                <div className="flex gap-3" key={idx}>
                  <TECH.icon size={23} className={TECH.color} />
                  <p>{TECH.name}</p>
                </div>
              );
            })}
          </div>
          <div className="flex w-full flex-col gap-4 text-white">
            <div className="text-lg font-bold text-my-green">Others</div>

            {OTHER_TECHNOLOGIES.map((TECH, idx) => {
              return (
                <div className="flex gap-3 " key={idx}>
                  <TECH.icon size={23} className={TECH.color} />
                  <p className="">{TECH.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
