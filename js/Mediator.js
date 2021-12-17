import Refs from "./main.js";

function Mediator() {
  this.history = [];
  var R = Refs;
  var ajax = new XMLHttpRequest();
  let reqType = "GET";

  R.select.onchange = function () {
    reqType = this.value;
    console.log(reqType);
  };

  let start = 0;

  R.send.onclick = function (e) {
    e.preventDefault();
    let url1 = url.value;
    ajax.open(reqType, url1);
    start = window.performance.now();
    ajax.send();
  };

  ajax.onload = function () {
    console.log(this);
    R.response.innerHTML = JSON.stringify(
      JSON.parse(this.responseText),
      undefined,
      4
    );
    R.statustext.textContent = `Status: ${this.status}`;
    R.sizetext.textContent = `Size: ${this.responseText.length}`;
    console.log("djk");
  };

  let timeDifference = 0;
  ajax.onloadend = function () {
    R.timeDifference = Math.abs(window.performance.now() - start);
    R.timetext.textContent = `Time: ${millisToMilliSeconds(timeDifference)}`;
    console.log("djk");
  };
  
  function millisToMilliSeconds(millis) {
    var seconds = millis.toFixed("0000");
    return seconds;
  }
}

export default Mediator;