import React, { useEffect } from "react";
import "../Styles/Header/header.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="header">
      <div className="header__content" data-aos="fade-right">
        <p className="header-title">
          <strong>Quality</strong> Sneakers always.
        </p>
        <p>Get the best quality sneakers right here on sneakersVille</p>
      </div>
    </section>
  );
};

export default Header;
