const button = document.getElementById('mode-btn');

button.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        button.innerText = 'Light';
    } else {
        button.innerText = 'Dark';
    }

});