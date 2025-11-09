const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = 500;

let drawing = false;
let color = document.getElementById("color").value;
let size = document.getElementById("size").value;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mousemove", draw);

document.getElementById("color").addEventListener("change", (e) => color = e.target.value);
document.getElementById("size").addEventListener("change", (e) => size = e.target.value);
document.getElementById("clear").addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height));

function draw(e) {
  if (!drawing) return;
  ctx.lineWidth = size;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}
