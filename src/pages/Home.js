import React from "react";
import Layout from "../components/Layout";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaReact,
  FaAngular,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiGoland } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

// for animation lotte animations
function Home() {
  return (
    <Layout>
      <div>
        <div className="bg-theme h-screen">
          <div
            className="grid bg-theme md:grid-cols-1 grid-cols-2 h-screen items-center md:border-0 border-4
           border-white mx-10 transform rotate-12 md:rotate-0"
          >
            <div className="h-1/2">
              <lottie-player
                src="https://assets2.lottiefiles.com/private_files/lf30_WdTEui.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="font-bold text-white md:px-5">
              <h1 className="text-7xl md:4xl">
                Hi I am <b className="text-blue-200">VIJESH</b>
              </h1>
              <h1 className="text-4xl md:text-2xl">
                Am a <b className="text-red-500">React Developer</b>
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h1 className="text-4xl text-blue-800 font-bold text-center my-8">
            Technologies I Use
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-4 z-10">
            <FaReact
              size={180}
              className="text-cyan-400 w-full text-center mt-20 animate-bounce"
            />
            <FaBootstrap
              size={180}
              color="#EC1801"
              className="w-full text-center mt-20 animate-pulse"
            />
            <FaCss3
              size={180}
              color="#1B6AC6"
              className=" w-full text-center mt-20 animate-pulse"
            />
            <FaHtml5
              size={180}
              color="#FB7A24"
              className=" w-full text-center mt-20 animate-bounce"
            />
            <SiGoland
              size={180}
              color="#CC0000"
              className=" w-full text-center mt-20 animate-pulse"
            />
            <SiTailwindcss
              size={180}
              color="#FB7A24"
              className=" w-full text-center mt-20 animate-bounce"
            />
            <SiJavascript
              size={180}
              color="#FDC72E"
              className=" w-full text-center mt-20 animate-bounce"
            />
            <DiNodejs
              size={180}
              color="#3C873A"
              className=" w-full text-center mt-20 animate-pulse"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
