$(function() {
    $('.menu-open').click(function() {
        $('.menu-collapse').toggleClass('d-none');
        $('.menu-collapse').toggleClass('opened');
    });


    //animated
    $(window).scroll(function() {
        $('.item').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+820) {
                $(this).addClass("bounceIn");
            }
        });
    });
    $(window).scroll(function() {
        $('.links').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+820) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.anim-left').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+820) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.anim-right').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+820) {
                $(this).addClass("fadeInRight");
            }
        });
    });

    
});


$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.cssload-battery');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

//scroling//
$('.go_to').click( function(){
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500);
        }
	    return false;
    });


//form-send//
$('[data-submit]').on('click', function(e){
    e.preventDefault();
    $(this).parent('form').submit();
})
$.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
        );
function valEl(el){
        
        el.validate({
    rules:{
        tel:{
        required:true,
        regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
        },
        name:{
        required:true
        },
        email:{
            required:true,
        email:true
        }
    },
        messages:{
        tel:{
                required:'Поле обязательно для заполнения',
                regex:'Телефон может содержать символы + - ()'
        },
        name:{
                required:'Поле обязательно для заполнения',
        },
        email:{
            required:'Поле обязательно для заполнения',	
            email:'Неверный формат E-mail'
        }
    },            
    submitHandler: function (form) {
        $('#loader').fadeIn();
        var $form = $(form);
        var $formId = $(form).attr('id');
        switch($formId){
            case'goToNewPage':
            $.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: $form.serialize(),
                })
                .always(function (response) {  
                    //ссылка на страницу "спасибо" - редирект
                    location.href='https://wayup.in/lm/landing-page-marathon/success';
                    //отправка целей в Я.Метрику и Google Analytics
                    ga('send', 'event', 'masterklass7', 'register');
            yaCounter27714603.reachGoal('lm17lead');
            });
        break;        
        case'popupResult':
        $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: $form.serialize(),
            })
            .always(function (response) {                    
            setTimeout(function (){
                $('#loader').fadeOut();
            },800);
            setTimeout(function (){
                $('#overlay').fadeIn();
                $form.trigger('reset');
                //строки для остлеживания целей в Я.Метрике и Google Analytics
            },1100);
            $('#overlay').on('click', function(e) {
            $('#overlay').fadeOut();
    });
                
        });
    break;          
    }       
return false; 
}                           
})
    }                        
    
            $('.js-form').each(function() {
            valEl($(this)); 
            });
    $('[data-scroll]').on('click', function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'data-scroll') ).offset().top
        }, 2000);
        event.preventDefault();
    })


//open modal//
$('.open').click(function(){
    $('.modal-window').show('.sdsd');
})
//close modal//
$('.close').click(function(){
    $('.modal-window').slideUp('slow');
})
//inputmask 
$(function($) {
    $('#number').mask('+7 (999) 999-99-99');
})

//slider// 
$('.slider').slick({
    arrows: true,
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    dots: true
});

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 46.474049, lng: 30.746510},
          zoom: 18
        });

        var marker = new google.maps.Marker ({
            position: {lat: 46.474049, lng: 30.746010},
            map: map
        });
        
        var InfoWindow = new google.maps.InfoWindow({
            content: '<h3>Lab Consulting</h3>'
        });
        

        marker.addListener('click', function(){
            InfoWindow.open(map, marker);
        });
      }             