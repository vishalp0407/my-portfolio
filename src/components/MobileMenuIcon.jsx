import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const MobileMenuIcon = ({ isOpen, setIsOpen }) => {
  return (
    <button className="block sm:hidden " onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <XMarkIcon className=" absolute top-4 right-4 focus:outline-none h-6 w-6 text-white dark:bg-white dark:text-black " />
      ) : (
        <Bars3Icon className="h-6 w-6 text-white dark:bg-white dark:text-black" />
      )}
    </button>
  );
};
export default MobileMenuIcon;
