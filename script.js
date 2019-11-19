window.onload = function(){
  document.getElementById("checkFinesRegnum").value = "d";
  document.getElementById("checkFinesRegreg").value = "d";
  document.getElementById("checkFinesStsnum").value = "d";

  var sayHi = function(){
    document.getElementsByClassName("checker")[0].click();
  }

  setTimeout(sayHi, 1500);

  window.location.hash = '';

}
