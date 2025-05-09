document
  .querySelector('#web_bg')
  .setAttribute('style', `background-blend-mode: multiply;background-color: rgba(0,0,0,0.4);background-image: ${document.querySelector('.banner').style.background.split(' ')[0]};background-size: cover;background-position: center;position: fixed;width: 100vw;height: 100vh;z-index: -1;transform: translate(0px, 0px);`);
document
  .querySelector('#web_bg')
  .setAttribute('parallax', 'true')
document
  .querySelector("#banner")
  .setAttribute('style', 'background-image: url()')
document
  .querySelector("#banner .mask")
  .setAttribute('style', 'background-color:rgba(0,0,0,0)')