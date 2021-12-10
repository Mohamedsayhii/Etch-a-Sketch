let rows;
let columns;

//Steps 2 and 3
let gridContainer = document.querySelector(".grid-container");

for (let i = 1; i <= 16 * 16; i++) {
  let gridItem = document.createElement("div");
  gridContainer.appendChild(gridItem);
}

let gridItems = document.querySelectorAll(`.grid-container div`);

gridItems.forEach((gridItem) => {
  gridItem.addEventListener(`mousemove`, () => {
    gridItem.style.backgroundColor = `orange`;
    gridItem.style.transitionDuration = `1.2s`;
  });
});

//Step 4

let size;
let resetButton = document.querySelector(`#reset-btn`);
resetButton.addEventListener(`click`, () => {
  size = Number(prompt(`Enter the new size`));
  console.log(size);

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }

  gridContainer.style.gridTemplateColumns = `repeat(${size}, minmax(0, 1fr))`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, minmax(0, 1fr))`;

  for (let i = 1; i <= size * size; i++) {
    let gridItem = document.createElement("div");
    gridItem.style.border = `1px solid`;
    gridContainer.appendChild(gridItem);
  }

  gridItems = document.querySelectorAll(`.grid-container div`);

  gridItems.forEach((gridItem) => {
    gridItem.addEventListener(`mousemove`, () => {
      gridItem.style.backgroundColor = `orange`;
      gridItem.style.transitionDuration = `1.2s`;
    });
  });
});
