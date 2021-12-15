var ajax = new XMLHttpRequest();

const send = document.getElementById("send");
const url = document.getElementById("url");
const response = document.getElementById("response");
const select = document.getElementById("req-type");
const statustext = document.getElementById("status");
const timetext = document.getElementById("time");
const sizetext = document.getElementById("size");

let reqType = 'GET';

select.onchange = function() {
    reqType = this.value;
    console.log(reqType)
}

let start = 0;
send.onclick = function(e) {
    e.preventDefault();
    let url1 = url.value;
    ajax.open( reqType , url1);
    start = window.performance.now();
    ajax.send();
    
}




ajax.onload = function() {
    
    console.log(this)
    response.innerHTML = JSON.stringify(JSON.parse(this.responseText) , undefined , 4);
    statustext.textContent = `Status: ${this.status}`;
    
    sizetext.textContent = `Size: ${this.responseText.length}`;
    console.log("djk")
}

let timeDifference = 0;
ajax.onloadend = function() {
    timeDifference = Math.abs(window.performance.now()- start);
    timetext.textContent = `Time: ${millisToMilliSeconds(timeDifference)}`;
    console.log("djk")
};

function millisToMilliSeconds(millis) {
    var seconds = millis//.toFixed(0000);//((millis % 60000).toFixed(0000));
    return seconds;
}

function Mediator() {
    this.history = [];
}

export default Mediator;