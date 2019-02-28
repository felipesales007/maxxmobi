// para quando a tela esta em carregamento
var i = setInterval(function() {
    clearInterval(i);
    $(".fe-carregando").fadeOut("slow");
    $(".fe-carregado").fadeIn("slow");
    
    // animações
    AOS.init();
});

// tempo de apresentação de cada slide
$(".carousel").carousel({
    interval: 7000
});


// ano atual
var ano = new Date();
document.getElementById("fe-ano-rodape").innerHTML = ano.getFullYear();

// para scroll suave
$(".fe-scroll-home").click(function() {
    $("html, body").animate({
        scrollTop: $("#home").offset().top - 1000
    }, "slow");
    return false;
});

$(".fe-scroll-empresa").click(function() {
    $("html, body").animate({
        scrollTop: $("#empresa").offset().top - 70
    }, "slow");
    return false;
});

$(".fe-scroll-servicos").click(function() {
    $("html, body").animate({
        scrollTop: $("#servicos").offset().top - 70
    }, "slow");
    return false;
});

$(".fe-scroll-contato").click(function() {
    $("html, body").animate({
        scrollTop: $("#contato").offset().top - 70
    }, "slow");
    return false;
});

// fechamneto automático do menu
$(".nav-link").click(function() {
    $(".navbar-toggler").click();
});