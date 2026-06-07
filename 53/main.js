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
// let sum = 0;
// let result = 0;
// function getUserAverageAge(users) {
// 	for (let i = 0; i < users.length; i++) {
// 		sum += users[i].age;
// 		result = sum / users.length;
// 	}
// }
// getUserAverageAge(users);
// console.log(result);
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
// function getAllAdmins(users) {
// 	const admin = [];
// 	for (let i = 0; i < users.length; i++) {
// 		if (users[i].isAdmin === true) {
// 			admin.push(users[i]);
// 		}
// 	}
// 	return admin;
// }
// console.log(getAllAdmins(users));

// ================================================
// function getAllAdmins(users) {
// 	const admin = [];
// 	users.forEach(user => {
// 		if (user.isAdmin === true) {
// 			admin.push(user);
// 		}
// 	});
// 	return admin;
// }
// console.log(getAllAdmins(users));
// let num = prompt("Введите количество элементов массива");
function first(arr, n) {
	const array = [];
	if (n === undefined) {
		array.push(users[0]);
		console.log(array);
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
		array.push(arr[i]);
	}
	return array;
}
console.log(first(users, 2));

// 2 ЗАДАНИЕ ЧЕРЕЗ RETURN
// function getUserAverageAge(users) {
// 	let avgAge = 0;
// 	for (let i = 0; i < users.length; i++) {
// 		avgAge += users[i].age;
// 	}
// 	return avgAge / users.length;
// }
// console.log(getUserAverageAge(users));
