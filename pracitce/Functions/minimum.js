// Your code here.
const min = function(num1, num2){
	if(num1 < num2) {
    	return num1;
    }else {
    	return num2;
    }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10