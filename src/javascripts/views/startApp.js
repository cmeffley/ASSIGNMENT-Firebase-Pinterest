import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
// import logoutButton from '../components/logoutButton';

const startApp = () => {
  domBuilder();
  navBar();
  // logoutButton(); button is overriding the other stuff
};

export default startApp;
