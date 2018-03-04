// Document ready
$(document).ready(function () {
	var $total = $("#total");
	var $chiffreA = $("#chiffreA");
	var $chiffreB = $("#chiffreB");
	$("input").keyup(function () {
var total = +$chiffreA.val() + +$chiffreB.val();
$total.text(total);

	});


});
