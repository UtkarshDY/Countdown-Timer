document.getElementById('start-button').addEventListener('click', function() {
    const dateTimePicker = document.getElementById('datetime-picker');
    const endDate = new Date(dateTimePicker.value);

    if (isNaN(endDate.getTime())) {
        alert('Please select a valid date and time.');
        return;
    }

    const countdown = document.getElementById('countdown');
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date();
        const remainingTime = endDate - now;

        if (remainingTime <= 0) {
            clearInterval(interval);
            countdown.innerHTML = '<div>Event has started!</div>';
            return;
        }

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        daysSpan.textContent = days.toString().padStart(2, '0');
        hoursSpan.textContent = hours.toString().padStart(2, '0');
        minutesSpan.textContent = minutes.toString().padStart(2, '0');
        secondsSpan.textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
});
