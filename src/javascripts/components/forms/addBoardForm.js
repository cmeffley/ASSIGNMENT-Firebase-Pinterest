const addBoardForm = () => {
  document.querySelector('#title').innerHTML = '';
  document.querySelector('#button').innerHTML = '';
  document.querySelector('#see-cards').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `<form id="new-board-form" class="mb-4">
  <div class="form-group">
    <label for="title">Board Name</label>
    <input type="text" class="form-control" id="new-board-name" aria-describedby="boardName" placeholder="Enter Board Name" required><br/>
    <label for="basic-url" class="form-label">Add Picture</label>
    <input type="text" class="form-control" id="boardPicture" placeholder="Url" required><br/>
  <button type="submit" id="submit-board" class="btn btn-outline-light">Submit Board</button>
</form>`;
};

export default addBoardForm;
