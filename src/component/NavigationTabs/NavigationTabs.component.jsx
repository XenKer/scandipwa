import { NavigationTabsComponent as SourceNavigationTabsComponent } from "SourceComponent/NavigationTabs/NavigationTabs.component";

class NavigationTabsComponent extends SourceNavigationTabsComponent {
  renderMap = {
    home: this.renderHomeButton.bind(this),
    account: this.renderAccountButton.bind(this),
    minicart: this.renderMinicartButton.bind(this),
  };
}

export default NavigationTabsComponent;
