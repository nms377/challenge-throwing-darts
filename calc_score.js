

function scoreThrows (radius) {

	// console.log('radius', radius);

let score = 0;

		for ( var i = 0; i < radius.length; i++) {	

			//	checks radius and adds score
			if ( radius[i] > 10 ) {
				score += 0;
			} else if ( radius[i] >= 5 && radius[i] <= 10) {
				score += 5;
			} else if ( radius[i] < 5 ) {
			  score += 10;
			}
		}

		if (radius.every(lessThanFive)) {
			score += 100;
		} else {
			score += 0;
		}

	return score;

}

function lessThanFive (element, index, array) {
	return element < 5;
}

console.log(scoreThrows([1, 5, 11]));
console.log(scoreThrows([15, 20, 30]));
console.log(scoreThrows([1, 2, 3, 4]));
console.log(scoreThrows([1, 2, 3, 4, 15, 30, 20, 1, 5, 11]));
