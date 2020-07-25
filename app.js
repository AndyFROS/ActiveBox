 $(function(){

    /*Fixed header*/
     let header = $("#header");
     let intro = $("#intro");
     let scrollPos = $(window).scrollTop();
     let introH = intro.innerHeight();
     let nav = $("#nav");
     let navToggle = $("#navToggle")
     checkScroll(scrollPos, introH);


     /*На события scrol load resize "скролинг обновление изминение размера" просиходят следующие действия*/
     $(window).on("scroll resize", function() {
         /*Постоянное обновление высоты обьекта интро из за события скрола*/
         let introH = intro.innerHeight();
         scrollPos = $(this).scrollTop();
         checkScroll(scrollPos, introH);
     });


     /*Функция проверки скролинга для обновления данных и фиксации блока с кнопками*/
     function checkScroll(scrollPos, introH){
         /*Если позиция скрола "Текущие положение экрана" больше высоты блока интро, то header присваевается класс fixed*/
         if(scrollPos > introH){
             header.addClass("fixed");

             /*Иначе у обьекта header удаляется класс fixed*/
         } else {
             header.removeClass("fixed");
         }
     }


     /*Smooth scroll*/
     $("[data-scroll]").on("click", function(event){
         event.preventDefault();

         /*Для обьекта data пишем то значение которое указано в html файле в данном слкучае scroll "значение может быть любым"*/
         let elementID = $(this).data("scroll");

        /*Получаем позицию элемента на который кликаем от верха страницы*/
         let elementOfSet = $(elementID).offset().top;

         nav.removeClass("show");

         /*Делаем плавный скрол до элемента на который кликнули*/
         $("html, body").animate({
             scrollTop: elementOfSet - 70
         }, 850);

     });


     /*Menu*/
     navToggle.on("click", function(event){
         event.preventDefault();
         nav.toggleClass("show");

     });

     /*Rewiews: https://kenwheeler.github.io/slick/*/
     let slider = $("#rewiewSlider")

      slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });

 });
