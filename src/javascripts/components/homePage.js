const homePage = () => {
  document.querySelector('#home-nav').innerHTML = `<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
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
  <div class="collapse navbar-collapse" id="navbarNav"></div>
</nav>`;
  document.querySelector('#site-title').innerHTML = '<h1>PINTEREST</h1>';
};
export default homePage;
