console.log("async generator");

const takeOrder = (customer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Taking order for ${customer}`);
    }, 1000);
  });
};

const processOrder = (customer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Processing order for ${customer}`);
    }, 1000);
  });
};

const completeOrder = (customer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Completed order for ${customer}`);
    }, 1000);
  });
};

// takeOrder("Kishor", (customer) => {
//   processOrder(customer, (customer) => {
//     completeOrder(customer, (customer) => {
//       console.log(`Order Served ${customer}`);
//     });
//   });
// });

async function* solution(customer) {
  yield await takeOrder(customer);
  yield await processOrder(customer);
  yield await completeOrder(customer);
}

let gen = solution("Krishna");
// gen.next().then((data) => console.log(data.value));
// gen.next().then(({ value }) => console.log(value));
// gen.next().then(({ value }) => console.log(value));
// gen.next().then(({ value }) => console.log(value));

const promises = [gen.next(), gen.next(), gen.next(), gen.next()];

(async function () {
  for await (let item of promises) {
    console.log(item);
  }
})();
