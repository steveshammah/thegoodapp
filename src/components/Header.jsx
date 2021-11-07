import { navLinks } from "./database";
import { useContext, useEffect, useState } from "react";
import AppContext from "../contexts/app-context";
import { logos } from "../components/database";

const Header = ({ navActive }) => {
  const { activeUser, setNav } = useContext(AppContext);
  const [linkState, setLinkState] = useState("");
  useEffect(() => {
    setLinkState(activeUser.activeLink);
    return () => {};
    // eslint-disable-next-line
  }, []);

  const handleClick = (clicked) => {
    setNav(clicked);
    setLinkState(clicked);
  };

  return (
    <header>
      <a href='/' className='logo'>
        <img src={logos.logoBlue} alt='TGC_LOGO' />
      </a>

      <nav className={navActive ? "nav-active" : ""}>
        {navLinks.map((link) => {
          return (
            <a
              href={link.url}
              className={
                linkState === link.route
                  ? "nav-link nav-link-active"
                  : "nav-link"
              }
              key={link.url}
              onClick={() => handleClick(link.route)}>
              {link.route}
            </a>
          );
        })}
      </nav>

      {/* burger nav */}
      <div
        className='burger-nav' //onClick={setNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
