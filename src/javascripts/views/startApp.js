import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import logoutButton from '../components/logoutButton';
import homePageBuilder from '../components/homePageBuilder';
import homePage from '../components/homePage';
import { emptyBoards, showBoards } from '../components/boards';
import { getAllBoards } from '../helpers/data/boardData';
import domEvents from '../components/events/domEvents';
// import { getAllPins } from '../helpers/data/pinData';
// import { emptyPins, showPins } from '../components/pins';
import navigationEvents from '../components/events/navigationEvents';

const startApp = (userObject) => {
  domBuilder();
  domEvents(userObject.uid);
  navBar();
  logoutButton();
  navigationEvents();
  getAllBoards(userObject.uid).then((response) => {
    if (response.length) {
      showBoards(response);
    } else {
      emptyBoards();
    }
  });
  // getAllPins(userObject.uid).then((response) => {
  //   if (response.length) {
  //     showPins(response);
  //   } else {
  //     emptyPins();
  //   }
  // });
};

const startHomepage = () => {
  homePageBuilder();
  homePage();
};

export { startApp, startHomepage };
