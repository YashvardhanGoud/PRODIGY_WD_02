let timerInterval;
let seconds = 0;
let running = false;
const display = document.getElementById('display');
const lapTimes = document.getElementById('lapTimes');

// Function to update the display
function updateDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Function to start the stopwatch
function startTimer() {
    if (!running) {
        running = true;
        timerInterval = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

// Function to pause the stopwatch
function pauseTimer() {
    if (running) {
        clearInterval(timerInterval);
        running = false;
    }
}

// Function to reset the stopwatch
function resetTimer() {
    clearInterval(timerInterval);
    running = false;
    seconds = 0;
    updateDisplay();
    lapTimes.innerHTML = ''; // Clear lap times
}

// Function to record lap time
function lapTimer() {
    if (running) {
        const lapTime = document.createElement('li');
        lapTime.textContent = updateLapTime();
        lapTimes.appendChild(lapTime);
    }
}

// Helper function to get the current time
function updateLapTime() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Button event listeners
document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
document.getElementById('lapBtn').addEventListener('click', lapTimer);
