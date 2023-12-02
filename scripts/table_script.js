function generateSchedule(event) {
    event.preventDefault();

    const tableContainer = document.getElementById('tableContainer');
    const scheduleTable = document.createElement('table');
    scheduleTable.id = 'scheduleTable';

    const workDays = document.getElementById('work_days').value;

    const dayInfo = {
        'full': { columns: 7, names: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'] },
        'work': { columns: 5, names: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'] },
        'weekends': { columns: 2, names: ['Суббота', 'Воскресенье'] }
    };

    const { columns, names } = dayInfo[workDays];

    for (let row = 0; row < 2; row++) {
        const tableRow = scheduleTable.insertRow(row);
        for (let i = 0; i < columns; i++) {
            const cell = tableRow.insertCell(i);
            if (row === 0) {
                cell.textContent = names[i];
            } else {
                cell.textContent = '';
            }
        }
    }

    localStorage.setItem('workDays', workDays);
    localStorage.setItem('number', document.getElementById('number').value);

    tableContainer.innerHTML = '';
    tableContainer.appendChild(scheduleTable);

    const scheduleForm = document.getElementById('scheduleForm');
    if (scheduleForm) {
        scheduleForm.addEventListener('submit', addProcedure);
    }

}


function addProcedure(event) {
    event.preventDefault();

    const selectedDay = document.getElementById('selectDay').value.toLowerCase();
    const selectedTime = document.getElementById('selectTime').value;
    const selectedProcedure = document.getElementById('selectProcedure').value;

    const scheduleTable = document.getElementById('scheduleTable');
    if (scheduleTable) {
        const rows = scheduleTable.rows;
        const headerRow = rows[0];
        const dataRow = rows[1];

        let dayIndex = -1;
        for (let i = 0; i < headerRow.cells.length; i++) {
            console.log(selectedDay, headerRow.cells[i].textContent.trim().toLowerCase())
            if (headerRow.cells[i].textContent.trim().toLowerCase() === selectedDay) {
                dayIndex = i;
                break;
            }
        }

        if (dayIndex !== -1) {
            const cell = dataRow.cells[dayIndex];
            cell.textContent = `${selectedTime} - ${selectedProcedure}`;
            localStorage.setItem('selectedDay', selectedDay);
            localStorage.setItem('selectedTime', selectedTime);
            localStorage.setItem('selectedProcedure', selectedProcedure);
        } else {
            alert('Ошибка: День недели не найден в расписании!');
        }
    } else {
        alert('Ошибка: Таблица расписания не найдена!');
    }

    const selectProcedure = document.getElementById('selectProcedure');
    if (selectProcedure) {
        selectProcedure.addEventListener('submit', addProcedure);
    }
}

