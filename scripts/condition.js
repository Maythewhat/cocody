// Document ready
$(document).ready(function () {
    var $potesInfo = $("#potes-info");
    var $pote1 = $("#pote1");
    var $pote2 = $("#pote2");

    function afficherPotes() {
        var prenom1 = $pote1.val();
        var prenom2 = $pote2.val();

        if (prenom1 && prenom2) {
            $potesInfo.text('Tes amis sont ' + prenom1 + ' et ' + prenom2 + ', tu vas donc leur dire « Salut ! »');
        }
        else {
            $potesInfo.text('');
        }
    }


    $pote1.keyup(function () {
        saveData('POTE1', $pote1.val());
        afficherPotes();
    });

    $pote2.keyup(function () {
        saveData('POTE2', $pote2.val());
        afficherPotes();
    });
});

// Fonctions stockage
function saveData(name, value) {
    console.log('Enregistrement de ' + name, value);
    sessionStorage.setItem(name, value);
}