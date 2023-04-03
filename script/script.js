
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
////////////////////////////////////////////////////////////////
let skillsImg = document.querySelectorAll('img.skills')
let skillText = document.querySelector('h3#skillTitle')

skillsImg.forEach((imagem) => {
    imagem.addEventListener("mouseover", () => {
        skillText.innerHTML = imagem.getAttribute("data-titulo");
    });
    
    imagem.addEventListener("mouseout", () => {
        skillText.innerHTML = "Clique ou passe o mouse";
    });
  });

ScrollReveal().reveal('#main', { delay: 100 });
ScrollReveal().reveal('#skills-container', { delay: 100 });
ScrollReveal().reveal('section', {delay: 100});




