import { useState } from "react";
import Logo from "./Logo";
import DeskTopMenu from "./DesktopMenu";
import MobileMenuIcon from "./MobileMenuIcon";
import MobileMenu from "./MobileMenu";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" relative bg-gray-800 text-white w-full shadow-lg z-50 dark:bg-white dark:text-black">
      <nav className="flex justify-between items-center py-4 px-6">
        <Logo />
        <DeskTopMenu />
        <MobileMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
      {isOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
