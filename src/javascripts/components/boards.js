const showBoards = (array) => {
  document.querySelector('#home').innerHTML = '';
  document.querySelector('#title').innerHTML = '<h1>BOARDS</h1>';
  document.querySelector('#all-boards').innerHTML = '';
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#pins').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#all-boards').innerHTML += `<div class="card">
    <img class="card-top-img" src=${item.image} alt=${item.board_title} style="height: 300px;">
    <div class="card-body" style="height: 150px;">
    <a href="#"><h4 class="board-title">${item.board_title}</h4></a>
    <hr>
    <button class="btn btn-danger" id="delete-board">Delete Board</button>
    </div>
    </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#all-boards').innerHTML = '<h1>No Boards</h1>';
};

export { showBoards, emptyBoards };
