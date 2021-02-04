'use strict'

// Функция проверки на наличие числа
let isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};


let getGameBot = function () {

	// Функция генерации рандомного числа от 1 до 100
	function randIntNumber () {
		return Math.ceil(Math.random()*100);
	};

	let randInt = randIntNumber();


	let number = prompt('Угадай число от 1 до 100');

const getGame = function (num, rand, i) {

	if (String(num) === String(null)) {
		alert('Игра окончена.');
	} else if (!isNumber(num)) {
		num = prompt('Введите число!');
		getGame(num, rand, i);
	} else {
		function getNumber () {
			num = Number(num);
			if (num === rand) {
				if (confirm('Поздравляю, Вы угадали!!! Загаданное число: ' + num + '. Хотели бы сырать еще?') === true) {
					getGameBot();
				} else {
					alert ('Игра окончена.');
				};
			} else if (num > rand) {
				num = prompt('Заданное число меньше ' + num + ', осталось попыток ' + i);
				getGame(num, rand, i - 1);
			} else if (i === 0) {
				if (confirm ('Попытки закончились, хотите сыграть еще?') === true) {
					getGameBot();
				} else {
					alert ('Игра окончена.');
				};
			} else {
				num = prompt('Заданное число больше ' + num + ', осталось попыток ' + i);
				getGame(num, rand, i - 1);
			};
		};
		getNumber();
	};
};

getGame(number, randInt, 9);

};

getGameBot();