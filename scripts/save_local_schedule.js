function restoreScheduleFromLocalStorage() {
    const workDays = localStorage.getItem('workDays');
    const number = localStorage.getItem('number');
    const selectedDay = localStorage.getItem('selectedDay');
    const selectedTime = localStorage.getItem('selectedTime');
    const selectedProcedure = localStorage.getItem('selectedProcedure');

    console.log(workDays, number, selectedDay, selectedTime, selectedProcedure)

    if (workDays && number) {
        document.getElementById('work_days').value = workDays;
        document.getElementById('number').value = number;
        generateSchedule(new Event('submit'));

        if (selectedDay && selectedTime && selectedProcedure) {
            document.getElementById('selectDay').value = selectedDay;
            document.getElementById('selectTime').value = selectedTime;
            document.getElementById('selectProcedure').value = selectedProcedure;
            addProcedure(new Event('submit'));
        }
    }
}

restoreScheduleFromLocalStorage();
