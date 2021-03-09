import { deleteBoards, getSingleBoard } from './boardData';
import { deletePins, getAssociatedPins } from './pinData';

// GET PINS ASSOCIATED WITH BOARD
const seePinsOnBoard = (boardId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardId);
  const pins = getAssociatedPins(boardId);

  Promise.all([board, pins])
    .then(([boardResponse, pinResponse]) => resolve(
      { board: boardResponse, pins: pinResponse }
    ))
    .catch((error) => reject(error));
});

// DELETE BOARD AND ASSOCIATED PINS
const deleteBoardAndPins = (boardId, uid) => new Promise((resolve, reject) => {
  getAssociatedPins(boardId).then((boardPinArray) => {
    const deletepins = boardPinArray.map((pins) => deletePins(pins.firebaseKey));

    Promise.all(deletepins).then(() => resolve(deleteBoards(boardId, uid)));
  }).catch((error) => reject(error));
});

export { seePinsOnBoard, deleteBoardAndPins };
