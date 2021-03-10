import { createBoard } from '../../helpers/data/boardData';
import { deleteBoardAndPins, seePinsOnBoard } from '../../helpers/data/boardPinData';
import { createPin, deletePins } from '../../helpers/data/pinData';
import boardInfo from '../boardInfo';
import { showBoards } from '../boards';
import addBoardForm from '../forms/addBoardForm';
import addPinForm from '../forms/addPinForm';
import { showPins } from '../pins';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // Show Pins and also Board in the title
    if (e.target.id.includes('board-name-title')) {
      const boardId = e.target.id.split('--')[1];

      seePinsOnBoard(boardId).then((boardPinObject) => {
        showPins(boardPinObject.pins);
        boardInfo(boardPinObject.board);
      });
    }

    // DELETE PINS ONLY
    if (e.target.id.includes('delete-pin')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deletePins(firebaseKey).then((pinsArray) => showPins(pinsArray));
      }
    }

    // DELETE BOARDS AND PINS
    if (e.target.id.includes('delete-board')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteBoardAndPins(firebaseKey, uid).then((boardsArray) => showBoards(boardsArray));
      }
    }
    // OPEN NEW BOARD FORM
    if (e.target.id.includes('add-board-btn')) {
      addBoardForm();
    }
    // OPEN NEW PIN FORM
    if (e.target.id.includes('add-pin-btn')) {
      addPinForm();
    }
    // GET DATA TO CREATE NEW BOARD
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        board_title: document.querySelector('#new-board-name').value,
        image: document.querySelector('#boardPicture').value,
        uid
      };
      createBoard(boardObject, uid).then((boardArray) => showBoards(boardArray));
    }

    // GET DATA TO CREATE NEW PIN
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        title: document.querySelector('#new-pin-name').value,
        image: document.querySelector('#pinPicture').value,
        board_id: document.querySelector('#board-select').value,
        uid
      };
      createPin(pinObject, uid).then((pinArray) => showPins(pinArray));
    }
  });
};

export default domEvents;
