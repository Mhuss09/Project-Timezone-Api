
async function searchTimeZone() {
    const timeZoneInput = document.getElementById('timezoneInput').value;
    const cityName = document.getElementById('timezoneInput');
    const timeDisplay = document.getElementById('timeDisplay');
    var radioButtonGroup = document.getElementsByName("continent");
    var checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked);

    
    if (!timeZoneInput || !checkedRadio) {
        alert("Please enter a valid time zone!");
        return;
    }

    try {
        debugger
        const url = `http://worldtimeapi.org/api/timezone/${checkedRadio.value}/${cityName.value}`
        console.log(url)
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);


        const dateTimeString = new Date(data.datetime).toLocaleString('en-US', {
            timeZone: `${checkedRadio.value}/${timeZoneInput}`,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        cityName.textContent = `Current time in ${timeZoneInput}`;
        timeDisplay.textContent = dateTimeString;

      
        document.getElementById('timezoneInput').value = '';
    } catch (error) {
        console.error('Error:', error);
        alert("Invalid time zone. Please try again.");
    }
}


