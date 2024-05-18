import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo white.png";
import hamburger_menu from "../../assets/icons/hamburger_menu.png";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.scss";
import { Link } from "react-router-dom";

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
            <Link to={"/"} onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to={"about"} onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to={"projects"} onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link to={"/structure"} onClick={() => setOpen(false)}>
              Structure
            </Link>
            <Link to={"/membership"} onClick={() => setOpen(false)}>
              Membership
            </Link>
            <a href="#" onClick={() => setOpen(false)}>
              Clients
            </a>
          </nav>

          <p>
            Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem
            porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis
            neque reprehenderit.
          </p>

          <div className="socialMediaIcons">
            <a
              href="https://www.facebook.com/NatureFriends"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="socialIcons" />
            </a>

            <a
              href="https://www.instagram.com/naturefriendsaz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram className="socialIcons" />
            </a>

            <a
              href="https://www.facebook.com/NatureFriends"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="socialIcons" />
            </a>

            <a
              href="https://www.facebook.com/NatureFriends"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="socialIcons" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
