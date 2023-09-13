let circle = document.getElementById("circle");
// circle.style.color = "blue";
// console.log(circle.style.color);

const observer = new IntersectionObserver(
  (items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        console.log(`Item ${item.target.id} is visible`);
      } else {
        console.log(`Item ${item.target.id} is not visible`);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(circle);


