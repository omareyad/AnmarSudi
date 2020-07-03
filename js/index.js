$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $(".Desktpo-nav").addClass("ShadowHeader");
    }
    else{
        $(".Desktpo-nav").removeClass("ShadowHeader");
    }
}); //missing );