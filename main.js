window.onload = function(){
  var today = new Date();
  var Dday = new Date(2021, 01, 12);
  var time = today.getTime()-Dday.getTime();
  var anni = Math.ceil(time/(24*60*60*1000))+1;
  document.getElementById("anni").innerHTML = "D+"+ anni + "♥"
}
  
