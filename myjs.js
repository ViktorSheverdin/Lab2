 document.getElementById("open").addEventListener("click", 
 function(){
     document.getElementById("control").style.left = "0px";
 });
 
 document.getElementById("bg1").addEventListener("click", 
 function() {
     document.getElementById("background").style.backgroundImage = "url(img/fifth.jpg)";
 });
 
 document.getElementById("bg2").addEventListener("click", 
 function() {
     document.getElementById("background").style.backgroundImage = "url(img/second.jpeg)";
 });
 
 document.getElementById("bg3").addEventListener("click", 
 function() {
     document.getElementById("background").style.backgroundImage = "url(img/third.jpg)";
 });
 
 document.getElementById("bg4").addEventListener("click", 
 function() {
     document.getElementById("background").style.backgroundImage = "url(img/fourth.jpg)";
 });
 
 document.getElementById("close").addEventListener("click", 
 function() {
     document.getElementById("control").style.left = "-200px";
 });