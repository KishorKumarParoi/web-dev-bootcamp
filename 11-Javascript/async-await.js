const paymentSuccess = true;
const marks = 70;

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

async function course() {
    try {
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);
    }

    catch (error) {
        console.log(error);
    }
}

course();

// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })  // catch is used to handle the error

debugger;