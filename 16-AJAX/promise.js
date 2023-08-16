// ? callback basic syntax
// function display(data) {
//     console.log(data);
// }

// function sum(a, b, callback) {
//     let sum = a + b;
//     if (callback) callback(sum);
//     return sum;
// }

// sum(5, 5, display);


// ? callback

// const paymentSuccess = true;
// const marks = 89;

// function courseEnroll(callback) {
//     console.log("Enrolling to course...");

//     setTimeout(function () {
//         if (paymentSuccess) {
//             callback();
//         }
//         else {
//             console.log("Payment Failed!");
//         }
//     }, 2000);
// }

// function progress(callback) {
//     console.log("Course is ongoing");

//     setTimeout(function () {
//         if (marks >= 80) {
//             callback();
//         }
//         else {
//             console.log("You are not Eligible for getting Certificate");
//         }
//     }, 3000);
// }

// function getCertificate() {
//     console.log("Preparing your certificate .... ");
//     console.log('Keep Patience');

//     setTimeout(() => {
//         console.log("Congratulations! You got your certificate.");
//     }, 1000);

// }

// courseEnroll(function () {
//     progress(getCertificate)
// });

// debugger;

// ? Promise

// console.log('Task 1');

// const Status = true;

// Promise definition
// producing code
// const promise = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         if (Status) {
//             resolve('Task 2');
//         }
//         else {
//             reject('failed!');
//         }
//     }, 2000);
// });

// Promise Call 
// consuming code
// promise
//     .then((val) => {
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// console.log('Task 3');

const paymentSuccess = true;
const marks = 89;

function courseEnroll() {
    console.log("Enrolling to course...");

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve();
            }
            else {
                reject("Payment Failed!");
            }
        }, 2000);
    });
}

function progress() {
    console.log("Course is ongoing");

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve();
            }
            else {
                reject("You are not Eligible for getting Certificate");
            }
        }, 3000);
    });
}

function getCertificate() {
    console.log("Preparing your certificate .... ");
    console.log('Keep Patience');

    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve("Congratulations! You got your certificate.");
        }, 1000);
    });
}

// courseEnroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function (val) {
//         console.log(val);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })


// debugger;

// ? Async-Await

async function course() {
    try {
        await courseEnroll();
        await progress();
        let msg = await getCertificate();
        console.log(msg);
    }
    catch (err) {
        console.log(err);
    }
}

course();
