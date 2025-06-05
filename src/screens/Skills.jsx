const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Redux"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "RestFul API"],
    },
    {
      title: "Database & Control",
      skills: ["MongoDB", "Git", "GitHub"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gray-900 text-white py-16 px-4 sm:px-8 lg:px-16 sm:pt-26  dark:bg-white dark:text-black"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          My <span className="text-blue-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg  dark:bg-white dark:text-black"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-4 text-center">
                {category.title}
              </h3>
              <ul className="space-y-2 text-center ">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-lg font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
