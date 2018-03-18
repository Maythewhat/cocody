// Document ready
$(document).ready(function () {
	var $prenomToi = $('#prenom-toi');
	var $prenomTonAmi = $('#prenom-tonAmi');

	// au chargement, on affiche le prénom actuel
	var prenomActuel = getData('PRENOM');
	var prenomTonAmi = getData('POTE1');
	$prenomToi.text(prenomActuel);
	$prenomTonAmi.text(prenomTonAmi);
	

	function saveAllData(){
		var objAnimal = {
			espece : $("#espece-animal").val(),
			couleur : $("#couleur-animal").val()
		};
		
		saveData("ANIMAL", JSON.stringify(objAnimal));
		
		var objAges = {
			toi : $("#age-toi").val(),
			tonAmi : $("#age-tonAmi").val()
		};
		saveData("AGES", JSON.stringify(objAges));
	}
	
	$("input").keyup(function(){
		saveAllData();
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
