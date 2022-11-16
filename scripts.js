// This message will not self-destruct, ignore this console.log, it's just for me
console.log('Because it\'s one, two, three strike you\'re out at the old ball game!')

// These define the target dates for either league
const majorOpeningDay = new Date("Mar 30, 2023 13:10:00").getTime();
const minorOpeningDay = new Date("Mar 31, 2023 01:05:00").getTime();

let endDate = majorOpeningDay;

// Swaps which target date to use depending on choice. Note: assumes Major is selected on page load
const changeLeague = () => {
    let currentLeague = document.querySelector('.selected').id;
    let majorImage = './MajorLeague.png'
    let minorImage = './MinorLeague.png'

    if (currentLeague == 'majorLeagueSelect') {
        document.getElementById('majorLeagueSelect').classList.remove('selected');
        document.getElementById('minorLeagueSelect').classList.add('selected');
        endDate = minorOpeningDay;
        document.getElementById('leagueImage').src = minorImage;
        document.getElementById('dateDisplay').innerText = 'March 31st, 2023';
    } else {
        document.getElementById('majorLeagueSelect').classList.add('selected');
        document.getElementById('minorLeagueSelect').classList.remove('selected');
        endDate = majorOpeningDay;
        document.getElementById('leagueImage').src = majorImage;
        document.getElementById('dateDisplay').innerText = 'March 30th, 2023';
    };
};

//main function that ticks away, calculates the values, and chnages the divs
//this might be better in a more modular set up, TODO
const timer = () => {
    setInterval(function() {
        let rightNow = new Date().getTime();
        let distance = endDate - rightNow;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('daysDisplay').innerText = days;
        document.getElementById('hoursDisplay').innerText = hours;
        document.getElementById('minsDisplay').innerText = minutes;
        document.getElementById('secondsDisplay').innerText = seconds;

    }, 1000)
}

timer()
