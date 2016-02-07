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

	var allergyObject = 
			{
				eggs: 1,
				peanuts: 2,
				shellfish: 4,
				strawberries: 8,
				tomatoes: 16,
				chocolate: 32,
				pollen: 64,
				cats: 128
			};
	var allergyArray = Object.keys(allergyObject);
	var array = [];

	this.list = function(){
			if(input<=0){
				return [];
			} else if (input == 1){
				array.push(allergyArray[0]);
			} else if (input == 2){
				array.push(allergyArray[1]);
			} else if (input == 3){
				array.push(allergyArray[2]);
			} else if (input == 8){
				array.push(allergyArray[3]);
			}
		return array;
	};

};



module.exports = Allergies;