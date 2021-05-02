$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false, // desabilita seta de navegação
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})