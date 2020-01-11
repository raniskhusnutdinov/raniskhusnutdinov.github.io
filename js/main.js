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
  $('.modal__form',).validate({
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
      },
      policyCheckbox: "required",
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
        },
        policyCheckbox: "Согласитесь с обработкой персональных данных"
        
    },
      errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
       error.insertAfter($(element));
    },
      
    
  });

   //Валидация формы//
  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "em",
    rules: {
      // блочное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      policyCheckbox: "required",
    },
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче двух букв",
          maxlength: "Имя не длиннее 15-ти букв"
        },
        userPhone: "Телефон обязателен",
        policyCheckbox: "Согласитесь с обработкой персональных данных"
    },
      errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
       error.insertAfter($(element));
    },
  });
  
  //маска для телефона
  $('[type=tel]').mask('+7(000) 000 00 00', {placeholder: "+7(___) ___-__-__"});

  $('.footer__form').validate({
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
      userQuestion: "required",
      policyCheckbox: "required",
    },
      messages: {  
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче двух букв",
          maxlength: "Имя не длиннее 15-ти букв"
        },
        userPhone: "Телефон обязателен",
        userQuestion: "Введите вопрос",
        policyCheckbox: "Согласитесь с обработкой персональных данных"
      },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
       error.insertAfter($(element));
    },
  });

  var isAddedMap = false;

    $(window).scroll(function() {
        var el = $('.map');
        if ($(this).scrollTop() > el.offset().top - 800) {
            if(isAddedMap) return;
            isAddedMap = true;
            var script = document.createElement('script');
            script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A772360a9e3661fcb0f68ebaa52acb64ce31a96ad8c65dc978959df964a05b84e&amp;width=925&amp;height=465&amp;lang=ru_RU&amp;scroll=false";
            el.append(script);
        };
    });
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: 'qSkUuFySwqE',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();
  }

  

});

