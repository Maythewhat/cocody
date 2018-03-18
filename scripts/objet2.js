// JavaScript Document// Document ready
$(document).ready(function () {

	// au chargement, on affiche le prénom actuel
	var prenomActuel = getData('PRENOM');
	var prenomTonAmi = getData('POTE1');
	$('#prenom-toi').text(prenomActuel);
	$('#prenom-tonAmi').text(prenomTonAmi);
	
	var objAges = JSON.parse(getData('AGES'));
	$("#age-toi").text(objAges.toi);
	$("#age-tonAmi").text(objAges.tonAmi);
	
	var objAnimal = JSON.parse(getData('ANIMAL'));
	$("#espece-animal").text(objAnimal.espece);
	$("#couleur-animal").text(objAnimal.couleur);
	

	
});




// Fonctions stockage
function saveData(name, value) {
	console.log('Enregistrement de ' + name, value);
	sessionStorage.setItem(name, value);
}

function getData(name) {
	return sessionStorage.getItem(name);
}
