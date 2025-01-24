const MenuItemMobile = ({ url, label, closeMenu }) => {
  <ul className="flex flex-col items-center bg-gray-800 text-white py-4 md:hidden">
    <li>
      <a
        href={url}
        className="hover:text-blue-400 py-2"
        onClick={() => closeMenu(false)}
      >
        {label}
      </a>
    </li>
  </ul>;
};
export default MenuItemMobile;
