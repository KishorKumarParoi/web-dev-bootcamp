let btn = document.getElementById("button");

const debounceFunction = function (func, delay) {
  let timeoutId;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(func, delay);
  };
};

btn.addEventListener(
  "click",
  debounceFunction(function () {
    console.log("clicked");
  }, 3000)
);
