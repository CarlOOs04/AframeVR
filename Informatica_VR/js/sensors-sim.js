setInterval(() => {
    let temp = Math.floor(Math.random() * 40 + 30);
    const display = document.getElementById('temp-display');
    if (display) {
        display.setAttribute('value', 'Temp. CPU: ' + temp + '°C');
    }
}, 2000);
