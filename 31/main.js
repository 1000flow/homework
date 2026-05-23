// 1 задание

// function calculateFinalPrice(baseCount, discount, tax) {
// 	const discountAmount = baseCount * (discount / 100);
// 	const discountCount = baseCount - discountAmount;
// 	return (taxCount = discountCount * tax + discountCount);
// }
// console.log(calculateFinalPrice(200, 50, 0));

// 2 задание

// const checkAccess = (name, pass) => {
// 	switch (true) {
// 		case name === "admin" && pass === "123456":
// 			console.log("Доступ разрешен");
// 			break;
// 		default:
// 			console.log("Доступ запрещен");
// 			break;
// 	}
// };
// const data = checkAccess("admin", "123456");

// 3 задание

// const getTimeOfDay = num => {
// 	switch (true) {
// 		case num <= 5:
// 			console.log("Ночь");
// 			break;
// 		case num <= 11:
// 			console.log("Утро");
// 			break;
// 		case num <= 17:
// 			console.log("День");
// 			break;
// 		case num <= 23:
// 			console.log("Вечер");
// 			break;
// 		default:
// 			console.log("Некорректное время");
// 			break;
// 	}
// };
// const hour = getTimeOfDay(23);

// Задание 4

// const findFirstEven = (start, end) => {
// 	for (let i = start; i <= end; i++) {
// 		if (i % 2 === 0) {
// 			return i;
// 		}
// 	}
// 	return null;
// };
// const num = findFirstEven(1, 12);
// console.log(`Превое четное число ${num}`);
