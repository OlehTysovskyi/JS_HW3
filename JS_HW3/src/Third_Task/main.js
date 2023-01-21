function find (arr, value){
	let index = 0;
	for(let i=0; i<arr.length; i++){
		if(arr[i] == value) {
			index = i;	
			break;
		}
		else index = -1;
	}
	return index;
}

let arr = ['Honda', 'Toyota', 'BMW', 'Audi', 'Buick', 'Mercedes', 'Porsche'];

console.log(find(arr, 'Audi'));
console.log(find(arr, 'bmw'));

