// 1 ЗАДАНИЕ
const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];
users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);
console.log(users);
// 2 ЗАДАНИЕ
let sum = 0;
let result = 0;
function getUserAverageAge(users) {
	for (let i = 0; i < users.length; i++) {
		sum += users[i].age;
		result = sum / users.length;
	}
}
getUserAverageAge(users);
console.log(result);
// =====================================================
// let sum = 0;
// let result = 0;
// function getUserAverageAge(users) {
// 	users.forEach(user => {
// 		sum += user.age;
// 		result = sum / users.length;
// 	});
// }
// getUserAverageAge(users);
// console.log(result);
// 3 ЗАДАНИЕ
function getAllAdmins(users) {
	for (let i = 0; i < users.length; i++) {
		if (users[i].isAdmin === true) {
			console.log(users[i]);
		}
	}
}
getAllAdmins(users);
// ================================================
function getAllAdmins(users) {
	users.forEach(user => {
		if (user.isAdmin === true) {
			console.log(user);
		}
	});
}
getAllAdmins(users);
// let num = prompt("Введите количество элементов массива");
function first(arr, n) {
	if (n === undefined) {
		console.log(arr[0]);
	} else if (n == 0) {
		console.log([]);
		return [];
	} else if (n > arr.length) {
		console.error(
			`Не может быть больше длины массива, длина массива: ${arr.length}`,
		);
		return;
	}
	for (let i = 0; i < n; i++) {
		console.log(arr[i]);
	}
}
first(users, 1);
