const showBoards = (array) => {
  document.querySelector('#home').innerHTML = '';
  document.querySelector('#title').innerHTML = '<h1>BOARDS</h1>';
  document.querySelector('#button').innerHTML = '<button class="btn btn-outline-light" id="add-board-btn">Add A Board</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#pins').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#boards').innerHTML += `<div class="card">
    <img class="card-top-img" src=${item.image} alt=${item.board_title} style="height: 300px;">
    <div class="card-body" style="height: 150px;">
    <a href="#"><h4 id="board-name-title--${item.firebaseKey}" class="board-title">${item.board_title}</h4></a>
    <hr>
    <button class="btn btn-danger" id="delete-board--${item.firebaseKey}">Delete Board</button>
    </div>
    </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#button').innerHTML = '<button class="btn btn-outline-light" id="add-board-btn">Add A Board</button>';
  document.querySelector('#boards').innerHTML = '<h1>No Boards</h1>';
};

export { showBoards, emptyBoards };
