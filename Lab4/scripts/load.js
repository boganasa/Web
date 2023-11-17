(function() {
    var start = new Date().getTime();

    window.addEventListener('load', function() {
        var end = new Date().getTime();
        var loadTime = end - start;

        var footer = document.querySelector('footer');
        footer.innerHTML += '<div class="footer_background" style="margin-top: -20px"><p class="text_in_footer">Страница загрузилась за ' + loadTime + ' миллисекунд.</p></div>';
    });
})();