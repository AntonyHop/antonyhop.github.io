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
        $("#tel").mask("(999) 999 9999");
        $('.send-form').click(function(){
            var send = false;
            if ($('#name').val().length > 0 && $('#tel').val().length>0){
                send = true;
                $('#name').css('border','2px solid #ccc');
                $('#tel').css('border','2px solid #ccc');
            }else {
                $('#name').css('border','2px solid red');
                $('#tel').css('border','2px solid red');
            }
            if(send){
                var body = 'name=' + encodeURIComponent($('#name').val()) + '&tel=' + encodeURIComponent($('#tel').val()) + '&text=' + encodeURIComponent($('#text').val());
                XHR.open("POST","http://relaxmusic.esy.es/main/form&"+body);
                XHR.onload = function(){
                    if(this.responseText == 'done'){
                        $('#add_work').modal('toggle');
                    }
                }
                XHR.send();
            }
        });
    }else {
        $('.addW').hide();
    }

});

