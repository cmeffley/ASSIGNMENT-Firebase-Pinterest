import selectBoard from './selectBoard';

const addPinForm = () => {
  document.querySelector('#title').innerHTML = '';
  document.querySelector('#button').innerHTML = '';
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#pins').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `<form id="new-pin-form" class="mb-4">
  <div class="form-group">
    <label for="title">Pin Name</label>
    <input type="text" class="form-control" id="new-pin-name" aria-describedby="pinName" placeholder="Enter Pin Name" required><br/>
    <label for="basic-url" class="form-label">Add Picture</label>
    <input type="text" class="form-control" id="pinPicture" placeholder="Url" required><br/>
    </div>
    <div class="form-group" id="select-board-drop">
    </div>
    <button type="submit" id="submit-pin" class="btn btn-outline-light">Submit Pin</button>
</form>`;

  selectBoard();
};

export default addPinForm;
