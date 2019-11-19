window.onload = function(){
  document.getElementById("checkFinesRegnum").value = "С937ХМ";
  document.getElementById("checkFinesRegreg").value = "123";
  document.getElementById("checkFinesStsnum").value = "9912124078";

  var sayHi = function(){
    document.getElementsByClassName("checker")[0].click();
  }

  var ready = function(){
    console.log("Запускаем парсер");
  }

  document.getElementsByClassName("checkResult")[0].addEventListener("DOMSubtreeModified", ready);


  setTimeout(sayHi, 1500);
}
