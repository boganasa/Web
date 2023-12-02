function deleteSchedule() {
    event.preventDefault();
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; // Очистим содержимое контейнера

    localStorage.removeItem('workDays');
    localStorage.removeItem('number');

}
