const navBar = () => {
  document.querySelector('#navigation').innerHTML = `<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand title" href="#">FireBase Pinterest</a>
  <button 
    class="navbar-toggler" 
    type="button" 
    data-toggle="collapse" 
    data-target="#navbarNav" 
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" id="every-board">Boards<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
      <a class="nav-link" href="#" id="every-pin">Pins<span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <div id="logout-button"></div>
  </div>
</nav>`;
};

export default navBar;
