const dob = new Date("2006-12-07T00:00:00");

function pad(num) {
    return num.toString().padStart(2, '0');
}

function updateAge() {
    const now = new Date();

    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();
    let hours = now.getHours() - dob.getHours();
    let minutes = now.getMinutes() - dob.getMinutes();
    let seconds = now.getSeconds() - dob.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        months--;
        const lastMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += lastMonthDays;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    const clockElement = document.getElementById("age-clock");
    if (clockElement) {
        clockElement.innerHTML = `
            <div class="unit"><span class="num">${pad(years)}</span><span class="label">Yrs</span></div>
            <span class="colon">:</span>
            <div class="unit"><span class="num">${pad(months)}</span><span class="label">Mos</span></div>
            <span class="colon">:</span>
            <div class="unit"><span class="num">${pad(days)}</span><span class="label">Dys</span></div>
            <span class="colon">:</span>
            <div class="unit"><span class="num">${pad(hours)}</span><span class="label">Hrs</span></div>
            <span class="colon">:</span>
            <div class="unit"><span class="num">${pad(minutes)}</span><span class="label">Min</span></div>
            <span class="colon">:</span>
            <div class="unit"><span class="num">${pad(seconds)}</span><span class="label">Sec</span></div>
        `;
    }
}

// Initial trigger and interval assignment
updateAge();
setInterval(updateAge, 1000);
