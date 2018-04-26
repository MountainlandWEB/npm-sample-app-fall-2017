let MathUtils = (function(){
	let vm = this;

	vm.add = add;
	vm.subtract = subtract;
	vm.average = average;

	return vm;

	function add(a,b){
		return a+b;
	}

	function subtract(a,b){
		let result;
		if(isNumeric(a) && isNumeric(b))
		{
			result = a - b;
		}
		else {
			throw new Error(`Either ${a} or ${b} was not a number`);
		}
		return result;
	 }

	function average(...nums){
		let sum = 0;
		nums.forEach(current =>{
			if(isNumeric(current)) {
                sum += current
            }
            else {
				throw new Error (`${current}, is not a number`);
			}
		});
		return sum/nums.length

	}

	function isNumeric(n) {
		return typeof n === 'number';
	}


}());
