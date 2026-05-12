//1 задание
// let number = 10;
// if (number % 2 !== 0) {
// 	console.log("число нечетное");
// } else {
// 	console.log("число четное");
// }
// -----------------------------------------
// let input = prompt("Введите число");
// let num = Number(input);
// if (isNaN(num)) {
// 	alert("Это не число");
// } else if (num % 2 !== 0) {
// 	alert("Число нечетное");
// } else {
// 	alert("Число четное");
// }
// 2 задание
// const age = 17;
// let discount =
// 	age < 18 ? (discount = 10) : age <= 65 ? (discount = 20) : (discount = 30);
// console.log(`Скидка ${discount}%`);
// ------------------------------------------------
// const age = 38;
// let discount;
// switch (true) {
// 	case age < 18:
// 		discount = 10;
// 		break;
// 	case age <= 65:
// 		discount = 20;
// 		break;
// 	case age < 65:
// 		discount = 30;
// }
// console.log(`Скидка составит: ${discount}%`);

// 3 задание

// ---------------------------------------------------
// const username = prompt(`Ваше имя`);
// const password = prompt(`Ваш пароль`);
// if ((username === "user", "admin" && password === "123456")) {
// 	console.log("Доступ разрешен");
// 	alert("Доступ разрешен");
// } else {
// 	console.log("Доступ заперщен");
// 	alert("Доступ запрещен");
// }

// -------------------------------------------
// const username = prompt(`Ваше имя`);
// const password = prompt(`Ваш пароль`);
// switch (username) {
// 	case "admin":
// 	case "user":
// 		switch (password) {
// 			case "123456":
// 				console.log("Доступ разрешен");
// 				alert("Доступ разрешен");
// 				break;
// 		}
// 		break;
// 	default:
// 		console.log("Доступ запрещен");
// 		alert("Доступ запрещен");
// 		break;
// }

// задание 4

// const weight = +prompt("Введите вес посылки:");
// let price;

// switch (true) {
// 	case Number.isNaN(weight):
// 		alert("Ошибка: Введите число, а не текст");
// 		break;
// 	case weight <= 0:
// 		alert("Введите корректный вес");
// 		break;
// 	case weight < 1:
// 		price = Number(5);
// 		break;
// 	case weight <= 5:
// 		price = Number(10);
// 		break;
// 	case weight > 5:
// 		price = Number(15);
// 		break;
// }

// if (price !== underfined) {
// 	switch (type) {
// 		case "стандарт":
// 			coefficient = Number(1);
// 			break;
// 		case "экспресс":
// 			coefficient = Number(1.5);
// 			break;
// 		case "премиум":
// 			coefficient = Number(2);
// 			break;
// 		default:
// 			alert("Неверный тип доставки");
// 			break;
// 			const result = price * coefficient;
// 			alert(result);
// 	}
// }
