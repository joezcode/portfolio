import { useState } from "react";
import './Navigation.css';
import Link from "./Link";

function Navigation() {

  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const addNavigationShadow = () => {
    let elementPosition = document.querySelector(".Home-message").getBoundingClientRect().top;
    window.scrollY > elementPosition ? setIsScrolled(true) : setIsScrolled(false);
  }

  window.onscroll = () => {
    addNavigationShadow();
  };

  const logo = <span className="Nav-logo">jw.code</span>
  
  const pages = ['Home', 'Projects', 'About', 'Contact']
  const navLinks = pages.map(item => {
    return (
      <li className={`Navigation-element Nav-el-${item.toLowerCase()}`} key={`Nav-el-${item.toLowerCase()}`}>
        <Link to={item} value={item} />
      </li>
    )
  });

  const mobileNavLinks = pages.map(item => {
    return (
      <li className={`Mobile-nav-element Mob-el-${item.toLowerCase()}`} key={`Mob-el-${item.toLowerCase()}`}>
        <Link to={item} value={item} />
      </li>
    )
  });

  return (
      <div className={`Header ${isScrolled ? "header-shadow" : ""}`}>
        <div className="Header-wrap">

          <Link to="Home" value={logo} />   

          <nav className="Navigation">
            <ul>
              {navLinks}
            </ul>
          </nav>
          
          <nav className="Mobile-nav">
            <div onClick={() => setOpen(!isOpen)} className={`Hamburger ${isOpen ? "open" : "close"}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={`Hamburger-panel ${isOpen ? "open" : "close"}`}>
              <ul>
                {mobileNavLinks}
              </ul>
            </div>
          </nav>

        </div>
      </div>
  );
}

export default Navigation;
