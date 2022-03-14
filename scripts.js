// This message will not self-destruct, ignore this console.log, it's just for me
console.log('Because it\'s one, two, three strike you\'re out at the old ball game!')

// These define the target dates for either league
const majorOpeningDay = new Date("Apr 7, 2022 13:00:00").getTime();
const minorOpeningDay = new Date("Apr 8, 2022 13:00:00").getTime();

let endDate = majorOpeningDay;

// Swaps which target date to use depending on choice. Note: assumes Major is selected on page load
const changeLeague = () => {
    let currentLeague = document.querySelector('.selected').id;
    let majorImage = 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1280px-Major_League_Baseball_logo.svg.png'
    let minorImage = 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/MiLB_logo.svg/1280px-MiLB_logo.svg.png'

    if (currentLeague == 'majorLeagueSelect') {
        document.getElementById('majorLeagueSelect').classList.remove('selected');
        document.getElementById('minorLeagueSelect').classList.add('selected');
        endDate = minorOpeningDay;
        document.getElementById('leagueImage').src = minorImage;
        document.getElementById('dateDisplay').innerText = 'April 8th, 2022';
    } else {
        document.getElementById('majorLeagueSelect').classList.add('selected');
        document.getElementById('minorLeagueSelect').classList.remove('selected');
        endDate = majorOpeningDay;
        document.getElementById('leagueImage').src = majorImage;
        document.getElementById('dateDisplay').innerText = 'April 7th, 2022';
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
