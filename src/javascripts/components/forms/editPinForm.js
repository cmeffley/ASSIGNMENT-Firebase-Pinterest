import selectBoard from './selectBoard';

const editPinForm = (object) => {
  document.querySelector('#modal-body').innerHTML = `<form id="edit-pin-form" class="mb-4">
  <div class="form-group">
    </div>
    <div class="form-group" id="select-board-drop">
    </div>
    <button type="submit" id="update-pin--${object.firebaseKey}" class="btn btn-primary">Update Pin</button>
</form>`;
  selectBoard(object);
};

export default editPinForm;
