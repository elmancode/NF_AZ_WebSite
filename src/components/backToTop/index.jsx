import React, { useEffect, useState } from "react";
import "./index.scss";
import { FaAngleUp } from "react-icons/fa";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const backToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="backToTop">
      {showButton ? (
        <button onClick={backToTop}>
          <FaAngleUp className="icon" />
        </button>
      ) : null}
    </div>
  );
};

export default BackToTop;
