var newDiv = document.createElement("div");

newDiv.innerHTML = `
      <span id="time"></span>
      <script src="/js/time.js"></script>
      `;

document.addEventListener("DOMContentLoaded", function() {
  var target = document.getElementsByClassName("footer-content")[0];

  if (target) {
    target.parentNode.insertBefore(newDiv, target);
  }
});