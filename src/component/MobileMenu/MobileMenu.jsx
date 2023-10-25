import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import MenuComponent from "Component/Menu/Menu.component";
import "./MobileMenu.style.scss";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="MobileMenu">
      <div className="MobileMenu__MenuIcon" onClick={toggleMenu}>
        {isMenuOpen ? "❌" : "☰"}
      </div>
      <div
        className={`MobileMenu__MenuWrapper ${
          isMenuOpen ? "MobileMenu__MenuWrapper--isOpen" : ""
        }`}
      >
        <div className="MobileMenu__MenuOverlay" onClick={toggleMenu} />
        <div className="MobileMenu__Menu">
          <MenuComponent closeMenu={toggleMenu} isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
