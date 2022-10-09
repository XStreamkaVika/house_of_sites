// Открытие меню-бургера

const burgerBtn = document.querySelector('.header__burger');
const bodyEl = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
    bodyEl.classList.toggle('burger-active');
})


// Очистка placeholder при клике

const allInputs = document.querySelectorAll("form input");
const textAreas = document.querySelectorAll("form textarea");


if (allInputs.length > 0) {
    for (let i = 0; i < allInputs.length; i++) {
        let inputEl = allInputs[i];
        let placeholderInputValue = inputEl.placeholder;
        inputEl.addEventListener('click', function () {
            inputEl.placeholder = "";
        });

        document.addEventListener("click", function (event) {
            if (event.target !== inputEl) {
                inputEl.placeholder = placeholderInputValue;
            }
        })
    }
}


// Открытие submenu в бургере

const submenuBtn = document.querySelector('.toggle-submenu');

submenuBtn.addEventListener('click', () => {
    submenuBtn.closest('.nav-header__item').classList.toggle('submenu-active');
})



// Открытие меню в футере в спойлерах

const titlesFooter = document.querySelectorAll('.menu-footer__title');

for (i = 0; i < titlesFooter.length; i++) {
    let titleFooter = titlesFooter[i];
    titleFooter.addEventListener('click', () => {
        const footerNav = titleFooter.closest('.menu-footer__nav');
        footerNav.classList.toggle('footer-menu-open');
    })
}
