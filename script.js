const container = document.querySelector(".container");
// const square = document.getElementsByClassName("grid");

for (let i = 0; i < 16; i++) {
  const box = document.createElement("div");
  box.classList.add("grid");
  box.textContent = "X";
  container.appendChild(box);
}

// function colorSquare() {
//   square.style.backgroundColor = "black";
// }

// box.addEventListener("mouseover", colorSquare());
