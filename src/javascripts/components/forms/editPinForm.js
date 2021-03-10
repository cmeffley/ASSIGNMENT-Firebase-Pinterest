import selectBoard from './selectBoard';

const editPinForm = (object) => {
  document.querySelector('#modal-body').innerHTML = `<form id="edit-pin-form" class="mb-4">
  <div class="form-group">
    <label for="title">Pin Name</label>
    <input type="text" class="form-control" id="new-pin-name" aria-describedby="pinName" placeholder="Enter Pin Name" value="${object.title}" required>
  </div><br/>
  <div class="form-group">
    <label for="image">Add Picture</label>
    <input type="url" class="form-control" id="pinPicture" placeholder="Url" required value="${object.image}">
  </div><br/>
    </div>
    <div class="form-group" id="select-board">
    </div>
    <button type="submit" id="update-pin--${object.firebaseKey}" class="btn btn-primary">Update Pin</button>
</form>`;
  selectBoard(object);
};

export default editPinForm;
