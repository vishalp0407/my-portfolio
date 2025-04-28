const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "Designed and developed a high-performance, feature-rich e-commerce web application that provides a fast, secure, and efficient shopping experience. The platform includes advanced product search, category-based filtering, and real-time updates, ensuring smooth navigation and easy product discovery. Built with a modern UI and optimized backend, it guarantees secure transactions, interactive user engagement, and high-speed performance. With a scalable architecture and full responsiveness, the application offers a flawless shopping experience across all devices.",
      demoLink: "project-link",
      repoLink: "https://github.com/vishalp0407/E-commerce",
    },
    {
      title: "Movies-Website",
      description:
        "I developed a fully responsive and dynamic movies web application that offers an immersive experience for users. The platform allows seamless browsing, searching, and filtering of movies with real-time updates and smooth navigation. It features a modern UI, optimized performance, and interactive elements for an engaging experience. With efficient data handling and responsive design, the application ensures a flawless experience across all devices",
      demoLink: "project-link",
      repoLink: "https://github.com/vishalp0407/Movies-Application",
    },
  ];
  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-16  dark:bg-white dark:text-black"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          My <span className="text-blue-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-28 gap-10 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 px-30 dark:bg-white dark:text-black "
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                {project.title}
              </h3>

              <p className="text-lg mb-4">{project.description}</p>

              <div className="flex justify-between">
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
