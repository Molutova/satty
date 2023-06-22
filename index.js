window.onload = function () {
  var tabcontents, tablinks;
  tabcontents = document.getElementsByClassName("tabcontent");
  tabcontents[0].style.display = "block";
  tablinks = document.getElementsByClassName("tablinks");
  tablinks[0].className += " active";
};

function openWindow(evt, windowName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(windowName).style.display = "block";
  evt.currentTarget.className += " active";
}
