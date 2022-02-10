import React from "react";
import Layout from "../components/Layout";
// for animation lotte animations
function Home() {
  return (
    <Layout>
      <div>
        <div className="bg-theme h-screen">
          <div className="grid md:grid-cols-1 grid-cols-2 h-screen items-center ">
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
      </div>
    </Layout>
  );
}

export default Home;
