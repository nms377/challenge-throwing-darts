function scoreThrows (radius) {

	console.log('radius', radius);

	let score = 0;

	for ( var i = 0; i < radius.length; i++) {	

		if ( radius[i] > 10 ) {
			return score += 0;
		} else if ( radius[i] >= 5 && radius[i] <= 10) {
			return score += 5;
		} else if ( radius[i] < 5 ) {
			return score += 10;
		}
	}

	console.log('score', score);
	return score += score;

}

console.log(scoreThrows([1,2,3,4]));