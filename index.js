let element = document.getElementsByClassName('list');
let element2 = document.getElementById("btn");
element.style.display = "none"


element2.addEventListener('click', () => {
        element.style.display = 'block';
})
