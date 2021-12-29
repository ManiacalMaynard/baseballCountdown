// This message will not self-destruct, ignore this console, it's just for me
console.log('Because it\'s one, two, three strike you\'re out at the old ball game!')

// Set the end of the timer, this will be modified by league and team choice
let endDate = new Date("Mar 31, 2022 13:00:00").getTime()

const timer = () => {
    setInterval(function() {
        let rightNow = new Date().getTime();
        let distance = endDate - rightNow;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % days) / (1000 * 60 * 60));
        let minutes = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor( (distance % (1000 * 60)) / 1000)

        document.getElementById('daysDisplay').innerText = days;
        document.getElementById('hoursDisplay').innerText = hours;
        document.getElementById('minsDisplay').innerText = minutes;
        document.getElementById('secondsDisplay').innerText = seconds;

    }, 1000)
}

timer()