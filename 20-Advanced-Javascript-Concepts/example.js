let squares = document.querySelectorAll("div");
console.log(squares);

let Observer = new IntersectionObserver((squares) => {
  squares.forEach((square) => {
    if (square.isIntersecting) {
      square.target.classList.add("visible");
    } else {
      square.target.classList.remove("visible");
    }
  });
});

squares.forEach((square) => {
  Observer.observe(square);
});
