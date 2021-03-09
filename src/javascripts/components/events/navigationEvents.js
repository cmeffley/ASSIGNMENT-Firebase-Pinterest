import getAllBoards from '../../helpers/data/boardData';
import { emptyBoards, showBoards } from '../boards';

const navigationEvents = (uid) => {
  // ALL CARDS
  document.querySelector('#every-board').addEventListener('click', () => {
    getAllBoards(uid).then((boardArray) => {
      if (boardArray.length) {
        showBoards(boardArray);
      } else {
        emptyBoards();
      }
    });
  });
};

export default navigationEvents();
