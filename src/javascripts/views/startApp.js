import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import logoutButton from '../components/logoutButton';
import homePageBuilder from '../components/homePageBuilder';
import homePage from '../components/homePage';
import { emptyBoards, showBoards } from '../components/boards';
import getAllBoards from '../helpers/data/boardData';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  getAllBoards().then((response) => {
    if (response.length) {
      showBoards(response);
    } else {
      emptyBoards();
    }
  });
};

const startHomepage = () => {
  homePageBuilder();
  homePage();
};

export { startApp, startHomepage };
