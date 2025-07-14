// Pegando os elementos
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const number = document.getElementById('slide-number');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let index = 0;
let intervalTime = 3000; // tempo entre slides (em ms)
let autoSlide; // referência do setInterval

// Função de troca de slide
function changeSlide(newIndex) {
    items[index].classList.remove('active');
    dots[index].classList.remove('active');

    index = (newIndex + items.length) % items.length;

    items[index].classList.add('active');
    dots[index].classList.add('active');
    number.textContent = index + 1;
}

// Funções de navegação
btnNext.addEventListener('click', () => {
    changeSlide(index + 1);
    resetAutoSlide();
});

btnPrev.addEventListener('click', () => {
    changeSlide(index - 1);
    resetAutoSlide();
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        changeSlide(i);
        resetAutoSlide();
    });
});

// Inicia autoplay
function startAutoSlide() {
    autoSlide = setInterval(() => {
        changeSlide(index + 1);
    }, intervalTime);
}

// Reseta o tempo quando o usuário interage
function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

// Chama o autoplay assim que carrega
startAutoSlide();
