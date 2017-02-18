function scoreThrows (radius) {

	console.log('radius', radius);

	let score = 0;


		for ( var i = 0; i < radius.length; i++) {	

			if ( radius[i] > 10 ) {
				score += 0;
			} else if ( radius[i] >= 5 && radius[i] <= 10) {
				score += 5;
			} else if ( radius[i] < 5 ) {
			  score += 10;
			}
		}


	return score;

}

console.log(scoreThrows([1,2,3,4]));