function scrollToSection(target) {
    const offset = 335;
    const element = document.querySelector(target);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - offset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu a');

    var currentPageUrl = location.href;
    menuLinks.forEach(function(link) {
        if (link.href === currentPageUrl) {
            link.classList.add('active');
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', event => {
            const href = link.getAttribute('href');

            if (href && href.charAt(0) === '#') {
                event.preventDefault();
                scrollToSection(href);
            }
        });

        link.addEventListener('click', function() {
            menuLinks.forEach(function(item) {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

var menuLinks = document.querySelectorAll('.menu_back a[href]');

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            var sectionId = '#' + entry.target.id;
            menuLinks.forEach(function(link) {
                if (link.getAttribute('href') === sectionId) {
                    isAtTop = false;
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}, { threshold: 0.3 });

var sections = document.querySelectorAll('section');
sections.forEach(function(section) {
    observer.observe(section);
});
