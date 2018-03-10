// Document ready
$(document).ready(function () {
    var $salutationsInfo = $("#salutations-info");
    var $salutations = $("#salutations");

    $salutations.keyup(function () {
        var salutations = $salutations.val();
        if (salutations) {
            var pote1 = getData('POTE1');
            var pote2 = getData('POTE2');
            var text = 'Si le nom est différent de tes amis ' + pote1 + ' et ' + pote2 + ', tu vas donc dire ' + salutations + ' à la personne !';
            $salutationsInfo.text(text);
        }
        else {
            $salutationsInfo.text('');
        }
    });

});

function getData(name) {
    return sessionStorage.getItem(name);
}
