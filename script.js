let container = document.querySelector(".container");

for(let i=0; i<256; i++) {
  const cell = document.createElement("div");
  cell.classList.toggle("cell")
  container.appendChild(cell);
}

let cell = document.querySelectorAll(".cell");
cell.forEach(elem => {
  elem.addEventListener("mouseenter", () => {
    elem.style.backgroundColor = "aqua";
  });
});