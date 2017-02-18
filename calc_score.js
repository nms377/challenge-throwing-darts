

function scoreThrows (radius) {

let score = 0;

	for ( var i = 0; i < radius.length; i++) {	

		//	checks radius and adds score
		if ( radius[i] < 0){
			score += 0;
		} else if ( radius[i] > 10 ) {
			score += 0;
		} else if ( radius[i] >= 5 && radius[i] <= 10) {
			score += 5;
		} else if ( radius[i] < 5 ) {
		  score += 10;
		}
	}

	//	checks that every index value is less than 5 and add 100pts to score if true
	if (radius.every(lessThanFive) && radius.length != 0) {
		score += 100;
	} else {
		score += 0;
	}

	return score;

}

function lessThanFive (element, index, array) {
	return element >0 && element < 5;
}

console.log(scoreThrows([1, 5, 11]));
console.log(scoreThrows([15, 20, 30]));
console.log(scoreThrows([1, 2, 3, 4]));
console.log(scoreThrows([1, 2, 3, 4, 15, 30, 20, 1, 5, 11]));
console.log(scoreThrows([]));

module.exports = scoreThrows;

//	Steven's solution using array methods

// function getValidNumbers (el, i, arr) {
// 	if (typeof el != 'number') {
// 		return false;
// 	} else if (el >= 0) {
// 		return parseInt(el);
// 	} else {
// 		return false;
// 	}
// }

// function totalScore (prev, curr, i, arr) {
// 	return prev + curr;
// }

// function scoreThrows (scores) {
	
// 	return scores.filter(getValidNumbers)
// 	.map(el, i, arr) => {
// 			if ( el >= 0 && el < 5 ) {
// 				return 10;
// 			} else if (el >= 5 && el <= 10 ) {
// 				reutrn 5;
// 			} else if (el > 10 ) {
// 				return 0;
// 			}
// 		}
// }).reduce(totalScore, 0);
