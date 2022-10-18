const dropdowns = document.querySelectorAll('.experience-dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        if (e.currentTarget.lastElementChild.style.height === '100px') {
            e.currentTarget.lastElementChild.style.height = '0px';
            e.currentTarget.lastElementChild.style.opacity = '0';
        } else {
            e.currentTarget.lastElementChild.style.height = '100px';
            e.currentTarget.lastElementChild.style.opacity = '1';
        }
    })
})