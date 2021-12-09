let rows = 16;
let columns = 16;

let gridContainer = document.querySelector(".grid-container");

gridContainer.style.gap = `3px`;

for (let i = 1; i <= rows * columns; i++) {
  let gridItem = document.createElement("div");
  let gridItemStyle = gridItem.style;
  gridItemStyle.border = `1px solid`;
  // gridItem.style.margin = `0px`;
  // gridItem.style.padding = `0px`;
  gridContainer.appendChild(gridItem);
}