document.addEventListener('DOMContentLoaded', function() {
    var computeButton = document.getElementById('compute');

    var dayBox = document.getElementById('dayBox');
    var monthBox = document.getElementById('monthBox');
    var yearBox = document.getElementById('yearBox');

    var dayInput = document.getElementById('day');
    var monthInput = document.getElementById('month');
    var yearInput = document.getElementById('year');

    var dayInputError = document.getElementById('dayInputError');
    var monthInputError = document.getElementById('monthInputError');
    var yearInputError = document.getElementById('yearInputError');

    var dayOutput = document.getElementById('dayOutput');
    var monthOutput = document.getElementById('monthOutput');
    var yearOutput = document.getElementById('yearOutput');

    computeButton.addEventListener('click', function() {

        dayBox.classList.remove("error");
        monthBox.classList.remove("error");
        yearBox.classList.remove("error");

        dayInputError.innerHTML = "";
        monthInputError.innerHTML = "";
        yearInputError.innerHTML = "";


        var day = dayInput.value;
        var month = monthInput.value;
        var year = yearInput.value;



        if (isNaN(day)|| isNaN(month) || isNaN(year)) {
            if(isNaN(day)){
                dayBox.classList.add("error");
                dayInputError.innerHTML = "This field is required";
            }
            if(isNaN(month)){
                monthBox.classList.add("error");
                monthInputError.innerHTML = "This field is required";
            }
            if(isNaN(year)){
                yearBox.classList.add("error");
                yearInputError.innerHTML = "This field is required";
            }

        }

        else if (day < 1 || day > 31 || month < 1 || month > 12 || year > (new Date().getFullYear()) || year < 1900) {
            if(day < 1 || day > 31){
                dayInputError.innerHTML = "Must be a valid day";
                dayBox.classList.add("error");
            }
            if(month < 1 || month > 12){
                monthInputError.innerHTML = "Must be a valid month";
                monthBox.classList.add("error");
            }
            if( year < 1900){
                yearInputError.innerHTML = "Must be after 1900";
                yearBox.classList.add("error");
            }
            else if(year > (new Date().getFullYear())){
                yearInputError.innerHTML = "Must be in the past";
                yearBox.classList.add("error");
            }
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