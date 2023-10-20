const currentPage = document.location.href;

const menuLinks = document.querySelectorAll(".menu a");
menuLinks.forEach((link) => {
    if (link.href === currentPage) {
        link.classList.add("active");
    }
});