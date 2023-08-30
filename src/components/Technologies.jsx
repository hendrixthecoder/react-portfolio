import { FaPhp, FaLaravel, FaNodeJs, FaReact, FaBootstrap, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql, SiGraphql, SiTypescript, SiMongodb, SiTailwindcss, SiJquery, SiCss3 } from "react-icons/si";

const Technologies = () => {
  return (
    <section className="mt-32 text-center text-white" id="technologies">
      <div className="flex flex-col gap-9 md:grid md:grid-cols-2 md:items-center">
        <div>
          <h3 className="text-5xl underline text-my-green">Technologies I work with</h3>
          <p className="mt-4 text-gray-500">
            Here you&apos;ll find technologies I have used and work with.
          </p>
        </div>
        <div className="justify-center-center grid grid-cols-3 gap-4 p-4 text-my-green">
          <div className=" flex w-full flex-col gap-4 text-white text-sm">
            <div className="text-lg font-bold text-my-green ">Backend</div>
            <div className="flex gap-3">
              <FaPhp size={25} className="text-blue-600" />
              <p>PHP</p>
            </div>
            <div className="flex gap-3">
              <FaLaravel size={25} className="text-red-500" />
              <p>Laravel</p>
            </div>
            <div className="flex gap-3">
              <FaNodeJs size={25} className="text-green-600" />
              <p>Node/Express</p>
            </div>
            <div className="flex gap-3">
              <SiMysql size={25} className="text-blue-400" />
              MySQL
            </div>
            <div className="flex gap-3 items-center">
              <SiMongodb size={30} className="text-green-600" />
              MongoDB
            </div>
            <div className="flex gap-3 items-center">
              <SiGraphql size={30} className="text-[#F6009B]" />
              GraphQL
            </div>
          </div>
          <div className=" flex w-full flex-col gap-4 text-white">
            <div className="text-lg font-bold text-my-green">Front End</div>
            <div className="flex items-center gap-3">
              <FaReact className="text-blue-500" />
              React/Redux
            </div>
            <div className="flex items-center gap-3">
                <SiTailwindcss className="text-blue-400"/>
                TailwindCSS
            </div>
            <div className="flex items-center gap-3">
                <FaBootstrap size={25} className="text-purple-800"/>
                Bootstrap
            </div>
            <div className="flex items-center gap-3">
                <SiJquery size={25} className="text-cyan-600"/>
                JQuery
            </div>
            <div className="flex items-center gap-3">
                <IoLogoJavascript size={22} className="text-yellow-500"/>
                JS/TypeScript
            </div>
            <div className="flex items-center gap-3">
                <FaHtml5 size={22} className="text-orange-600"/>
                HTML
            </div>
            <div className="flex items-center gap-3">
                <SiCss3 size={22} className="text-orange-600"/>
                CSS
            </div>
          </div>
          <div className=" flex w-full flex-col gap-4 text-white">
            <div className="text-lg font-bold text-my-green">Others</div>
            <div className="">Wordpress</div>
            <div className="">Ajax</div>
            <div className="">Axios</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
