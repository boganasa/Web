function deleteSchedule() {
    event.preventDefault();
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    localStorage.removeItem('workDays');
    localStorage.removeItem('number');
}
