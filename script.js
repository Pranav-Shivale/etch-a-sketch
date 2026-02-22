function resizeGrid(numberOfCells) {
  let container = document.querySelector(".container");
  container.replaceChildren();
  for(let i=0; i<numberOfCells*numberOfCells; i++) {
    const cell = document.createElement("div");
    cell.classList.toggle("cell");
    const cellSize = 800/numberOfCells;
    cell.style.height = cellSize + "px";
    cell.style.width = cellSize + "px";
    container.appendChild(cell);
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function addHoverEffect() {
  let cell = document.querySelectorAll(".cell");
  cell.forEach(elem => {
    elem.addEventListener("mouseenter", () => {
      const color = getRandomColor();
      elem.style.backgroundColor = color;
    });
  });
}

function getUserCellsInput() {
  let numberOfCells = +prompt("Enter number of cells (less than 100): ");
  while(numberOfCells > 100) {
    numberOfCells = +prompt("Enter number of cells (less than 100): ");
  }
  return numberOfCells;
}

resizeGrid(16);
addHoverEffect();

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  let numberOfCells = getUserCellsInput();
  resizeGrid(numberOfCells);
  addHoverEffect();
});