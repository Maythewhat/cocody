// Document ready
$(document).ready(function () {

	var $prenomAffichage = $('#prenom-affichage');
	var $newPrenomInput = $('#new-prenom-input');

	// au chargement, on affiche le prénom actuel
	var prenomActuel = getData('PRENOM');
	$prenomAffichage.text(prenomActuel);

	// on s'abonne au changement du nouvel input
	$newPrenomInput.keyup(function () {
		var text = $newPrenomInput.val();
		
		$prenomAffichage.text(text);
		//saveData('PRENOM', text);
	});
});


// Fonctions stockage
function saveData(name, value) {
	console.log('Enregistrement de ' + name, value);
	sessionStorage.setItem(name, value);
}

function getData(name) {
	return sessionStorage.getItem(name);
}
