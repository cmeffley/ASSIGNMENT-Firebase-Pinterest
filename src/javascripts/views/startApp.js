import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import logoutButton from '../components/logoutButton';
import homePageBuilder from '../components/homePageBuilder';
import homePage from '../components/homePage';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
};

const startHomepage = () => {
  homePageBuilder();
  homePage();
};

export { startApp, startHomepage };
