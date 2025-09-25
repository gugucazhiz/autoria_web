let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle= "rgba(200, 0, 0, 0.5)";
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="rgb(0, 0, 200)";
ctx.moveTo(250, 250);
ctx.lineTo(200, 200);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="rgb(0, 0, 200)";
ctx.moveTo(200, 200);
ctx.lineTo(0, 200);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="rgb(0, 0, 50)";
ctx.moveTo(100, 0);
ctx.lineTo(100, 300);
ctx.closePath();
ctx.stroke();