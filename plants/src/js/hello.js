// !Start Burger header 
  (function () {
    // Открываю бургер
    const burgerMenu = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__nav');
    // const backHeader = document.querySelector('.background__header');
    const allHideClose = document.querySelector('.main');
    

    burgerMenu.addEventListener('click', () => {
      // Убираем прокрутку страницы под бургером
      document.body.classList.toggle('_lock');
      // background
      menu.classList.toggle('_active');
      // Анимация линий
      burgerMenu.classList.toggle('_active');      
    })

    // Клик вне бургер меню
    allHideClose.addEventListener('click', () => {
      menu.classList.remove('_active');
      burgerMenu.classList.remove('_active');  
      document.body.classList.remove('_lock');
    })

    // По меню закрываю бургер
    const menuLinks = document.querySelectorAll('.header__link');
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', () => { 
        document.body.classList.toggle('_lock')
        menu.classList.toggle('_active');
        burgerMenu.classList.toggle('_active');
      })
    }
  }());
  // !End Burger header


//! Start change focus service
  (function () { 
    const gardens = document.querySelector('.button__gardens');
    const lawn = document.querySelector('.button__lawn');
    const planting = document.querySelector('.button__planting');
    const serviceCard = document.querySelectorAll('.service__card');

    gardens.addEventListener('click', () => {
      // Делаю кнопку активной
      gardens.classList.toggle('_active');
      // перебираю карточки
      for (let i = 0; i < serviceCard.length; i++) {
        serviceCard[i].classList.remove('_no-active');
        //  проверяю содержит кнопка активный класс
        if (gardens.classList.contains('_active')) {
          // i карточкам добавляю блюр
          if (i == 1 || i == 2 || i == 3 || i == 5) {
            serviceCard[i].classList.add('_no-active');
          }
        } else {
          // i карточкам убираю блюр
          if (i == 1 || i == 2 || i == 3 || i == 5) {
            serviceCard[i].classList.remove('_no-active');
          }
        }

      }
      // делаю кнопки не активными
      lawn.classList.remove('_active');
      planting.classList.remove('_active');
    })

    lawn.addEventListener('click', () => {
      lawn.classList.toggle('_active');

      for (let i = 0; i < serviceCard.length; i++) {
        serviceCard[i].classList.remove('_no-active');

        if (lawn.classList.contains('_active')) {
          if (i == 0 || i == 1 || i == 3 || i == 4 || i == 5) {
            serviceCard[i].classList.add('_no-active');
          }
        } else {
          if (i == 0 || i == 1 || i == 3 || i == 4 || i == 5) {
            serviceCard[i].classList.remove('_no-active');
          }
          }
      }
      gardens.classList.remove('_active');
      planting.classList.remove('_active');
    })

    planting.addEventListener('click', () => {
      planting.classList.toggle('_active');

      for (let i = 0; i < serviceCard.length; i++) {
        serviceCard[i].classList.remove('_no-active');

        if (planting.classList.contains('_active')) {
          if (i == 0 || i == 2 || i == 4) {
            serviceCard[i].classList.add('_no-active');
          }
        } else {
          if (i == 0 || i == 2 || i == 4) {
            serviceCard[i].classList.remove('_no-active');
          }
          }
      }
      gardens.classList.remove('_active');
      lawn.classList.remove('_active');
    })

  }());
//! End change focus service


//! Start acordion



//! End acordion