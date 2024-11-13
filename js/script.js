const element = document.querySelector('.rocket');

element.style.animation = "slide-top 1s ease-in-out alternate 6 forwards";
element.addEventListener('animationend', () => {
    element.style.animation = "slide-out-blurred-right 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) forwards";
});

