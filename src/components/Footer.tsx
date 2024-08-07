import React from "react";
import "../Styles/Footer/footer.scss";
import Logo from "./Logo";

const Footer = () => {
  return (
    <section className="footer">
      <ul className="footer__list">
        <li>HOME</li>
        <li>SHOP</li>
        <li>PRODUCT</li>
        <li>CONTACT</li>
        <li>BLOG</li>
      </ul>
      <div className="footer__address">
        <div className="footer__Logo">
          <Logo />
        </div>
        <p className="address">
          200 Madison Ave Str, Floor 25th, New York, NY 10010 , USA
        </p>
        <p className="tel">(+0024)-222-333-4444</p>
        <p className="email">hello@sneakersville.com</p>
      </div>
      <p className="footer__copyright">
        Copyright © 2023 SneakersVille | Built by Emmanuel Eze
      </p>
    </section>
  );
};

export default Footer;
