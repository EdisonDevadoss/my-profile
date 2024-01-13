import React from 'react';
import { FaGithub, FaLinkedin, FaMediumM } from 'react-icons/fa';

function Home() {
  return (
    <div className="mt-10">
      <div className="max-w-screen-xl mx-auto bg-white rounded-l shadow-md overflow-hidden md:max-w-screen-2xl">
        {/* Header */}
        <div className="flex bg-green justify-between items-center">
          {/* Photos */}
          <div className="m-10">
            <img
              className="h-54 w-64 object-cover -mb-16 md:w-64"
              src={require('../../img/edison.jpg')}
              alt=""
            />
          </div>
          <div>
            <div className="text-center">
              <h1 className="text-6xl font-bold text-white">Edison Devadoss</h1>
              <h1 className="text-2xl text-white">Software Engineer</h1>
            </div>
            <div className="mx-10 flex items-center justify-center space-x-3">
              <a
                href={'https://medium.com/@edisondevadoss'}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                  <FaMediumM className="text-grayDark text-1xl" />
                </div>
              </a>
              <a
                href={'https://www.linkedin.com/in/edison-devadoss-602207179/'}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                  <FaLinkedin className="text-grayDark text-1xl" />
                </div>
              </a>

              <a
                href={'https://github.com/EdisonDevadoss'}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                  <FaGithub className="text-grayDark text-1xl" />
                </div>
              </a>
            </div>
          </div>
          <div></div>
        </div>

        <div className="my-12 mx-10">
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <div className="text-grayDark">
                <span className="text-2xl">
                  Edison <span className="text-green">Devadoss</span>
                </span>
              </div>
              <ul className="list-disc space-y-2 text-justify">
                <li className="text-black font-2xl">
                  Hello! I’m Edison Devadoss. I am a full stack developer.
                </li>
                <li className="text-black font-2xl">
                  I have 6+ years of experience in developing applications and
                  capable of meeting the project goals within the time
                  constraints.
                </li>
                <li className="text-black font-2xl">
                  Experience in developing enterprise applications and
                  experience in Client-Server, Web-based using technologies like
                  ReactJS and expert in back end scripting using NodeJS.
                </li>
                <li className="text-black font-2xl">
                  Experience in developing cross-platform mobile apps using
                  React Native.
                </li>
              </ul>

              <div className="mt-5">
                <button className="flex items-center justify-center shadow rounded-lg bg-white h-14 w-44 text-black">
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
            <div className="w-1/2 ml-24">
              <div className="flex space-x-6 text-1xl">
                <p className="text-black">Email</p>
                <p className="text-grayDark text-center">
                  edisondevadoss@gmail.com
                </p>
              </div>
              <div className="flex space-x-4 text-1xl">
                <p className="text-black">Mobile</p>
                <p className="text-grayDark text-center">+9190434 87398</p>
              </div>
              <div className="flex space-x-4 text-1xl">
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
