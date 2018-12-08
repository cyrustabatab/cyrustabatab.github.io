$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false

    
    });

    var typed = new Typed(".typed", {
        strings: ["Coder.", "Software Engineer.", "Lifelong Learner."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    
    });


});
