import phone from "../assets/phone-ring-anim.json";
import email from "../assets/email-anim.json";
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import NotificationContext from "../utils/NotificationContext";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [, dispatch] = useContext(NotificationContext);
  const [isSubmitted, setSubmitted] = useState(false);

  const form = useRef();

  const serviceKey = import.meta.env.VITE_EMAILJS_SERVICE_KEY;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    setSubmitted(true);

    emailjs.sendForm(serviceKey, templateId, form.current, publicKey).then(
      () => {
        dispatch({ type: "SET", payload: "Message sent successfully!" });

        setTimeout(() => {
          dispatch({ type: "UNSET" });
        }, 3000);

        setSubmitted(false)
        form.current.reset()
      },
      () => {
        dispatch({ type: "SET", payload: "Something went wrong!" });
        
        setTimeout(() => {
          dispatch({ type: "UNSET" });
        }, 3000);
        
        setSubmitted(false)
        form.current.reset()
      }
    );
  };

  return (
    <section
      className="mt-32 text-white lg:flex lg:items-center lg:justify-between"
      id="contact"
    >
      <div className="flex flex-col gap-5 lg:-mt-44 lg:w-1/2">
        <h3 className="text-3xl font-medium lg:text-5xl ">Wanna reach me?</h3>
        <p className="text-gray-500 lg:text-lg">
          I would absolutely love that! Email me, or maybe a call or send me a
          message by submitting the form!
        </p>
        <div className="flex flex-col gap-1 text-gray-500">
          <div className="flex items-center gap-4 ">
            <div className="w-10 ">
              <Lottie animationData={email} />
            </div>
            <p className="text-white">info@biobele.com</p>
          </div>
          <div className="flex items-center  gap-x-2">
            <div className="-ml-2 w-14 pb-2">
              <Lottie animationData={phone} />
            </div>
            <p className="text-white">+234 (903)-503-9339</p>
          </div>
        </div>
      </div>

      <div className="mt-14 lg:ml-10 lg:w-1/2">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              name="from_name"
              id="name"
              className="border border-my-green bg-my-ash p-3 outline-none transition-all delay-200 duration-500 focus:bg-[#202F22] "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              name="from_email"
              id="email"
              className="border border-my-green bg-my-ash p-3 outline-none transition-all delay-200 duration-500 focus:bg-[#202F22] "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              required
              className="border border-my-green bg-my-ash p-3 outline-none transition-all delay-200 duration-500 focus:bg-[#202F22]"
              name="message"
              id="message"
              cols="30"
              rows="6"
            ></textarea>
          </div>
          <button
            disabled={isSubmitted}
            className={` ${
              isSubmitted ? "bg-my-ash text-white" : "bg-white text-black"
            } self-start px-6  py-3 transition-all duration-700 hover:shadow-lg hover:shadow-my-green`}
          >
            {isSubmitted ? "Please wait..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
