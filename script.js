function resizeGrid(numberOfCells) {
  let container = document.querySelector(".container");
  container.replaceChildren();
  for(let i=0; i<numberOfCells*numberOfCells; i++) {
    const cell = document.createElement("div");
    cell.classList.toggle("cell")
    container.appendChild(cell);
  }
}

function addHoverEffect() {
  let cell = document.querySelectorAll(".cell");
  cell.forEach(elem => {
    elem.addEventListener("mouseenter", () => {
      elem.style.backgroundColor = "aqua";
    });
  });
}