import firebase from 'firebase/app';
import 'firebase/auth';
import { getAllBoards } from '../../helpers/data/boardData';

const selectBoard = (boardObject = {}) => {
  let domString = `<label for="board">Select a Board</label>
    <select class="form-control" id="board-select" required>
    <option value="">Select a Board</option>`;

  getAllBoards(firebase.auth().currentUser.uid).then((boardArray) => {
    boardArray.forEach((item) => {
      if (item.firebaseKey === boardObject.board_id) {
        domString += `<option selected value="${item.firebaseKey}">${item.board_title}</option>`;
      } else {
        domString += `<option value="${item.firebaseKey}">${item.board_title}</option>`;
      }
    });

    domString += '</select>';

    document.querySelector('#select-board').innerHTML = domString;
  });
};

export default selectBoard;
