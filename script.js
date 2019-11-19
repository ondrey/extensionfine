window.onload = function(){
  document.getElementById("checkFinesRegnum").value = "С289УА";
  document.getElementById("checkFinesRegreg").value = "750";
  document.getElementById("checkFinesStsnum").value = "9909237316";

  var sayHi = function(){
    document.getElementsByClassName("checker")[0].click();
  }

  setTimeout(sayHi, 1500);

  window.location.hash = '';

}
