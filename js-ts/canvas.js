var c = document.getElementById("gemu");
var ctx = c.getContext("2d");

const img1 = new Image();
img1.src = "img1.png";

ctx.drawImage(img1, 200, 200, 80, 80);