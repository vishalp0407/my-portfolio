import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisiblity = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisiblity);
    return () => window.removeEventListener("scroll", handleVisiblity);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition dark:bg-white dark:text-black"
        >
          <FaArrowUp className="text-xl  " />
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
