"use strict";
// const age = prompt("Введите ваш возраст");
// function checkAge(age, callback) {
// 	if (age >= 18) {
// 		callback("Доступ разрешен");
// 	} else {
// 		callback("Доступ запрещен");
// 	}
// }
// function showMess(mess) {
// 	console.log(mess);
// }
// function showError(mess) {
// 	console.error(mess);
// }
// checkAge(age, showMess);
// checkAge(age, showError);

// const name = "alex";
// const myFunc = function (name) {
// 	console.log(name + " log");
// };
// const myFunc2 = () => {
// 	console.log("log2");
// };
// function callFunc(func) {
// 	func(name);
// }
// callFunc(myFunc);
// callFunc(myFunc2);

// 1 ЗАДАЧА

let num = prompt("Введите число");
function rounding(num, callback) {
	if (num <= 5) {
		num = 0;
		callback("число ближе к " + num);
	} else if (num > 10) {
		callback("Вы ввели неправильное число");
	} else {
		num = 10;
		callback("число ближе к " + num);
	}
}
function showMessage(message) {
	console.log(message);
}
rounding(num, showMessage);

// 2 ЗАДАЧА

let password = prompt("Придумайте пароль");
function checkPassword(password, callback) {
	if (password.length < 6) {
		callback("Пароль слишком короткий!");
	} else {
		callback("Пароль принят");
	}
}
function showMessage(message) {
	console.log(message);
	alert(message);
}
checkPassword(password, showMessage);

// 3 ЗАДАЧА

let hour = +prompt("Введите час");
function getDayTime(hour, callback) {
	if (hour < 0 || hour > 24) {
		callback("Некорректный час");
	} else if (hour >= 6 && hour <= 12) {
		callback("Доброе утро!");
	} else {
		callback("Привет!");
	}
}
function showMessage(message) {
	console.log(message);
	alert(message);
}
getDayTime(hour, showMessage);
// 4 ЗАДАЧА
let sum = +prompt("Введите сумму покупки:");
function calculateDiscount(sum, callback) {
	if (sum < 0) {
		callback("Ошибка: сумма не может быть отрицательной");
	} else if (sum <= 1000) {
		const finalPrice = sum;
		callback(`Скидки нет. К оплате: ${finalPrice}`);
	} else {
		sum *= 0.9;
		callback(`Вам доступна скидка! К оплате: ${sum}`);
	}
}
function showMessage(message) {
	console.log(message);
	alert(message);
}
calculateDiscount(sum, showMessage);
// 5 ЗАДАЧА
let temp = +prompt("Сколько сейчас градусов?");
function checkWeather(temp, callback) {
	if (temp < -40 || temp > 40) {
		callback("Экстремальная погода, сидите дома");
	} else if (temp <= 15) {
		temp = "холодно";
		callback("На улице " + temp);
	} else {
		temp = "тепло";
		callback("На улице " + temp);
	}
}
function showMessage(message) {
	console.log(message);
	alert(message);
}
checkWeather(temp, showMessage);
