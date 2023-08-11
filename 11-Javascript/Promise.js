const paymentSuccess = true;
const marks = 90;

function enroll() {
    console.log("Course Enrollment is in Progress");

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
    console.log("Course on Progress......");

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve();
            }
            else {
                reject("You couldn't get enough marks to get certificate!");
            }
        }, 3000);
    });
}

function getCertificate() {
    console.log("Certificate is being generated");

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Congratulations! You got the certificate.");
        }, 1000);
    });
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then(function (value) {
        console.log(value);
    })
    .catch(function (error) {
        console.log(error);
    })  // catch is used to handle the error

debugger;