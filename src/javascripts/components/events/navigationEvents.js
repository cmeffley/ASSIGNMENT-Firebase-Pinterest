import { getAllBoards } from '../../helpers/data/boardData';
import { getAllPins } from '../../helpers/data/pinData';
import { emptyBoards, showBoards } from '../boards';
import { emptyPins, showPins } from '../pins';

const navigationEvents = (uid) => {
  // GO TO ALL BOARDS
  document.querySelector('#every-board').addEventListener('click', () => {
    getAllBoards(uid).then((boardArray) => {
      if (boardArray.length) {
        showBoards(boardArray);
      } else {
        emptyBoards();
      }
    });
  });

  // GO TO ALL PINS
  document.querySelector('#every-pin').addEventListener('click', () => {
    getAllPins(uid).then((pinArray) => {
      if (pinArray.length) {
        showPins(pinArray);
      } else {
        emptyPins();
      }
    });
  });
};

export default navigationEvents;
