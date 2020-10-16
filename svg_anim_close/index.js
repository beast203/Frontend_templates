var icon = document.getElementById("icon");

icon.onclick = function() {
  if (this.className === "Icon") {
    this.className = "Icon open"; 
  } else {
    this.className = "Icon";
  }
};
