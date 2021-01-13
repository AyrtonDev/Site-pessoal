//Debounce do Lodash
debounce = function(func, wait, immediate) {
    var timeout
    return function() {
        var context = this, args = arguments
        var later = function() {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

//animação de sidebar
$('.headerNav a:last-child').click(function(){
    $('.sideBar').toggleClass('active')
    $('.header, .main, .footer').toggleClass('fade')
})

$('.main, .footer').click(function(){
    $('.sideBar').removeClass('active')
    $('.header, main, .footer').removeClass('fade')
})

//animção de scroll
(function() {
var $target = $('.anime1, .anime2'),
    animationClass = 'anime-start',
    offset = $(window).height() * 1/2

function animeScroll() {
    var documentTop = $(document).scrollTop()
    $target.each(function(){
        var itemTop = $(this).offset().top;
        if(documentTop > itemTop - offset) {
            $(this).addClass(animationClass)
        }else{
            $(this).removeClass(animationClass)
        }
    })
}

animeScroll()

$(document).scroll(debounce(function(){
    animeScroll()
}, 10))
}())
