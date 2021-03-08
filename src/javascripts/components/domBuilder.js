const domBuilder = () => {
  document.querySelector('#home').innerHTML = '';
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
    <div id="title"></div>
    <div id="all-boards"></div>
    <div id="boards"></div>
    <div id="pins"></div>
  </div>`;
};

export default domBuilder;
