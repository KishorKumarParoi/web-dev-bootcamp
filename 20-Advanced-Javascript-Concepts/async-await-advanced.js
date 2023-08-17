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

const addToCalendar = (meetingDetails) => {
    const txt = `${meetingDetails.Name} will took place in ${meetingDetails.Location} at ${meetingDetails.Time} with ${meetingDetails.Food}`;
    return Promise.resolve(txt);
}


// meeting
//     .then(addToCalendar)
//     .then((val) => {
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     })

async function office() {
    try {
        const meetingDetails = await meeting;
        let msg = await addToCalendar(meetingDetails);
        console.log(msg);
    }
    catch (err) {
        console.log(err);
    }
}

office();

debugger;