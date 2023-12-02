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
    }
    else if(workDays && number && selectedDay && selectedTime && selectedProcedure) {
        document.getElementById('work_days').value = workDays;
        document.getElementById('number').value = number;
        document.getElementById('selectedDay').value = selectedDay;
        document.getElementById('selectedTime').value = selectedTime;
        document.getElementById('selectProcedure').value = selectedProcedure;
        generateSchedule(new Event('submit'));
        addProcedure(new Event('submit'))
    }
}

restoreScheduleFromLocalStorage();
