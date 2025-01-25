const Education = () => {
  const educationDetails = [
    {
      degree: "Bachelor of Computer Application",
      college: "Tilak Maharashtra Vidyapeeth ",
      year: "2024",
    },
    {
      degree: "HSC",
      college: "National Public Welfare Inter College",
      year: "2021",
    },
    {
      degree: "SSC",
      college: "R B C M P I College ",
      year: "2019",
    },
  ];
  return (
    <section
      id="education"
      className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-16  dark:bg-white dark:text-black"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          My <span className="text-blue-400">Education</span>
        </h2>
        <div className="space-y-6">
          {educationDetails.map((education, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-lg shadow-lg dark:bg-white dark:text-black"
            >
              <h3 className="text-2xl font-semibold text-blue-400">
                {education.degree}
              </h3>
              <p className="text-lg">{education.college}</p>
              <p className="text-sm text-gray-400">{education.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
