const domBuilder = () => {
  document.querySelector('#home').innerHTML = '';
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container>
    <div id="all-boards"><h1>BOARDS</h1></div>
    <div id="boards">
      <div id="pins"></div>
    </div>
  </div>`;
};

export default domBuilder;
