// This message will not self-destruct, ignore this console, it's just for me
console.log('Because it\'s one, two, three strike you\'re out at the old ball game!')

// Set the end of the timer, this will be modified by league and team choice
let endDate = '';

//function to select the league used for coundown calculation and display
const majorOpeningDay = new Date("Mar 31, 2022 13:00:00").getTime();
const minorOpeningDay = new Date("Apr 08, 2022 13:00:00").getTime();


const selected = document.querySelector('selection');

const changeLeague = () => {
    // if major is chosen set endTime to equal majorOpeningDay, else euqal to minorOpeningDay
    document.getElementById('majorLeagueSelected').classList.contains('.active') ?
    endDate = majorOpeningDay : endDate = minorOpeningDay

}


//main function that ticks away, calculates the values, and chnages the divs
//this might be better in a more modular set up, TODO
const timer = () => {
    setInterval(function() {
        let rightNow = new Date().getTime();
        let distance = endDate - rightNow;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor( (distance % (1000 * 60)) / 1000)

        document.getElementById('daysDisplay').innerText = days;
        document.getElementById('hoursDisplay').innerText = hours;
        document.getElementById('minsDisplay').innerText = minutes;
        document.getElementById('secondsDisplay').innerText = seconds;

    }, 1000)
}

changeLeague()
timer()
