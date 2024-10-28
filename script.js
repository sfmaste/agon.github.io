document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const authForm = document.getElementById('authForm');
    let isRegistering = false;
    loginBtn.addEventListener('click', () => {
        isRegistering = false;
        toggleModal(true);
        document.getElementById('formTitle').textContent = 'Вход';
        authForm.reset();
    });
    registerBtn.addEventListener('click', () => {
        isRegistering = true;
        toggleModal(true);
        document.getElementById('formTitle').textContent = 'Регистрация';
        authForm.reset();
    });
    closeModal.addEventListener('click', () => toggleModal(false));
    authForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        if (isRegistering) {
            alert(`Пользователь ${username} зарегистрирован!`);
            setTimeout(() => {
                window.location.href = 'acc.html';
            }, 2000);
        } else {
            alert(`Пользователь ${username} успешно авторизован!`);
            setTimeout(() => {
                window.location.href = 'acc.html';
            }, 2000);
        }
        toggleModal(false);
    });
    function toggleModal(show) {
        modal.classList.toggle('hidden', !show);
    }
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;


function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
    });
}


function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    updateSlides();
}

updateSlides();
setInterval(nextSlide, 3000); 
