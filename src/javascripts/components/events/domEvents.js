import seePinsOnBoard from '../../helpers/data/boardPinData';
import boardInfo from '../boardInfo';
import { showPins } from '../pins';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Show Pins and also Board in the title
    if (e.target.id.includes('board-name-title')) {
      const boardId = e.target.id.split('--')[1];

      seePinsOnBoard(boardId).then((boardPinObject) => {
        showPins(boardPinObject.pins);
        boardInfo(boardPinObject.board);
      });
    }
  });
};

export default domEvents;
