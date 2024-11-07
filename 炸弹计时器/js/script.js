var time = 5;
var interval;
var appendTens = document.getElementById("appendTens");
var altBtns = document.getElementById("alt-btns");
var resetBtn = document.getElementById("reset-btn");
var bomb = document.getElementById("bomb");
var ambulance = document.getElementById("ambulance");

function startTimer() {
	altBtns.innerHTML = "Stop";
	altBtns.style.backgroundColor = "red";

	if (interval) {
		clearInterval(interval);
	}
	interval = setInterval(() => {
		if (time == 1) {
			clearInterval(interval);
			bomb.innerHTML = "💥";
			ambulance.classList.add("slideIn");
		}
		time--;
		appendTens.innerHTML = time;
	}, 1000);
}

function stopTimer() {
	altBtns.innerHTML = "Start";
	altBtns.style.backgroundColor = "green";

	clearInterval(interval);
	interval = null;
}

function resetTimer() {
	altBtns.innerHTML = "Start";
	altBtns.style.backgroundColor = "green";
	bomb.innerHTML = "💣";
	ambulance.classList.remove("slideIn");

	if (interval) {
		clearInterval(interval);
	}
	interval = null;
	time = 5;
	appendTens.innerHTML = time;
}

altBtns.onclick = function () {
	if (interval) {
		stopTimer();
		if (time == 0) {
			resetTimer();
		}
	} else {
		startTimer();
	}
};

resetBtn.onclick = function () {
	resetTimer();
};