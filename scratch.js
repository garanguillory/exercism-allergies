
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
	var allergyArray = Object.keys(allergyObject);
	var allergyNumberArray = [1,2,4,8,16,32,64,128];
	var array = [];
	var answerArray = [];


	this.list = function(){

// create an array that contains the allergy numbers up to and 
// including the input number (the input could be one of the 
// allergy numbers)
			for(var i=0; i<=input; i++){
					if(allergyNumberArray[i] <= input){
							array.push(allergyNumberArray[i])
					}
			}
		// if (input == 0 || input == 'undefined') { return []; }
			if(input == 0 || input == 'undefined'){
				return answerArray;
			} else {
				if(input - array[array.length-1] == 0){
						answerArray.unshift(allergyObject[array.pop()]);
						return answerArray;
				} else {
						// subtract last index of the array (greatest number)
						input = input - array[array.length-1];
						answerArray.unshift(allergyObject[array.pop()]);
						return this.list();
					}
				}
			}
	};

// scratch text
		// create an array that is as long as the input
		// if odd, answerArray.push('eggs') everytime
		// if input == allergyNumberArray[i], return that allergy
		// if input != allergyNumberArray[i], subtract closest/largest
		// number and continue from there
		// i.e. input = 30, 30 - a16 = 14, 14 - a8 = 6, 6 - a4 = 2, 2 - a2 = 0;
		// so, tomatoes, strawberries, shellfish, peanuts
		// i.e. input = 5, 5 - a4 = 1, 1 - a1 = 0
		// so, shellfish, eggs

		for(var i=0; i<=allergyNumberArray.length; i++){
				if(allergyNumberArray[i] < input){
						array.push(allergyNumberArray[i])
				}
		}


// scratch
		for(var i=0; i<allergyArray.length; i++){
				if(input%2){
					array.push(allergyArray[i])
					input = input - allergyArray[i]
				} else if(input%allergyNumberArray[i]){
					allergyArray.shift()
					array.push(allergyArray[i]);
				}
		}
		
		// push to an array
		// return array.length for each allergy
		// splice off array.length - specific allergy number
		// shift off first element of allergyNumber array 


		for(var i=1;i<=input;i++){
			array.push(i);
		}

		if(input%2){
			answerArray.push()
		}

// scratch
		if(input%2){
			array.push(allergyArray[0]);
			input = input - allergyObject[allergyArray[0]];
			allergyArray.shift();
			this.list(input)
		} else if(input%) {
			array.push(allergyArray[0]);
			allergyArray.shift();
			input = input - allergyObject[allergyArray[0]];
		}

		if(input%2){
			array.push(allergyArray[0]);
			input = input - allergyNumberArray[0];
			allergyArray.shift();
			this.list(input)
		} else if(input%) {
			array.push(allergyArray[0]);
			allergyArray.shift();
			input = input - allergyObject[allergyArray[0]];
		}



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

// need to get the length of the arrays to be the same
// if (input - (numArray[numArray.length-1]) = 0) {
//			then return the allergy associated with that number
// 					 return allergyObject[input]
//    }

var allergyNumberArray = [1,2,4,8,16,32,64,128];
var array = [];
var answerArray = [];
var input = 30;
var last = array[array.length-1];

// create an array that contains the allergy numbers up to and 
// including the input number (if the input number is one of the 
// allergy numbers)
	for(var i=0; i<=allergyNumberArray.length; i++){
			if(allergyNumberArray[i] <= input){
					array.push(allergyNumberArray[i])
			}
	}
// if (input - last == 0) // do something
	if(input - array[array.length-1] == 0){
		return answerArray.push(allergyObject[input])
	} else {
			// subtract last index of the array (greatest number)
			input = input - array[array.length-1];
			answerArray.push(allergyObject[array.pop()]);
			this.list(input)
	}







