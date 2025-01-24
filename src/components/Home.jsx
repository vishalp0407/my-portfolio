import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold">
        Hi, I'm <span className="text-yellow-300">[Your Name]</span>
      </h1>
      <p className="text-lg md:text-xl mt-4">
        A passionate <span className="font-semibold">Web Developer</span>{" "}
        building modern, responsive websites.
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-yellow-300 text-gray-800 rounded-lg shadow-lg text-lg hover:bg-yellow-400 transition duration-300"
      >
        View My Work
      </a>
    </section>
  );
};

export default Home;
