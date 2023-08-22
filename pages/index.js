import { Inter } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import cognizant from "../public/Cognizant-Logo.png";
import giz from "../public/giz.jpg";
import Image from "next/image";
import Emoji from "../public/gayatri.png";
import web1 from "../public/codeeditor.png";
import web2 from "../public/todo.png";
import web3 from "../public/mbta.jpg";
import web4 from "../public/event.png";
import web5 from "../public/sentiment.jpg";
import web6 from "../public/bank.jpeg";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-5 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-5 flex justify-between">
            <h1 className="text-xl text-gray-800 dark:text-white">
              <strong>Portfolio</strong>
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-bg-cyan-500 to-team-500  bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1CbFKpp2OOoBQiEFmoBym2Wda3o7-jvmI/view"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Hi, I'm Gayatri
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Full Stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              Passionate about developing user-friendly interfaces and eager to
              learn new skills.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600">
            <a
              href="https://www.linkedin.com/in/gdalvi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/gdalvi94"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
            <a href="mailto:dalvi.ga@northeastern.edu">
              <AiFillMail />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-5 overflow-hidden md:h-96 md:w-96">
            <Image
              className="border-gray-900"
              src={Emoji}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section className="bg-cyan-500 py-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 rounded-lg mt-10">
          <div className="w-full md:w-1/2 md:mx-5 ml-2">
            <h3 className="text-3xl text-left mb-5 text-white">About me</h3>
            <p className="text-md leading-8 text-left text-black dark:text-white">
              Designing interactive, user-friendly, and elegant user interfaces
              is my true passion. I'm skilled in creating dynamic websites using
              the MERN stack and have experience with databases like MongoDB,
              MySQL, and Oracle. I've also dabbled in data visualization using
              PowerBi. When I'm not designing, you'll find me playing
              basketball. If you like what you see, let's chat and turn ideas
              into reality!
            </p>
          </div>
          <div className="w-full md:w-1/2 mx-5">
            <div className="flex flex-wrap gap-3 ml-5">
              <div className=" text-base bg-gray-400 border-gray-600 rounded-lg p-2 hover:bg-gray-300">
                HTML
              </div>
              <div className="text-base bg-gray-400 border-gray-600 rounded-lg p-2 hover:bg-gray-300">
                CSS
              </div>
              <div className="text-base bg-gray-400 border-gray-600 rounded-lg p-2 hover:bg-gray-300">
                JavaScript
              </div>
              <div className="text-base bg-gray-400 border-gray-600 rounded-lg p-2 hover:bg-gray-300">
                React
              </div>
              <div className="text-base bg-gray-400 border-gray-600 rounded-lg p-2 hover:bg-gray-300">
                NodeJS
              </div>
              <div className="text-base bg-gray-400 border-gray-600 rounded-lg p-2 hover:bg-gray-300">
                ExpressJS
              </div>
              <div className="text-base bg-gray-400 border-gray-600 rounded-lg p-2 hover:bg-gray-300">
                RestAPIs
              </div>

              <div className="text-base bg-gray-400 border-gray-600 rounded-lg p-2 hover:bg-gray-300">
                MongoDB
              </div>
              <div className="text-base bg-gray-400 border-gray-600 rounded-lg p-2 hover:bg-gray-300">
                MySQL
              </div>
              <div className="text-base bg-gray-400 border-gray-600 rounded-lg p-2 hover:bg-gray-300">
                Tailwind
              </div>
              <div className="text-base bg-gray-400 border-gray-600 rounded-lg p-2 hover:bg-gray-300">
                Java
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap lg:flex-nowrap">
            <div className="basis-1/3 flex-1 relative">
              <div className="rounded-lg overflow-hidden">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white rounded-lg">
                  <h3 className="text-center text-base">
                    <strong>Code Editor</strong>
                  </h3>
                  <p className="text-center">
                    I developed this application utilizing ReactJS and
                    CodeMirror. It serves as a code editor tailored for HTML,
                    CSS, and JavaScript, enabling users to seamlessly edit and
                    experiment with code.
                  </p>
                  <a
                    href="https://github.com/gdalvi94/CodePen-App"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1 relative">
              <div className="rounded-lg overflow-hidden">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-80 text-white rounded-lg">
                  <h3 className="text-center text-base">
                    <strong>Todo App</strong>
                  </h3>
                  <p className="text-center">
                    I built this app using Axios, which effectively manages CRUD
                    operations. Users can effortlessly add, edit, and delete
                    tasks, as well as mark them as completed.
                  </p>

                  <a
                    href="https://github.com/gdalvi94/TodoApp"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1 relative">
              <div className="rounded-lg overflow-hidden">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web4}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-80 text-white rounded-lg">
                  <h3 className="text-center text-base">
                    <strong>Book My Event</strong>
                  </h3>
                  <p className="text-center">
                    This MERN stack web application facilitates event booking
                    for users. MongoDB serves as the underlying database,
                    enabling seamless storage and retrieval of event-related
                    information.
                  </p>
                  <a
                    href="https://github.com/gdalvi94/Book_My_Event"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap lg:flex-nowrap">
            <div className="basis-1/3 flex-1 relative">
              <div className="rounded-lg overflow-hidden">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web3}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white rounded-lg">
                  <h3 className="text-center text-base ">
                    <strong>Ticket Management System</strong>
                  </h3>
                  <p className="text-center">
                    Created an efficient OLTP system for MBTA, streamlining
                    station transactions, ticket management, and operations.
                  </p>
                  <a
                    href="https://github.com/gdalvi94/MBTA_Project"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1 relative">
              <div className="rounded-lg overflow-hidden">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web5}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-80 text-white rounded-lg">
                  <h3 className="text-center text-base">
                    <strong>Sentiment Analysis</strong>
                  </h3>
                  <p className="text-center">
                    Created a sentiment analysis project using NLP, Selenium,
                    and Dash on a massive 14GB dataset, revealing meaningful
                    insights from text data.
                  </p>
                  <a
                    href="https://github.com/gdalvi94/Sentiment_analysis_with_insights"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1 relative">
              <div className="rounded-lg overflow-hidden">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web6}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-80 text-white rounded-lg">
                  <h3 className="text-center text-base">
                    <strong>Bank Management System</strong>
                  </h3>
                  <p className="text-center">
                    Designed a JavaFX project utilizing OOP principles and
                    following the MVC architecture.
                  </p>
                  <a
                    href="https://github.com/gdalvi94/Easy_Bank"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                  >
                    GitHub{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Work Experience</h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image className="mx-auto" src={cognizant} />
              <h3 className="text-lg font-medium pt-4 pb-2">
                Programmer Analyst Intern
              </h3>
              <p className="text-justify py-2">
                - Achieved 60% improvement in data accuracy by analyzing SSIS
                packages for streamlined ETL workflows, resulting in a 30%
                reduction in processing time and enhanced overall efficiency
                <br />
                - Utilized T-SQL stored procedures for data integrity
                validation, resulting in a 70% increase in performance
                <br />- Generated 8 PowerBI reports and interactive dashboards,
                leveraging quantitative and qualitative analysis to redefine
                best practices
              </p>
              <h4 className="py-1 text-teal-600">
                <strong>Skills</strong>
              </h4>
              <p className="text-gray-800 py-1">
                SSIS, SSRS, SSMS, PowerBI, SQL Workbench, SQL Server
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                className="mx-auto pt-2"
                src={giz}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Software Developer Intern
              </h3>
              <p className="text-justify py-1">
                - Led team of 6 to develop HR software module for efficient
                attendance and leave management, enhancing organizational
                productivity
                <br />- Eliminated 80% of manual data collection and boosted
                client efficiency by 40% through biometric tracking and data
                visualization techniques
              </p>
              <h4 className="py-1 text-teal-600 pt-8">
                <strong>Skills</strong>
              </h4>
              <p className="text-gray-800 py-1">
                HTML, CSS, JavaScript, Bootstrap, MySQL
              </p>
            </div>
          </div>
        </section>
        <hr className="border-t-2 border-blue-500"></hr>
        <footer className="bg-gray-100 py-10">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between gap-10 rounded-lg mt-10">
              <div className="w-full md:w-1/2 md:mx-5 ml-2">
                <h3 className="text-2xl md:text-3xl text-center md:text-left mb-4 font-semibold">
                  Let's Connect
                </h3>
                <p className="text-md leading-7 text-center md:text-left text-gray-800">
                  I hope you enjoyed exploring my portfolio. Learning new
                  concepts brings me joy, and I'm always open to new ideas and
                  collaborations. If you have any exciting projects in mind or
                  simply want to chat, feel free to reach out!
                </p>
              </div>
              <div className="w-full md:w-1/2 mx-5 flex justify-center md:justify-end items-center">
                <div className="flex gap-4 text-gray-600">
                  <a
                    href="https://www.linkedin.com/in/gdalvi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin className="text-5xl hover:text-cyan-500 transition-colors duration-300" />
                  </a>
                  <a
                    href="https://github.com/gayatridalvi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub className="text-5xl hover:text-cyan-500 transition-colors duration-300" />
                  </a>
                  <a href="mailto:dalvi.ga@northeastern.edu">
                    <AiFillMail className="text-5xl hover:text-cyan-500 transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-5 text-gray-600">
              Contact: 857-832-0323 | Location: Boston, MA
            </div>
            <div className="text-center mt-5 text-gray-600">
              &copy; 2023 GRD. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
