var newDiv = document.createElement("div");

newDiv.innerHTML = `
      <span id="time"></span>
      <script src="/js/time.js"></script>
`;

document.addEventListener("DOMContentLoaded", function() {
  var div1 = document.getElementsByClassName("statistics")[0];
  var div2 = document.getElementsByClassName("beian")[0];

  console.log(div1); 
  console.log(div2);  
 
  if (div1 && div2) {
    div1.parentNode.insertBefore(newDiv, div2);
  }
});