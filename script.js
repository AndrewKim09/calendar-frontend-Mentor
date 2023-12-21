document.addEventListener('DOMContentLoaded', function() {
    var computeButton = document.getElementById('compute');

    var dayInput = document.getElementById('day');
    var monthInput = document.getElementById('month');
    var yearInput = document.getElementById('year');

    var dayOutput = document.getElementById('dayOutput');
    var monthOutput = document.getElementById('monthOutput');
    var yearOutput = document.getElementById('yearOutput');

    computeButton.addEventListener('click', function() {


        var day = dayInput.value;
        var month = monthInput.value;
        var year = yearInput.value;

        if (isNaN(day)|| isNaN(month) || isNaN(year)) {
            alert('Please fill in all fields');
            return;
        }

        else if (day < 1 || day > 31) {
            alert('Please enter a valid day');
            return;
        }
            
            else if (month < 1 || month > 12) {
                alert('Please enter a valid month');
                return;
            }
    
            else if (year > (new Date().getFullYear()) || year < 1900) {
                alert('Please enter a valid year');
                return;
            }
        
        else{
            timeInMs= new Date(year, month, day).getTime();
            currenttime = new Date().getTime();

            var difference = currenttime - timeInMs;

            console.log(difference)

            var millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Account for leap years
            var years = Math.floor(difference / millisecondsInYear);

            // Calculate months
            var millisecondsInMonth = millisecondsInYear / 12;
            var months = Math.floor((difference % millisecondsInYear) / millisecondsInMonth);

            // Calculate days
            var millisecondsInDay = 1000 * 60 * 60 * 24;
            var days = Math.floor((difference % millisecondsInMonth) / millisecondsInDay);

            console.log("Years:", years, "Months:", months, "Days:", days);

            dayOutput.innerHTML = days;
            monthOutput.innerHTML = months;
            yearOutput.innerHTML = years;


        }
    });
});