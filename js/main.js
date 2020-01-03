$(document).ready(function () {
  var modal = $('.modal'),
     modalBtn = $('[data-toggle=modal]'),
     closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  })
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  })

   var mySwiper = new Swiper ('.swiper-container', {
     loop: true,
      pagination: {
        el: '.swiper-pagination',
       type: 'bullets',
     },
      navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   })
  
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();
  //Валидация формы//
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "em",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект
      userEmail: {
        required: true,
        email: true
      }
      },
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче двух букв",
          maxlength: "Имя не длиннее 15-ти букв"
        },
        userPhone:  "Телефон обязателен",
        userEmail: {
          required: "Заполните поле",
          email: "Введите в формате: name@domain.com"
        }
      }
  });

   //Валидация формы//
  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "em",
    rules: {
      // строчное правило
      userNameControl: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhoneControl: "required",
    },
      messages: {
        userNameControl: {
          required: "Имя обязательно",
          minlength: "Имя не короче двух букв",
          maxlength: "Имя не длиннее 15-ти букв"
        },
        userPhoneControl: "Телефон обязателен"
      },
    
  });
  
  //маска для телефона
  $('[type=tel]').mask('+7(000) 000 00 00', {placeholder: "+7(___) ___-__-__"});

  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "em",
    rules: {
      // строчное правило
      userNameFooter: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhoneFooter: "required",
      userQuestionFooter: "required",
    },
      messages: {  
        userNameFooter: {
          required: "Имя обязательно",
          minlength: "Имя не короче двух букв",
          maxlength: "Имя не длиннее 15-ти букв"
        },
        userPhoneFooter: "Телефон обязателен",
        userQuestionFooter: "Введите вопрос"
      },
    
  });

});

function newFunction() {
}
