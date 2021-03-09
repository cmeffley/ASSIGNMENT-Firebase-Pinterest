import seePinsOnBoard from '../../helpers/data/boardPinData';
import { getAssociatedPins } from '../../helpers/data/pinData';
import boardInfo from '../boardInfo';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Show Pins and also Board in the title
    if (e.target.id.includes('board-name-title')) {
      const boardId = e.target.id.split('--')[1];
      console.warn(boardId);
      seePinsOnBoard(boardId).then((boardPinObject) => {
        getAssociatedPins(boardPinObject.pin);
        boardInfo(boardPinObject.board);
      });
    }
  });
};

export default domEvents();
