
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
	var allergyNumberArray = [1,2,4,8,16,32,64,128];
	var array = [];

	this.list = function(){
			if(input<=0){
				return [];
			} else {
				input - allergyObject[];
				array.push()
				return this.list(input)
			}
	};

};


		for(var i=0; i<allergyArray.length; i++){
				if(input%2){
					array.push(allergyArray[i])
					input = input - allergyArray[i]
				} else if(input%allergyNumberArray[i]){
					allergyArray.shift()
					array.push(allergyArray[i]);
				}
		}

		if(input%2){
			array.push(allergyArray[0]);
			input = input - allergyObject[allergyArray[0]];
			allergyArray.shift();
			this.list(input)
		} else {
			array.push(allergyArray[0]);
			allergyArray.shift();
			input = input - allergyObject[allergyArray[0]];
		}



		if(input%2){
			array.push()
			input - allergyArray[];
		}

		if(input%2){
			array.push(allergyArray[0])
			input = input - allergyObject[allergyArray[0]];
			allergyArray.shift();
			this.list(input)
		} else {
			array.push
		}









