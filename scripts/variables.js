// Document ready
$(document).ready(function() {
	
	// On récupère l'élement JQuery avec l'id prenom-input
	var $prenomInput = $('#prenom-input');
	
	// On s'abonne au changement sur $prenomInput
	$prenomInput.change(function () {
		// Donc, à chaque changement, on sauvegarde la nouvelle donnée ($prenomInput.val())
		saveData('PRENOM', $prenomInput.val());
	});	
});

// Fonctions stockage
function saveData(name, value) {
	console.log('Enregistrement de ' + name,value);
	sessionStorage.setItem(name, value);
}

function getData(name){
	return sessionStorage.getItem(name);
}