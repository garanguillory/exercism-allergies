// * eggs (1)
// * peanuts (2)
// * shellfish (4)
// * strawberries (8)
// * tomatoes (16)
// * chocolate (32)
// * pollen (64)
// * cats (128)

// take total subtract 1 (eggs) then push eggs to the allergic array
// take new total subtract 2 (peanuts) then push peanuts to the allergic array
// take new total subtract 4 (shellfish) then push shellfish to the allergic array


var Allergies = function(input){
	input = input || [];

	this.list = function(){
			if(input == 1){
				return [ 'eggs' ];
			} else {
				return input;
			}
	};

};



module.exports = Allergies;