function stopwatch() {
    var startTime = Date.now();
    function getDelay() {
        console.log(Date.now() - startTime);
    }

    return getDelay;
}

var timer = stopwatch();
// console.log(timer);
// timer();

for (let i = 0; i < 1000000000; ++i) {
    let x = Math.random() * 1000000000;
}

console.dir(timer);
timer();
timer = null;
// console.log(timer);
timer();

console.dir(timer);
timer();
timer();


debugger;