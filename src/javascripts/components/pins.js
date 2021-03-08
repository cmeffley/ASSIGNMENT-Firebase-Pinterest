const showPins = (array) => {
  document.querySelector('#home').innerHTML = '';
  document.querySelector('#title').innerHTML = '';
  document.querySelector('#all-boards').innerHTML = '';
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#pins').innerHTML = '';

  array.forEach((element) => {
    document.querySelector('#pins').innerHTML += `<div class="card">
    <img class="card-top-img" src=${element.image} alt=${element.board_title} style="height: 300px;">
    <div class="card-body" style="height: 150px;">
    <h4 class="board-title">${element.title}</h4>
    <hr>
    <button class="btn btn-danger" id="delete-board">Delete Board</button>
    </div>
    </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#pins').innerHTML = '<h1>No Pins</h1>';
};

export { showPins, emptyPins };
