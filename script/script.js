let data = new Date()
let dia = data.getDate().toString().padStart(2, '0')
let mes = (data.getMonth() + 1).toString().padStart(2, '0')
let ano = data.getFullYear().toString()
let dataString = `${dia}/${mes}/${ano}`
let dataHTML = document.querySelector('span#data')
dataHTML.innerHTML = dataString
/////////////////////////////////////////////////////////////
let sections = document.querySelectorAll('main section');

sections.forEach(function (section) {
    let title = section.querySelector('section h2')
    let content = section.querySelector('.collapse');
    let clicked = section

    title.addEventListener('click', function () {
        content.classList.toggle('show')
        clicked.classList.toggle('expand')
    });
});




