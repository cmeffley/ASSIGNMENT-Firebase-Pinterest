const boardInfo = (boardObject) => {
  document.querySelector('#title').innerHTML = `<h1>${boardObject.board_title}</h1>`;
};

export default boardInfo;
