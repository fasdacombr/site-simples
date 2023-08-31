'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    let className = document.body.className;
    if (className == "ligth-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "ligth";
    }
});