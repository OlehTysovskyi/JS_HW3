function filterRange(arr1, a, b){
	let arr2 = [];
	for(let i=0; i<arr1.length; i++){
		if(arr1[i] >= a && arr1[i] <= b){
			arr2.push(arr1[i]);
		}
	}
	return arr2;
}

let arr1 = [1, 4, -122, -8, 11, 5436];
console.log(arr1);

let arr2 = filterRange(arr1, -12, 12);
console.log(arr2);

