const domBuilder = () => {
  document.querySelector('#home').innerHTML = '';
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
    <div id="title"></div>
    <div id="button"></div>
    <div id="form-container"></div>
    <div id="see-cards"></div>
  </div>`;
};

export default domBuilder;
