const paymentSuccess = true;
const marks = 90;

function enroll(callback) {
    console.log("Course Enrollment is in Progress");

    setTimeout(function () {
        if (paymentSuccess) {
            callback();
        }
        else {
            console.log("Payment Failed!");
        }
    }, 2000);
}

function progress(callback) {
    console.log("Course on Progress......");

    setTimeout(function () {
        if (marks >= 80) {
            callback();
        }
        else {
            console.log("You couldn't get enough marks to get certificate!");
        }
    }, 3000);
}

function getCertificate() {
    console.log("Certificate is being generated");

    setTimeout(function () {
        console.log("Congratulations! You got the certificate.");
    }, 1000);
}

enroll(function () {
    progress(getCertificate);
});
