const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="main-container>
    <div id="all-boards"></div>
    <div id="boards">
      <div id="pins"></div>
    </div>
  </div>`;
};

export default domBuilder;
