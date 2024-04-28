import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo white.png";
import hamburger_menu from "../../assets/icons/hamburger_menu.png";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import behance from "../../assets/icons/behance.png";
import instagram from "../../assets/icons/instagram.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.scss";

const Header = () => {
  const [colorChange, setColorChange] = useState(false);
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);

  const scrollThreshold = 150;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos >= scrollThreshold) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    AOS.init({
      duration: 1200,
    });

    window.addEventListener("resize", () => {
      AOS.refresh();
    });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (open) {
      AOS.refresh();
    }
  }, [open]);

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  return (
    <>
      <header>
        <div className="left" data-aos="fade-down">
          <img src={Logo} alt="logo" />
        </div>

        <div
          className={colorChange ? "right colorChange" : "right"}
          onClick={() => setOpen(true)}
        >
          <p> MENU </p>
          <img src={hamburger_menu} alt="menu" />
        </div>
      </header>

      <div id="drawer" className={open ? "open" : "closed"} ref={drawerRef}>
        <div className={open ? "drawerContent  open" : "drawerContent closed"}>
          <div className="head">
            <h4>NAVIGATION</h4>
            <div className="closeIcon" onClick={() => setOpen(false)}>
              x
            </div>
          </div>

          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <a href="#">Works</a>
            <a href="#">Clients</a>
          </nav>

          <p>
            Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem
            porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis
            neque reprehenderit.
          </p>

          <div className="socialMediaIcons">
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>

            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="facebook" />
            </a>

            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="facebook" />
            </a>

            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={behance} alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
