const workDaysSelect = document.getElementById('work_days');
const numberInput = document.getElementById('number');

workDaysSelect.addEventListener('change', function() {
    const selectedOption = workDaysSelect.value;
    if (selectedOption === 'full') {
        numberInput.max = 7;
    } else if (selectedOption === 'work') {
        numberInput.max = 5;
    } else if (selectedOption === 'weekends') {
        numberInput.max = 2;
    }
});