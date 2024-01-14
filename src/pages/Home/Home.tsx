import React from 'react';
import { FaGithub, FaLinkedin, FaMediumM } from 'react-icons/fa';

function Home() {
  return (
    <div className="mt-10">
      <div className="max-w-screen-xl mx-auto bg-white rounded-l shadow-md overflow-hidden md:max-w-screen-2xl">
        {/* Header */}
        <div className="flex bg-green justify-between items-center">
          {/* Photos */}
          <div className="m-4 md:10">
            <img
              className="h-38 w-54 object-cover -mb-16 md:w-64 md:h-54"
              src={require('../../img/edison.jpg')}
              alt=""
            />
          </div>
          <div>
            <div className="text-center sm:text-left md:text-left lg:text-center xl:text-center">
              <span className="text-1xl font-bold text-white md:text-2xl lg:text-6xl xl:text-6xl">
                Edison Devadoss
              </span>
              <h1 className="text-1xl text-white md:text-2xl md:text-white">
                Software Engineer
              </h1>
            </div>
            <div className="mx-10 flex items-center justify-center space-x-3">
              <a
                href={'https://medium.com/@edisondevadoss'}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="bg-white rounded-full w-4 h-4 flex items-center justify-center md:bg-white md:rounded-full md:w-8 md:h-8 md:flex md:items-center md:justify-center">
                  <FaMediumM className="text-grayDark text-sm md:text-1xl" />
                </div>
              </a>
              <a
                href={'https://www.linkedin.com/in/edison-devadoss-602207179/'}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="bg-white rounded-full w-4 h-4 flex items-center justify-center md:bg-white md:rounded-full md:w-8 md:h-8 md:flex md:items-center md:justify-center">
                  <FaLinkedin className="text-grayDark text-sm md:text-1xl" />
                </div>
              </a>

              <a
                href={'https://github.com/EdisonDevadoss'}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="bg-white rounded-full w-4 h-4 flex items-center justify-center md:bg-white md:rounded-full md:w-8 md:h-8 md:flex md:items-center md:justify-center">
                  <FaGithub className="text-grayDark text-sm text-1xl" />
                </div>
              </a>
            </div>
          </div>
          <div></div>
        </div>

        <div className="my-12 mx-8 md:my-12 md:mx-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <div className="text-grayDark">
                <span className="text-md md:text-2xl">
                  Edison <span className="text-green">Devadoss</span>
                </span>
              </div>
              <ul className="list-disc space-y-2 text-justify">
                <li className="text-black font-2xl text-sm md:text-base">
                  Hello! I’m Edison Devadoss. I am a full stack developer.
                </li>
                <li className="text-black font-2xl text-sm md:text-base">
                  I have 6+ years of experience in developing applications and
                  capable of meeting the project goals within the time
                  constraints.
                </li>
                <li className="text-black font-2xl text-sm md:text-base">
                  Experience in developing enterprise applications and
                  experience in Client-Server, Web-based using technologies like
                  ReactJS and expert in back end scripting using NodeJS.
                </li>
                <li className="text-black font-2xl text-sm md:text-base">
                  Experience in developing cross-platform mobile apps using
                  React Native.
                </li>
              </ul>

              <div className="mt-5">
                <button className="flex items-center justify-center shadow rounded-lg bg-white h-12 w-48 text-sm text-black md:h-14 md:w-44 md:text-1xl">
                  <a
                    href={require('../../assets/edison-resume.pdf')}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    DOWNLOAD RESUME
                  </a>
                </button>
              </div>
            </div>
            <div className="mt-6 md:w-1/2 md:ml-24">
              <div className="flex space-x-6 text-sm md:text-base">
                <p className="text-black">Email</p>
                <p className="text-grayDark text-center">
                  edisondevadoss@gmail.com
                </p>
              </div>
              <div className="flex space-x-4  text-sm md:text-base">
                <p className="text-black">Mobile</p>
                <p className="text-grayDark text-center">+9190434 87398</p>
              </div>
              <div className="flex space-x-4  text-sm md:text-base">
                <p className="text-black">Address</p>
                <p className="text-grayDark">Coimbatore, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
