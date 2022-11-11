function dev(){
	console.log('=============================================');
}

let styles = ['Джаз', 'Блюз'];

console.log(styles);
dev();

styles.push('Рок-н-Ролл');

console.log(styles);
dev();

styles.splice(styles.length-2, 1, 'Класика');

console.log(styles);
dev();

console.log('-Перший елемент масиву : ' + styles.shift() + ' --> ВИДАЛЕНИЙ');
console.log(styles);

