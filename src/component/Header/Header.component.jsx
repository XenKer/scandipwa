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
export class HeaderComponent extends SourceHeaderComponent {
  render() {
    return (
      <div>
        {super.render()}
        {isMobile && <MobileMenu />}
      </div>
    );
  }
}

export default HeaderComponent;
