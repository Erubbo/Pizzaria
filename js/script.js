// animações

// $('').waypoint(
//     function(){

//     },{

//     })


$('section.sunday').waypoint(
    function (direcao) {
        if (direcao == "down") {
            $('div.leaf1').addClass('animate__animated animate__fadeInUp')
            $('div.leaf3').addClass('animate__animated animate__fadeInUp')
            $('div.shrimp').addClass('animate__animated animate__fadeInUp animate__slow')
            $('div.tomato').addClass('animate__animated animate__fadeInUp animate__slow')
            $('div.leaf2').addClass('animate__animated animate__fadeInUp animate__slower')
            $('div.cheese').addClass('animate__animated animate__fadeInUp animate__slower')

        } if (direcao == "up") {
            $('div.leaf1').removeClass('animate__animated animate__fadeInUp')
            $('div.leaf3').removeClass('animate__animated animate__fadeInUp')
            $('div.shrimp').removeClass('animate__animated animate__fadeInUp animate__slow')
            $('div.tomato').removeClass('animate__animated animate__fadeInUp animate__slow')
            $('div.leaf2').removeClass('animate__animated animate__fadeInUp animate__slower')
            $('div.cheese').removeClass('animate__animated animate__fadeInUp animate__slower')

        }

    }, {
    offset: '450px;'
})












// exibe menu

function mostrarMenu() {
    $('nav ul#left').css('display', 'flex');
    $('nav ul#right').css('display', 'flex');
}

function esconderMenu() {
    $('nav ul#left').css('display', 'none');
    $('nav ul#right').css('display', 'none');
}





var controle = true;

$('nav ul.icone-menu-mobile').click(function () {
    if (controle == true) {
        mostrarMenu();
        controle = false;
    } else {
        esconderMenu();
        controle = true;
    }
})