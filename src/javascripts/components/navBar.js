const navBar = () => {
  document.querySelector('#login-form-container').innerHTML = `<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">FireBase Pinterest</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#" id="all-boards">Boards<span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <div id="logout-button"></div>
  </div>
</nav>`;
};

export default navBar;
