function openmenu(){
    document.getElementById("details").style.width="250px";
}
function closemenu(){
    document.getElementById("details").style.width="0px";
}
// Function to update the countdown timer
function updateCountdown() {
    const targetDate = new Date(); // Get the current date and time
    targetDate.setDate(targetDate.getDate() + 20); // Add 7 days to the current date

    const countdownElement = document.getElementById('countdown');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    function update() {
        const currentDate = new Date();
        const timeLeft = targetDate - currentDate;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');

        if (timeLeft <= 0) {
            clearInterval(interval);
            countdownElement.innerHTML = 'Countdown expired';
        }
    }

    update(); // Initial update

    // Update the countdown every second
    const interval = setInterval(update, 1000);
}

// Call the updateCountdown function when the page loads
window.onload = updateCountdown;
