// import MenuItemMobile from "./MenuItemMobile";
import { Link } from "react-scroll";
import { useState } from "react";

const MobileMenu = ({ setIsOpen }) => {
  const [darkMode, setDorkMode] = useState(false);
  const handleMode = () => {
    setDorkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <>
      {/* <MenuItemMobile url="#home" label="Home" closeMenu={setIsOpen} />
      <MenuItemMobile url="#about" label="About" closeMenu={setIsOpen} />
      <MenuItemMobile url="#projects" label="Project" closeMenu={setIsOpen} />
      <MenuItemMobile url="#contact" label="Contact" closeMenu={setIsOpen} /> */}

      <ul className="flex flex-col items-center bg-gray-800 text-white py-4 md:hidden dark:bg-white dark:text-black ">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-blue-400 py-2"
            onClick={setIsOpen}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-blue-400 py-2"
            onClick={setIsOpen}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-blue-400 py-2"
            onClick={setIsOpen}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="education"
            className="hover:text-blue-400 py-2"
            onClick={setIsOpen}
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className="hover:text-blue-400 py-2"
            onClick={setIsOpen}
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
    </>
  );
};

export default MobileMenu;
