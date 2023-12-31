var prevScrollPos = window || document.documentElement.scrollTop;

window.addEventListener('scroll', function() {
    var menuBack = document.querySelector('.menu_back');
    var preview = document.querySelector('.preview')

    var headerHeight = document.querySelector('.div_header').offsetHeight;
    var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPos > headerHeight) {
        menuBack.classList.add('sticky');
        menuBack.style.top = '0px';
        preview.style.top = '140px'
    }
    else {
        menuBack.classList.remove('sticky');
        menuBack.style.top = '';
        preview.style.top = ''
    }

    prevScrollPos = currentScrollPos;
});