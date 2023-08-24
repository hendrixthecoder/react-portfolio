import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const Icon = ({ id, active, size }) => {
  return (
    <IoIosArrowUp
      size={size}
      className={`${
        id === active ? "rotate-180" : "rotate-90"
      } text-my-green transition-all duration-300`}
    />
  );
};

const FAQ = () => {
  const [active, setActive] = useState(0);
  const handleClick = (value) => {
    setActive(active === value ? 0 : value);
  };

  return (
    <section className="mt-32 text-white" id="faq">
      <div className="flex flex-col gap-5">
        <h3 className="text-4xl font-medium text-center underline text-my-green">FAQs</h3>
        <p className="text-gray-500">Quick one-liners to get you better acquainted with me.</p>
      </div>
      <div className="mt-10 flex flex-col gap-6">
        <div>
          <div
            className="flex cursor-pointer select-none items-center justify-between"
            onClick={() => handleClick(1)}
          >
            <h3 className="text-xl max-sm:text-lg">
              What technology stack do you use?
            </h3>
            <Icon id={1} active={active} size={30} />
          </div>
          {active === 1 ? (
            <div className="mt-5 w-full text-gray-500  transition-all duration-300 ">
              This can be found in the Tech Stack section above.
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div
            className="flex cursor-pointer select-none items-center justify-between"
            onClick={() => handleClick(2)}
          >
            <h3 className="text-xl max-sm:text-lg">
              What is your current availability?
            </h3>
            <Icon id={2} active={active} size={30} />
          </div>
          {active === 2 ? (
            <div className="mt-5 w-full text-gray-500">
              I am currently available for contract and full-time
              Back/Front/Full Stack roles, hybrid and remote.
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div
            className="flex cursor-pointer select-none items-center justify-between"
            onClick={() => handleClick(3)}
          >
            <h3 className="text-xl max-sm:text-lg">
              Do you work alone or with a team?
            </h3>
            <Icon id={3} active={active} size={30} />
          </div>
          {active === 3 ? (
            <div className="mt-5 w-full text-gray-500">
              I work alone primarily but have worked extensively with teams in
              the past and possess the necessary people skills required to work efficiently in a
              robust work environment.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
