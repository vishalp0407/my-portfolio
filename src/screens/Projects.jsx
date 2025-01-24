const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "I developed a fully functional e-commerce website designed for seamless user experience and effcient performance. The project integrates modern technologies to handle everything from user interaction to data",
      demoLink: "project-link",
      repoLink: "https://github.com/vishalp0407",
    },
  ];
  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-16  dark:bg-white dark:text-black"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-10">
          My <span className="text-blue-400">Projects</span>
        </h2>

        {/* Project Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-1  sm:px-28 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 px-30 dark:bg-white dark:text-black "
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                {project.title}
              </h3>
              {/* Project Description */}
              <p className="text-lg mb-4">{project.description}</p>
              {/* Project Links */}
              <div className="flex justify-between">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
