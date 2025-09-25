let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(25,25,100,100);
ctx.clearRect(45,45,60,60);
ctx.strokeStyle = "red";
ctx.strokeRect(50,50,50,50)


ctx.strokeStyle = "#ff0000";
ctx.beginPath();
//arc (x,y,r,anguloinicial,angulofinal, sentido)
ctx.arc(195, 250, 40, 3.2, 2 * Math.PI);
ctx.lineWidth = "5";
ctx.stroke();

ctx.strokeStyle = "#ff0000";
ctx.beginPath();
//arc (x,y,r,anguloinicial,angulofinal, sentido)
ctx.arc(275, 250, 40, 3.2, 2 * Math.PI);
ctx.lineWidth = "5";
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "rgba(255, 0, 0, 1)";
ctx.moveTo(315,249);
ctx.lineTo(235,340);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "rgba(255, 0, 0, 1)";
ctx.moveTo(155,246);
ctx.lineTo(235,340);
ctx.closePath();
ctx.stroke();