import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-4">
        {/*  */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg h-64"
              src="https://i.ibb.co/ggsSs5R/bg.jpg"
              alt=""
            />
          </a>
          <div className="flex justify-between items-center text-dark-01 dark:text-dark-03 py-1 px-3">
            <p className="border px-1 rounded">React</p>
            <p className="border px-1 rounded">Tailwind</p>
            <p className="border px-1 rounded">Express</p>
            <p className="border px-1 rounded">MongoDB</p>
          </div>
          <hr />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Online Survey
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              OpineLink A survey web-application on Servicesphere. Users can
              share their valuable comments through this web-application.
            </p>

            <div className="text-gray-900 dark:text-white flex justify-between">
              <a href="https://surveyspehere.web.app/">
                <div className="flex justify-center items-center gap-1 border px-3 py-1 rounded-md bg-dark-01 dark:bg-dark-03 text-white">
                  <TbWorldWww />
                  <p>Live</p>
                </div>
              </a>

              <a href="https://github.com/Emam-Bokhari/survey-Sphere-clientside">
                <div className="flex justify-center items-center gap-1 border px-3 py-1 rounded-md bg-dark-01 dark:bg-dark-03 text-white">
                  <FaGithub />
                  <p>Client Side</p>
                </div>
              </a>

              <a href="https://github.com/Emam-Bokhari/surveySphere-serverside">
                <div className="flex justify-center items-center gap-1 border px-3 py-1 rounded-md bg-dark-01 dark:bg-dark-03 text-white">
                  <FaGithub />
                  <p>Server Side</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg h-64"
              src="https://i.ibb.co/4YZSZS4/market.jpg"
              alt=""
            />
          </a>
          <div className="flex justify-between items-center text-dark-01 dark:text-dark-03 py-1 px-3">
            <p className="border px-1 rounded">React</p>
            <p className="border px-1 rounded">Tailwind</p>
            <p className="border px-1 rounded">Express</p>
            <p className="border px-1 rounded">MongoDB</p>
          </div>
          <hr />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Market Place
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Discover a world of convenience at our online marketplace. Explore
              a diverse array of products, from tech to fashion.
            </p>

            <div className="text-gray-900 dark:text-white flex justify-between">
              <a href="https://gig-grow.web.app/">
                <div className="flex justify-center items-center gap-1 border px-3 py-1 rounded-md bg-dark-01 dark:bg-dark-03 text-white">
                  <TbWorldWww />
                  <p>Live</p>
                </div>
              </a>

              <a href="https://github.com/Emam-Bokhari/gig-Grow-clientside">
                <div className="flex justify-center items-center gap-1 border px-3 py-1 rounded-md bg-dark-01 dark:bg-dark-03 text-white">
                  <FaGithub />
                  <p>Client Side</p>
                </div>
              </a>

              <a href="https://github.com/Emam-Bokhari/gig-Grow-serverside">
                <div className="flex justify-center items-center gap-1 border px-3 py-1 rounded-md bg-dark-01 dark:bg-dark-03 text-white">
                  <FaGithub />
                  <p>Server Side</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg h-64"
              src="https://i.ibb.co/kKMQQL4/online.jpg"
              alt=""
            />
          </a>
          <div className="flex justify-between items-center text-dark-01 dark:text-dark-03 py-1 px-3">
            <p className="border px-1 rounded">React</p>
            <p className="border px-1 rounded">Tailwind</p>
            <p className="border px-1 rounded">JavaScript</p>
            <p className="border px-1 rounded">Firebase</p>
          </div>
          <hr />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Course Registration
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Streamlined process, user-friendly interface. Input basic details,
              choose courses, and finalize with a click. Simplify your academic
              journey
            </p>

            <div className="text-gray-900 dark:text-white flex justify-around">
              <a href="http://scary-addition.surge.sh/">
                <div className="flex justify-center items-center gap-1 border px-3 py-1 rounded-md bg-dark-01 dark:bg-dark-03 text-white">
                  <TbWorldWww />
                  <p>Live</p>
                </div>
              </a>

              <a href="https://github.com/Emam-Bokhari/course-registration">
                <div className="flex justify-center items-center gap-1 border px-3 py-1 rounded-md bg-dark-01 dark:bg-dark-03 text-white">
                  <FaGithub />
                  <p>Clent Side</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
