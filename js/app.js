$(document).ready(function () {
   console.log("site is ready");
    $('.main-tail').height(window.innerHeight-$('header').height()/window.innerHeight);

    date = new Date();
    console.log(date)
    $(".yer").text(date.getFullYear());
    
    $(".main-nav").click(function (elem) {
        if ($(elem.target).data("link") != undefined){
            console.log($(elem.target).data("link"));
            goToByScroll($(elem.target).data("link"),200);
        }
    })

    function goToByScroll(id,offset){
        if (offset == undefined) offset = 0
        if(!$("body").is(id)){
            $('html,body').animate({scrollTop: Math.abs($(id).offset().top-offset)}, 'slow');
        }
    }
});

