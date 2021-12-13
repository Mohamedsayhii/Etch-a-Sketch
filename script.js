let rows;
let columns;

let colorBtn = document.querySelector(`#color-btn`);
let rainbow = document.querySelector(`#rainbow-btn`);
let randomColor = Math.floor(Math.random() * 16777215).toString(16);

//Steps 2 and 3
let gridContainer = document.querySelector(".grid-container");

for (let i = 1; i <= 16 * 16; i++) {
  let gridItem = document.createElement("div");
  gridContainer.appendChild(gridItem);
}

let gridItems = document.querySelectorAll(`.grid-container div`);

gridItems.forEach((gridItem) => {
  gridItem.addEventListener(`mousemove`, () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    gridItem.style.backgroundColor = `#` + randomColor;
    gridItem.style.transitionDuration = `1.2s`;
  });
});

//Step 4

let size;
let resetButton = document.querySelector(`#reset-btn`);
resetButton.addEventListener(`click`, () => {
  size = Number(prompt(`Enter the new size`));
  console.log(size);

  gridContainer.innerHTML = "";

  gridContainer.style.gridTemplateColumns = `repeat(${size}, minmax(0, 1fr))`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, minmax(0, 1fr))`;

  for (let i = 1; i <= size * size; i++) {
    let gridItem = document.createElement("div");
    gridContainer.appendChild(gridItem);
  }

  gridItems = document.querySelectorAll(`.grid-container div`);

  gridItems.forEach((gridItem) => {
    gridItem.addEventListener(`mousemove`, () => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      gridItem.style.backgroundColor = `#` + randomColor;
      gridItem.style.transitionDuration = `1.2s`;
    });
  });
});
