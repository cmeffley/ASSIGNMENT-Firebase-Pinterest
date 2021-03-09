import { getSingleBoard } from './boardData';
import { getAssociatedPins } from './pinData';

const seePinsOnBoard = (boardId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardId);
  const pin = getAssociatedPins(boardId);

  Promise.all([board, pin])
    .then(([boardResponse, pinResponse]) => resolve(
      { board: boardResponse, pin: pinResponse }
    ))
    .catch((error) => reject(error));
});

export default seePinsOnBoard;
