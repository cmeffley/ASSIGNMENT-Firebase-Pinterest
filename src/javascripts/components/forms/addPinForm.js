const addPinForm = () => {
  document.querySelector('#title').innerHTML = '';
  document.querySelector('#button').innerHTML = '';
  document.querySelector('#pins').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `<form id="new-pin-form" class="mb-4">
  <div class="form-group">
    <label for="title">Pin Name</label>
    <input type="text" class="form-control" id="new-pin-name" aria-describedby="pinName" placeholder="Enter Pin Name" required><br/>
    <label for="basic-url" class="form-label">Add Picture</label>
    <input type="text" class="form-control" id="pinPicture" placeholder="Url" required><br/>
  <button type="submit" id="submit-board" class="btn btn-outline-light">Submit Board</button>
</form>`;
};

export default addPinForm;
