'use strict';
function first(word) {
	return word.charAt(word); //første bogstav
}

function last(word) {
	return word.charAt(word.length - 1); //sidste bogstav
}

function middle(word) {
	return word.substring(1, word.length - 1); //det i mellem
}

var word = prompt('Write something: ');

function phase(word){
	if (word.length <= 1 ) { 
		return true;
	}
	return first(word) === last(word)&&phase(middle(word));
}

console.log(phase(word));