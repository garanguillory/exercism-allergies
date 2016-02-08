// * eggs (1)
// * peanuts (2)
// * shellfish (4)
// * strawberries (8)
// * tomatoes (16)
// * chocolate (32)
// * pollen (64)
// * cats (128)

var Allergies = function(input){
	var allergyObject = 
		{
			1: "eggs",
			2: "peanuts",
			4: "shellfish",
			8: "strawberries",
			16: "tomatoes",
			32: "chocolate",
			64: "pollen",
			128: "cats"
		};
	var allergyNumberArray = [1,2,4,8,16,32,64,128];
	var answerArray = [];


	this.list = function(){
		var array = [];

			for(var i=0; i<=input; i++){
					if(allergyNumberArray[i] <= input){
							array.push(allergyNumberArray[i])
					}
			}

			if(input == 0 || input == 'undefined'){
				return answerArray;
			} else {
				if(input - array[array.length-1] == 0){
						answerArray.unshift(allergyObject[array.pop()]);
						return answerArray;
				} else {
						input = input - array[array.length-1];
						answerArray.unshift(allergyObject[array.pop()]);
						return this.list();
					}
				}
		};
	
	this.allergicTo = function(stimulant){
		var allergyList = this.list();
			return (allergyList.indexOf(stimulant) != -1) ? true : false;
		};

	};



module.exports = Allergies;