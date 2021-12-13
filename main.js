var ajax = new XMLHttpRequest();

const send = document.getElementById("send");
const url = document.getElementById("url");
const response = document.getElementById("response");

send.onclick = function() {
    let url1 = url.value;
    ajax.open("GET" , url1);
    ajax.send();
}

ajax.onload = function() {
    console.log(this)
    response.innerHTML = JSON.stringify(JSON.parse(this.responseText) , undefined , 4);
}