import { getSingleBoard } from './boardData';
import { getAssociatedPins } from './pinData';

const seePinsOnBoard = (boardId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardId);
  const pins = getAssociatedPins(boardId);

  Promise.all([board, pins])
    .then(([boardResponse, pinResponse]) => resolve(
      { board: boardResponse, pins: pinResponse }
    ))
    .catch((error) => reject(error));
});

export default seePinsOnBoard;
