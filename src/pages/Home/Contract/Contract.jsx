import toast, { Toaster } from "react-hot-toast";
import { FaPaperPlane, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contract = () => {

  const handleSubscribe=(event)=>{
    event.preventDefault()
    const form=event.target 
    const name=form.name.value 
    const email=form.email.value 
    console.log(name,email);
    toast.success("Thanks for subscribe!")
    form.reset()

  }

  return (
    <div>
      <div className="px-5">
        <div className="max-w-7xl mx-auto p-10 my-20 flex flex-col-reverse md:flex-row gap-6 items-center shadow-md rounded-lg border border-gray-200">
          <div data-aos="fade-up" data-aos-duration="1500" className="md:w-1/2">
            <h2 className="text-dark-01 dark:text-white font-semibold text-3xl md:text-4xl mb-2">
              Subscribe now
            </h2>
            <div className="w-20 h-1.5 bg-dark-03 mb-5 ml-2"></div>
            <p className="text-dark-02 dark:text-white text-lg mb-5">
              Get latest updates, deals, and exclusive offers Every time.
            </p>
            <form onSubmit={handleSubscribe} >
              <input
                className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                id=""
              />
              <input
                className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                id=""
              />
              <button 
                className="py-3 px-10 text-white bg-dark-03 rounded inline-flex gap-3 items-center"
                type="submit"
              >
                Subscribe <FaPaperPlane></FaPaperPlane>
              </button>
            </form>
          </div>
          <div>
            OR
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="md:w-1/2 p-10"
          >
            <h2 className="text-dark-01 dark:text-white font-semibold text-3xl md:text-4xl mb-2">
              Contact me
            </h2>
            <div className="w-20 h-1.5 bg-dark-03 dark:text-white mb-5 ml-2"></div>
            <div className="flex gap-3 font-medium text-xl items-center ">
              <FaWhatsapp className="text-dark-03 dark:text-white text-3xl" />
              <a className="text-dark-01 dark:text-white" href="#">
                +880 131 577 3424
              </a>
            </div>
            <div className="flex gap-3 font-medium text-xl items-center ">
              <MdEmail className="text-dark-03 dark:text-white text-3xl" />
              <a
                className="text-dark-01 dark:text-white"
                href="mailto:moshfiqurrahman37@gmail.com"
              >
                moshfiqurrahman37@gmail.com
              </a>
            </div>
            <div className="flex gap-3 font-medium text-xl items-center ">
              <FaLinkedin className="text-dark-03 dark:text-white text-3xl" />
              <a
                className="text-dark-01 dark:text-white"
                href="https://www.linkedin.com/in/moshfiqur-rahman-a302b32a3"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default Contract;
