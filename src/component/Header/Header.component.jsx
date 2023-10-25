import { isMobile } from "react-device-detect";
import {
  CartOverlay,
  MyAccountOverlay,
  HeaderComponent as SourceHeaderComponent,
} from "SourceComponent/Header/Header.component";
import MobileMenu from "Component/MobileMenu/MobileMenu";
import "./Header.override.style";

export { CartOverlay, MyAccountOverlay };

/** @namespace scandipwaproject/Component/Header/Component */
class HeaderComponent extends SourceHeaderComponent {
  renderMap = {
    cancel: this.renderCancelButton.bind(this),
    back: this.renderBackButton.bind(this),
    close: this.renderCloseButton.bind(this),
    title: this.renderTitle.bind(this),
    logo: this.renderLogo.bind(this),
    search: this.renderSearchField.bind(this),
    renderDesktopIcons: this.renderDesktopIcons.bind(this),
    share: this.renderShareWishListButton.bind(this),
    ok: this.renderOkButton.bind(this),
    mobileMenu: this.renderMobileMenu.bind(this),
  };
  renderMobileMenu() {
    return <h1>dsa</h1>;
  }
}

export default HeaderComponent;
