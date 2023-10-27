import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import MenuComponent from "Component/Menu/Menu.component";
import MenuPage from "@scandipwa/scandipwa/src/route/MenuPage";
import MenuIconComponent from "@scandipwa/scandipwa/src/component/MenuIcon/MenuIcon.component";
import "./MobileMenu.style.scss";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="MobileMenu">
      <div className="MenuIcon" onClick={toggleMenu}>
        <MenuIconComponent isActive={isMenuOpen} />
      </div>
      <div
        className={`MobileMenu__MenuWrapper ${
          isMenuOpen ? "MobileMenu__MenuWrapper--isOpen" : ""
        }`}
      >
        <div className="MobileMenu__MenuOverlay" onClick={toggleMenu} />
        <div className="MobileMenu__Menu">
          <button className="MobileMenu__CloseButton" onClick={toggleMenu}>
            X
          </button>
          <MenuPage closeMenu={toggleMenu} isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
