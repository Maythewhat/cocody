// Document ready
$(document).ready(function () {
    var $total = $("#total");
    var $chiffreA = $("#chiffreA");
    var $chiffreB = $("#chiffreB");

    // A chaque touche du clavier tapée
    $("input").keyup(function () {
        // le + sert à convertir en chiffre
        var total = +$chiffreA.val() + +$chiffreB.val();
        if (isNaN(total)) {
            $total.text('Il faut saisir des numéros pour a et b !')
        } else {
            $total.text(total);
        }
    });
});
