'use strict'

// Функция проверки на наличие числа
let isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

// Функция генерации рандомного числа от 1 до 100
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randInt = getRandomIntInclusive(1, 100);


const number = prompt('Угадай число от 1 до 100');

const getGameBot = function (num, randInt) {
	
	if (String(num) === String(null)) {
		alert('Игра окончена.')
	} else if (!isNumber(num)) {
		num = prompt('Введите число!');
		getGameBot(num, randInt);
	} else {
		function getNumber () {
			num = Number(num);
			if (num > randInt) {
				num = prompt('Заданное число меньше ' + num);
				getGameBot(num, randInt);
			} else if (num === randInt) {
				alert('Поздравляю, Вы угадали!!! Загаданное число: ' + num);
			} else {
				num = prompt('Заданное число больше ' + num);
				getGameBot(num, randInt);
			};
		};
		getNumber();
	};
};

getGameBot(number, randInt);