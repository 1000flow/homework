// // 1 ЗАДАНИЕ

// const person = {
// 	name: "Данил",
// 	age: 17,
// 	profession: "student",
// 	studying: "technical school",
// };
// console.log(person);

// // 2 ЗАДАНИЕ

// const isEmpty = object => {
// 	for (const key in object) {
// 		return false;
// 	}
// 	return true;
// };
// const object = {};
// console.log(isEmpty(object));

// // 3 ЗАДАНИЕ

// const task = {
// 	title: "Заголовок",
// 	description: "текст",
// 	isCompleted: true,
// };
// for (let key in task) {
// 	console.log(`${key} ${task[key]}`);
// }
// function cloneAndModify(object, modifications) {
// 	return { ...object, ...modifications };
// }
// const modifiedTask = cloneAndModify(task, {
// 	isCompleted: false,
// 	title: "New title",
// });
// for (let key in modifiedTask) {
// 	console.log(`${key}: ${modifiedTask[key]}`);
// }

// // 4 ЗАДАНИЕ

// const callAllMethods = obj => {
// 	for (let key in obj) {
// 		if (typeof obj[key] === "function") {
// 			obj[key]();
// 		}
// 	}
// };

// const myObject = {
// 	method1() {
// 		console.log("Метод 1 вызван");
// 	},
// 	method2() {
// 		console.log("Метод 2 вызван");
// 	},
// 	property: "Это не метод",
// };
// callAllMethods(myObject);
// ========================================
// const user = {
// 	name: "Alex",
// 	age: 30,
// 	isProgrammer: true,
// 	greet: name => {
// 		console.log(`hello ${user.name}`);
// 	},
// };
// user.greet();
// user.company = "aroken";
// console.log(user);
// ===========================================

// const CHARACTERISTICS = "characteristics";
// const product = {
// 	name: "Ноутбук",
// 	price: 60000,

// 	[CHARACTERISTICS]: {
// 		brand: "apple",
// 		cpu: "m1",
// 	},
// };

// const discount = {
// 	percent: 10,
// 	day: 25,
// };

// const product2 = { ...product, discount };
// product2.name = "Планшет";
// product2[CHARACTERISTICS].brand = "fd";
// console.log(product);
// console.log(product2);
// for (let key in product) {
// 	if (key === CHARACTERISTICS) {
// 		for (let charKey in product[key]) {
// 			console.log(`${charKey}:`, product[key][charKey]);
// 		}
// 	} else {
// 		console.log(`${key}:`, product[key]);
// 	}
// }
// 1 ЗАДАНИЕ

const person = {
	name: "Данил",
	age: 17,
	profession: "student",
	studying: "technical school",
};
console.log(person);

// 2 ЗАДАНИЕ

const firstName = {
	name: "Danil",
};
const object = {};
function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}
console.log(isEmpty(object));

// 3 ЗАДАНИЕ

const task = {
	title: "Заголовок",
	description: "текст",
	isCompleted: true,
};
for (let key in task) {
	console.log(`${key}: ${task[key]}`);
}
const cloneAndModify = (object, modifications) => {
	return { ...object, ...modifications };
};
const modifiedTask = cloneAndModify(task, {
	isCompleted: false,
	title: "New title",
});
for (const key in modifiedTask) {
	console.log(`${key}: ${modifiedTask[key]}`);
}

// 4 задание

const callAllMethods = object => {
	for (let key in myObject) {
		if (typeof object[key] === "function") {
			object[key]();
		}
	}
};
const myObject = {
	method1() {
		console.log("Метод 1 вызван");
	},
	method2() {
		console.log("Метод 2 вызван");
	},
	property: "Это не метод",
};
callAllMethods(myObject);
