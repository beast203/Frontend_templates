var icons = document.getElementById("icons");

icon.onclick = function() {
  if (this.className === "Icon") {
    this.className = "Icon close"; 
  } else {
    this.className = "Icon";
  }
};
