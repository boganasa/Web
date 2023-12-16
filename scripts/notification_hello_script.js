    // скрипт для вывода приветсвенного уведомления. Высвечивается каждый раз при переходе на стартовую страницу
    function showHello() {
    iziToast.show({
        title: 'Привет!',
        message: 'Добро пожаловать на нашу страницу!',
        position: 'topRight',
        backgroundColor: '#254C5E',
        titleColor: '#D4F0F4',
        messageColor: '#D4F0F4',
        progressBarColor: '#D4F0F4',
        messageLineHeight: '10px',
        messageTextAlign: 'justify',
        messageTextIndent: '0',
        messageWordSpacing: '5px'
    });
}
    document.addEventListener("DOMContentLoaded", function(event) {
    showHello();
});
