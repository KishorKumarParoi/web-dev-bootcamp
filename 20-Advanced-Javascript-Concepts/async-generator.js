console.log("async generator");

const takeOrder = (customer) => {
  setTimeout(() => {
    console.log(`Taking order for ${customer}`);
  }, 1000);
};

const processOrder = (customer) => {
  setTimeout(() => {
    console.log(`Processing order for ${customer}`);
  }, 1000);
};

const completeOrder = (customer) => {
  setTimeout(() => {
    console.log(`Completed order for ${customer}`);
  }, 1000);
};

// takeOrder("Kishor", (customer) => {
//   processOrder(customer, (customer) => {
//     completeOrder(customer, (customer) => {
//       console.log(`Order Served ${customer}`);
//     });
//   });
// });

function* solution(customer) {
  yield takeOrder(customer);
  yield processOrder(customer);
  yield completeOrder(customer);
}

let iterator = solution("Kishor");
console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
