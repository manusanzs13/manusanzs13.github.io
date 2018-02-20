$(document).ready(function(){
    // Menú hamburguesa inicio
    $(".burger").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    $(".cerrar").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    // Menú hamburguesa páginas normales
    $(".burger2").click(function(){
        $(".burger2").toggleClass("abierto"); // Añadir una clase
        $(".menu2").animate({width:"toggle"},500);
        $(".menu2 a").toggleClass("aparicion");
    });
    // Cambio de estilo según scroll
    $(window).on("scroll",function(){
        var posicion = $("#primera").offset();
        if ($(window).scrollTop() > posicion.top - 50 ) {
            $("header").removeClass("blanco");
        } else {
            $("header").addClass("blanco");
        };
    });
    // Scroll suave
    $("a").on("click",function(){
        if (this.hash !== "") {
            var hash = this.hash;
            $("html, body").animate({
                // Objeto con propiedad y valor
                scrollTop: $(hash).offset().top
            }, 800);
        }
        // Sintaxis de animate:
        // animate({objeto}, duración)
    });
    // Pestañas
    $(".tabs li").click(function(){
        var tabId = $(this).attr("tab"); // Cada vez que hagamos click en el atributo tab nos guarda el valo en la variable
        $(".tabs li").removeClass("current"); // Elimina la clase current a pestañas
        $(".tab-content").removeClass("current"); // Elimina la clase current a contenido
        $(this).addClass("current"); // Añade la clase current a la pestaña pulsada
        $("#"+tabId).addClass("current"); // Añade la clase current al contenido con el mismo id que el valor de la variable tabId
    });
    $(".btn-side").click(function(){
        $(".menu3").animate({width:"toggle"},500);
        $(".fa-arrow-circle-right").toggle();
        $(".fa-arrow-circle-left").toggle();
    });
    $("#open").click(function(){
        $(".overlay, .modal").addClass("visible");
    });
    $("#close").click(function(){
        $(".overlay, .modal").removeClass("visible");
    });

});