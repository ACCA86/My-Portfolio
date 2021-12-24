(function($){
    "use strict"

    if($(".typed-text-output").length == 1){
        var type_str = $(".typed-text").text()
        var str = new Typed(".typed-text-output",{
            strings:type_str.split(', '),
            typeSpeed:100,
            backSpeed:20,
            smartBackspace:false,
            loop:true
        });
    }
})(jQuery)
const navbarScroll = document.querySelector('.navbar-light');
window.onscroll = function(){
    if(window.scrollY >= 200){
        navbarScroll.style.visibility="visible"
        navbarScroll.style.opacity="1"
        navbarScroll.style.transition="1.5s"
    }else{
        navbarScroll.style.visibility="hidden"
        navbarScroll.style.opacity="0"
        navbarScroll.style.transition="1.5s"
    }
}

// const progress = document.querySelectorAll('.progress')
const skillSection = document.querySelector('#skill .row')
const progress = document.querySelectorAll('.progress-bar')
window.onscroll=function(){
    if(window.scrollY >= skillSection.offsetTop - 550){
        progress.forEach((prog)=>{
            prog.style.width=prog.dataset.width + '%';
            prog.style.transition=`2s`
           
        })
    }
}

//  Testimonials 
jQuery(".testimonial-carousel").owlCarousel({
    autoplay:true,
    smartSpeed:1500,
    dots:true,
    loop:true,
    items:1
})
