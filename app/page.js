import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillBook } from "react-icons/ai";
import Image from "next/legacy/image";
import akash from "../public/akash.png";
import html from "../public/html.png";
import css from "../public/css.png";
import js from "../public/js.png";
import bootstrap from "../public/bootstrap.png";
import react from "../public/react.png";
import portfolio from "../public/portfolio.jpeg";
export default function Home() {
  return (
    <>
      <main className="bg-white px-10 md:px-20 lg:px-40 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-lg font-burtons">AkashVaidya</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10  ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Aakash Vaidya
            </h2>
            <h3 className="text-2xl py-2">Software Developer</h3>
            <p className="text-md py-5 leading-6 text-gray-700">
              I have a passion for coding and solving complex problems, and I'm
              always seeking out new opportunities to expand my knowledge and
              sharpen my skills. I firmly believe that continuous learning and
              improvement are the keys to achieving success in the fast-paced
              world of technology.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a>
              <AiFillLinkedin />
            </a>
            <a>
              <AiFillGithub />
            </a>
            <a>
              <AiFillBook />
            </a>
          </div>
          <div className="relative mx-auto mt-20 md:h-96 md:w-96 ">
            <Image src={akash} />
          </div>
        </section>
        <section>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-3xl py-1"> My Skills</h3>
            <p className="text-md py-5 leading-6 text-gray-700">
              I'm well-versed in using the tech for my projects. These are
              technologies that I'm comfortable with and have experience working
              with. I'm confident in my ability to leverage these tools to
              develop effective solutions and deliver quality results.
            </p>
            <Image src={html} width={100} height={100} />
          </div>
          <div>
            {/* <Image src={css} width={100} height={100} />
            <Image src={js} width={100} height={100} />
            <Image src={bootstrap} width={100} height={100} />
            <Image src={react} width={100} height={100} /> */}
          </div>
        </section>
        <section>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-5 leading-6 text-gray-700">
              I'm well-versed in using the tech for my projects. These are
              technologies that I'm comfortable with and have experience working
              with. I'm confident in my ability to leverage these tools to
              develop effective solutions and deliver quality results.
            </p>
            <Image src={portfolio} width={100} height={100} />
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-5 leading-6 text-gray-700">
              I'm well-versed in using the tech for my projects. These are
              technologies that I'm comfortable with and have experience working
              with. I'm confident in my ability to leverage these tools to
              develop effective solutions and deliver quality results.
            </p>
            <Image src={portfolio} width={100} height={100} />
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-5 leading-6 text-gray-700">
              I'm well-versed in using the tech for my projects. These are
              technologies that I'm comfortable with and have experience working
              with. I'm confident in my ability to leverage these tools to
              develop effective solutions and deliver quality results.
            </p>
            <Image src={portfolio} width={100} height={100} />
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-5 leading-6 text-gray-700">
              I'm well-versed in using the tech for my projects. These are
              technologies that I'm comfortable with and have experience working
              with. I'm confident in my ability to leverage these tools to
              develop effective solutions and deliver quality results.
            </p>
            <Image src={portfolio} width={100} height={100} />
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-5 leading-6 text-gray-700">
              I'm well-versed in using the tech for my projects. These are
              technologies that I'm comfortable with and have experience working
              with. I'm confident in my ability to leverage these tools to
              develop effective solutions and deliver quality results.
            </p>
            <Image src={portfolio} width={100} height={100} />
          </div>
        </section>
      </main>
    </>
  );
}
