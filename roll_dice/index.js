let x;
let y;
let z;
const roll = document.querySelectorAll(".rol");

document.getElementById("Rol-dice").onclick = async function () {
  x = Math.floor(Math.random() * 6) + 1;
  y = Math.floor(Math.random() * 6) + 1;
  z = Math.floor(Math.random() * 6) + 1;

  document.getElementById("match").innerHTML = x;
  document.getElementById("watch").innerHTML = y;
  document.getElementById("wake").innerHTML = z;

};


