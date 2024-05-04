// Disable Right Click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  
    window.alert(
      "Sorry, right click is disabled to prevent leakage of    confidential functions"
    );
  });