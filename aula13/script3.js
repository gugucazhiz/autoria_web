let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle= "rgb(0, 0, 50)";
ctx.moveTo(20, 100);
ctx.lineTo(50, 150);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "rgb(0, 0, 50)";
ctx.moveTo(50, 150);
ctx.lineTo(100, 150);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "rgb(0, 0, 50)";
ctx.moveTo(130, 100);
ctx.lineTo(100, 150);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "rgb(0, 0, 50)";
ctx.moveTo(20, 100);
ctx.lineTo(130, 100);
ctx.closePath();
ctx.stroke();