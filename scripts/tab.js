// Document ready
$(document).ready(function () {
    var $tableauResultat = $('#tableauResultat');
    var $inputs = $('input');

    var prenom1 = getData('POTE1');
    var prenom2 = getData('POTE2');

    if (prenom1) {
        $('#tab1').val(prenom1);
    }
    if (prenom2) {
        $('#tab2').val(prenom2);
    }

    // on affiche le tableau avec les deux amis 
    afficherTableau();

    // puis à chaque fois que le tableau change, on affiche
    $inputs.keyup(function () {
        afficherTableau();
    });

    function afficherTableau() {
        var prenomsAvecGuillements = [];
        $inputs.each(function (index, element) {
            prenomsAvecGuillements.push('‘' + element.value + '’');
        });

        $tableauResultat.text('[' + prenomsAvecGuillements.join(', ') + '];');
    }
});

// Fonctions stockage

function getData(name) {
    return sessionStorage.getItem(name);
}