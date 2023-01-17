console.log('Вёрстка соответствует макету. Ширина экрана 768px +24\nВёрстка соответствует макету. Ширина экрана 380px +24\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nНа ширине экрана 380рх и меньше реализовано адаптивное меню +22')
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