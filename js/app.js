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

    var XHR = ( window.XMLHttpRequest && "withCredentials" in (new XMLHttpRequest) ) ? new XMLHttpRequest : window.XDomainRequest ? new XDomainRequest : null;
    if(XHR){
        XHR.open("GET","http://relaxmusic.esy.es/main/form");
        XHR.onload = function(){
            alert( this.responseText );
        }
    }

});

