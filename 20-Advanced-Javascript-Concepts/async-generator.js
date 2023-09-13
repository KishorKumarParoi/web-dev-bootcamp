console.log("async generator");

const takeOrder = (customer, callback) => {
  setTimeout(() => {
    console.log(`Taking order for ${customer}`);
    callback(customer);
  }, 1000);
};

const processOrder = (customer, callback) => {
  setTimeout(() => {
    console.log(`Processing order for ${customer}`);
    callback(customer);
  }, 1000);
};

const completeOrder = (customer, callback) => {
  setTimeout(() => {
    console.log(`Completed order for ${customer}`);
    callback(customer);
  }, 1000);
};

takeOrder("Kishor", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer, (customer) => {
      console.log(`Order Served ${customer}`);
    });
  });
});

