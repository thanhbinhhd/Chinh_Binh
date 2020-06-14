const yourDate = new Date("2020-05-15T03:30:00"),
music = ['ido'];

document.addEventListener('DOMContentLoaded', function(){
      var rootTime = document.querySelector("time");

      document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;

      document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+" DAYS";

      function olock() {
            var today = new Date(),
            hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yourDate) / 1000) % 60;
            rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
      } olock();
      var timer = setInterval(function(){olock()}, 1000);

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);

var i=0;
var j = 0;
var k = 0;
var hello = "Chào Chocopie của anh!!!";
var content = "Vậy là mình đã yêu nhau được " + Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) + " ngày rồi. Thời gian qua có những lúc vui, buồn hay giận dỗi nhau! Những rồi cuối cùng mình lại về với nhau. Anh mong muốn không chỉ 1 ngày, 1 tháng, mà là cả 1 đời.";
var promise = "Hứa yêu anh mà mãi bên anh em nhé!!! Yêu em!!!";

function typeHello() {
  if (i < hello.length) {
    document.getElementById("hello").innerHTML += hello.charAt(i);
    i++;
    setTimeout(typeHello, 100);
  }
  else{
    setTimeout(2000);
    typeContent();
  }
}

function typeContent() {
  if (j < content.length) {
    document.getElementById("content").innerHTML += content.charAt(j);
    j++;
    setTimeout(typeContent, 100);
  }
  else{
    setTimeout(2000);
    typePromise();
  }
}

function typePromise() {
  if (k < promise.length) {
    document.getElementById("promise").innerHTML += promise.charAt(k);
    k++;
    setTimeout(typePromise, 100);
  }
}

$(document).ready(function () {
      typeHello();

})
