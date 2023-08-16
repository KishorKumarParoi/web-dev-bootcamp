const promise1 = new Promise((resolve, reject) => {
    if (true) {
        resolve('Promise 1 running');
    }
    else {
        reject(new Error('Promise 1 got problem'));
    }
});

const promise2 = new Promise((resolve, reject) => {
    const txt = 'Promise 2 running';
    setTimeout(() => {
        if (true)
            resolve(txt);
        else
            reject(new Err('Promise 2 stopped'));
    }, 2000)
});


promise1
    .then((val) => {
        console.log(val);
    })
    .catch((err) => {
        console.log(err.message);
    });

console.log(promise1);

promise2
    .then((val) => {
        console.log(val);
    })
    .catch((err) => {
        console.log(err.message);
    });
console.log(promise2);

Promise.all([promise1, promise2])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.message);
    });

debugger;