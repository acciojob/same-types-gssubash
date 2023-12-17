function isSameType(value1, value2) {
  //your js code here
	if(value1[0] != '"' && value1[0] != "'"){
	value1 = parseInt(value1);	
	}

	if(value2[0] != '"' && value2[0] != "'"){
	value2 = parseInt(value2);	
	}
	
	return  typeof value1 === typeof value2;
}
  
// do not change the code below.     
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
// alert( value1); alert( value2);
alert(isSameType(value1, value2));
