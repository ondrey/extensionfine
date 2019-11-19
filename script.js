window.onload = function(){
  document.getElementById("checkFinesRegnum").value = "d";
  document.getElementById("checkFinesRegreg").value = "d";
  document.getElementById("checkFinesStsnum").value = "d";

  var sayHi = function(){
    document.getElementsByClassName("checker")[0].click();
  }

  var ready = function(q){
    console.log("Запускаем парсер", q);
  }

  document.getElementsByClassName("checkResult")[0].addEventListener("DOMSubtreeModified", ready);


  setTimeout(sayHi, 1500);
}
