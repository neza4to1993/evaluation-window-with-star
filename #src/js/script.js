const btn = document.querySelector('.feedback__btn');
	btn.addEventListener('click', openWindow);

		const btnEstimation1 = document.getElementById('evaluationsItem1');
		btnEstimation1.addEventListener('click', createStar);

		const btnEstimation2 = document.getElementById('evaluationsItem2');
		btnEstimation2.addEventListener('click', createStar);

		const btnEstimation3 = document.getElementById('evaluationsItem3');
		btnEstimation3.addEventListener('click', createStar);

		const btnEstimation4 = document.getElementById('evaluationsItem4');
		btnEstimation4.addEventListener('click', createStar);

		const btnEstimation5 = document.getElementById('evaluationsItem5');
		btnEstimation5.addEventListener('click', createStar);

const btnStar = document.getElementById('star');
const allOpen = document.getElementById('freeEva');




















function starCount() {
	if (allOpen.getAttribute('openbtn') === 'false'){
		document.getElementById('numberStar').innerHTML = "1";
	}
}
function openWindow() {
		starCount()
		if (document.getElementById('feedbackout').style.display === 'none'){
			document.getElementById('feedbackout').setAttribute('window', 'feedback');
			document.getElementById('feedbackout').style.display = 'flex';
			document.getElementById('feedback').style.display = 'none';
		}else {
			document.getElementById('feedbackout').setAttribute('window', 'feedbackout');
			document.getElementById('feedbackout').style.display = 'none';
			document.getElementById('feedback').style.display = 'flex';
		}
}


function numberStar(number) {
	document.getElementById('numberStar').innerHTML = "";
	const numberStar = document.getElementById('numberStar');
	numberStar.append(number)
}

function broadcastNumberBtn(n) {
	const numberBtn = n.innerText;
	numberStar(numberBtn);
}

function replacementItem(btnNumber) {
	const star2 = document.getElementById('pathStar');
	if (star2.getAttribute("fill") == "black" || btnNumber.getAttribute("open") == "false"){
	star2.setAttribute("fill", "orange");
} else {
	star2.setAttribute("fill", "black");
}
}


		function createStar() {
			replacementItem(this);
			openBtn(this);
		}


function openBtn(numberBtn) {
	broadcastNumberBtn(numberBtn);
	checkBtnNumberPressed(numberBtn.innerText)


		if (numberBtn.getAttribute('open') === 'false' || numberBtn.getAttribute('open') === null) {
			numberBtn.style.cssText = 
			`
				background-color: #fc7613;
				width: 30px;
				height: 30px;
				font-size: 30px;
			`
			numberBtn.setAttribute('open', 'true');
			allOpen.setAttribute('openBtn', 'true');
			} else {
				defaultBtn(numberBtn);
		}
}

function defaultBtn(element) {
		element.style.cssText = 
	`
	width: 15px;
	height: 15px;
	font-size: 15px;
	background-color: #262f38;
	`
	element.setAttribute('open', 'false');
	allOpen.setAttribute('openBtn', 'false');

}

function checkBtnNumberPressed(numberBtn) {
	const allBtn = document.querySelector('.freedback__evaluations');
	const objBtn = {allBtn}.allBtn.children;
		for (let i = 0; i < objBtn.length; i++) {
			const element = objBtn[i];
			if (element.innerText !== numberBtn){
				defaultBtn(element, numberBtn)
			}
		}
	}
