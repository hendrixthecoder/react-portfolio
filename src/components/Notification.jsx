import { useContext } from "react";
import NotificationContext from "../utils/NotificationContext";
import Lottie from 'lottie-react';
import success from '../assets/notif-success.json'

const Notification = () => {
  const [notification] = useContext(NotificationContext);

  return (
    <>
      <div
        className={`fixed left-0 ${
          notification ? "" : "translate-y-full"
        } bottom-0 w-full transform bg-transparent text-white duration-500 ease-in-out flex justify-center p-3`}
      >
        <div className="p-2 px-[2rem] text-black bg-my-green rounded-3xl flex gap-3 items-center">
          <div className="w-10">
            <Lottie animationData={success}/>
          </div>
          {notification}
        </div>
      </div>
    </>
  );
};

export default Notification;
