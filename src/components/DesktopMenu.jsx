import { Link } from "react-scroll";
import { useState } from "react";

const DeskTopMenu = () => {
  const [darkMode, setDorkMode] = useState(false);
  const handleMode = () => {
    setDorkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <ul className="hidden items-center sm:ml-6 sm:flex sm:space-x-8">
      <li>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className=" cursor-pointer hover:text-blue-400"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-400"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-400"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="education"
          smooth={true}
          duration={600}
          className="cursor-pointer hover:text-blue-400"
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={600}
          className="cursor-pointer hover:text-blue-400"
        >
          Contact
        </Link>
      </li>
      <button
        onClick={handleMode}
        className="ml-4 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded dark:bg-white dark:text-black"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </ul>
  );
};
export default DeskTopMenu;
