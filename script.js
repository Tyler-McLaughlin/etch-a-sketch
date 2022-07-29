const container = document.querySelector(".container");
// const square = document.getElementsByClassName("grid");

let n = 16;

function createGrid(n) {
  container.style.setProperty("--grid-rows", n);
  container.style.setProperty("--grid-cols", n);
  for (let i = 0; i < n ** 2; i++) {
    const box = document.createElement("div");
    box.classList.add("grid");
    container.appendChild(box);
  }
}

createGrid(n);
