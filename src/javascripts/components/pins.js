const showPins = (array) => {
  document.querySelector('#title').innerHTML = '<h1>PINS</h1>';
  document.querySelector('#button').innerHTML = '<button class="btn btn-outline-light" id="add-pin-btn">Add A Pin</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#see-cards').innerHTML = '';

  array.forEach((element) => {
    document.querySelector('#see-cards').innerHTML += `<div class="card border-danger" id="pin-style">
    <img class="card-top-img" src=${element.image} alt=${element.board_title} style="height: 300px;">
    <div class="card-body" style="height: 150px;">
    <h4 class="board-title">${element.title}</h4>
    <hr>
    <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-pin-btn--${element.firebaseKey}">Change Boards</button>
    <button class="btn btn-danger" id="delete-pin--${element.firebaseKey}">Delete Pin</button>
    </div>
    </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#title').innerHTML = '';
  document.querySelector('#button').innerHTML = '<button class="btn btn-outline-light" id="add-pin-btn">Add A Pin</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#see-cards').innerHTML = '<h1>No Pins</h1>';
};

export { showPins, emptyPins };
