document
  .querySelector('#web_bg')
  .setAttribute('style', `background-blend-mode: multiply;background-color: rgba(0,0,0,0.4);background-image: ${document.querySelector('.banner').style.background.split(' ')[0]};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);
document
  .querySelector("#banner")
  .setAttribute('style', 'background-image: url()')
document
  .querySelector("#banner .mask")
  .setAttribute('style', 'background-color:rgba(0,0,0,0)')