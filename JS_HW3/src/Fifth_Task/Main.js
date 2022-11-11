function camelize(str){
	let arr = str.split('');
	
	for(let i=0;i<arr.length; i++){
		if(arr[i] == '-'){
			arr[i] = arr[i+1].toUpperCase();
			arr.splice(i+1,1);
		}
	}
	
	str = arr.join('');
	return str;
}

let str = 'my-short-string';

console.log('-Before:\n ('+ str + ')');

console.log('-After:\n ('+ camelize(str) + ')');

