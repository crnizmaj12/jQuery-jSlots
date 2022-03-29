$(document).ready(function() {
		let bank = Number($("span").html())
		
		function replaceText(term){
			$('.message').html(term);
		}

		$('button').click(function(event) {
			event.preventDefault();
			var bet = Number($("input[type='bet']").val());
			var question = Math.floor((Math.random() * 8) + 1);
			var answer = Number($("input[type=answer]").val());

			if (bet > 100 || bet < 5) {
				replaceText("Please enter a bet amount between €5 and €100!");
			}

			if (answer === question) {
				replaceText("Correct! You have won " + bet + " €!");
				bank = bank + bet;
			} else if (answer === (question - 1) | answer === (question + 1)) {
				replaceText("Close but no cigar!");
			}	else if (answer < 1 | answer > 8){
				replaceText("That is not a number between 1 and 8!");
			} else if (answer !== question) {
				bank = bank - bet;
				replaceText("Wrong! You have lost " + bet + " €!");
			}
		
			$("span").html(bank);
	});	

});