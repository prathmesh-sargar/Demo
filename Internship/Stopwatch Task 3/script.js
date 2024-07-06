let startTime, updatedTime, difference, tInterval, running = false;
let display = document.getElementById('display');
let startStopButton = document.getElementById('startStop');
let resetButton = document.getElementById('reset');

function startStopwatch() {
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    running = true;
    startStopButton.innerHTML = "Stop";
    startStopButton.style.backgroundColor = "#ff7e5f";
    resetButton.style.display = "inline-block";
}

setTimeout(()=>{
    alert("Username: admin  password : watch")
},2000)
function stopStopwatch() {
    clearInterval(tInterval);
    running = false;
    startStopButton.innerHTML = "Start";
    startStopButton.style.backgroundColor = "#feb47b";
}

function resetStopwatch() {
    clearInterval(tInterval);
    running = false;
    display.innerHTML = "00:00:00";
    startStopButton.innerHTML = "Start";
    resetButton.style.display = "none";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    display.innerHTML = hours + ":" + minutes + ":" + seconds;
}

startStopButton.addEventListener('click', function() {
    if (!running) {
        startStopwatch();
    } else {
        stopStopwatch();
    }
});

resetButton.addEventListener('click', resetStopwatch);

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if (username == "admin" && password == "watch" ) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('stopwatch-container').style.display = 'block';
    } else {
        alert('Incorrect username or password');
    }
});
