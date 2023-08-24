import phone from '../assets/phone-ring-anim.json'
import email from '../assets/email-anim.json'
import Lottie from 'lottie-react'

const Contact = () => {
  return (
    <section className="mt-32 text-white lg:flex lg:justify-between lg:items-center" id='contact'>
      <div className="flex flex-col gap-5 lg:w-1/2 lg:-mt-44">
        <h3 className="text-3xl font-medium lg:text-5xl ">Wanna reach me?</h3>
        <p className="text-gray-500 lg:text-lg">I would absolutely love that! Email me, or maybe a call or send me a message by submitting the form!</p>
        <div className="flex flex-col gap-1 text-gray-500">
          <div className="flex gap-4 items-center ">
            <div className="w-10 ">
              <Lottie animationData={email} />
            </div>
              <p className='text-white'>info@biobele.com</p>
          </div>
          <div className="flex gap-x-2  items-center">
            <div className="w-14 -ml-2 pb-2">
              <Lottie animationData={phone} className=''/>
            </div>
            <p className='text-white'>+234 (903)-503-9339</p>
          </div>
        </div>
      </div>
      <div className="mt-14 lg:ml-10 lg:w-1/2">
        <form action="" method="post" className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input type="text" className="p-3 transition-all duration-500 delay-200 bg-my-ash border border-my-green outline-none focus:bg-[#202F22] " />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input type="email" className="p-3 transition-all duration-500 delay-200 bg-my-ash border border-my-green outline-none focus:bg-[#202F22] " />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <textarea className="p-3 transition-all duration-500 delay-200 bg-my-ash border border-my-green outline-none focus:bg-[#202F22]" name="message" id="" cols="30" rows="6">

                </textarea>
            </div>
            <input type="submit" value="Submit" className="transition-all duration-700 bg-white px-6 py-3 w-28 text-black hover:shadow-lg hover:shadow-my-green"/>
        </form>
      </div>
    </section>
  );
};

export default Contact;
