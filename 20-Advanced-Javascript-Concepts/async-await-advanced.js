const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            Name: 'Technical Meeting',
            Location: 'Google Meet',
            Time: '10:00 PM',
            Food: 'Jhal-Muri'
        }
        resolve(meetingDetails);
    }
    else {
        reject(new Error('Meeting already scheduled'));
    }
});


// meeting
//     .then((val) => {
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

async function office() {
    try {
        let msg = await meeting;
        console.log(msg);
    }
    catch (err) {
        console.log(err);
    }
}

office();

// debugger;