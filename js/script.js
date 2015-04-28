window.onload = function() {
	firstScene();
	//secondScene();
	//thirdScene();
	//fourthScene();
}

function firstScene() {
	removeClass(document.getElementById('back1'), 'state1');
	addClass(document.getElementById('back1'), 'state2');

	removeClass(document.querySelector('.line1_1'), 'state1');
	addClass(document.querySelector('.line1_1'), 'state2');
	setTimeout(function () { 
		removeClass(document.querySelector('.line1_2'), 'state1'); 
		addClass(document.querySelector('.line1_2'), 'state2'); 
	}, 100);
	setTimeout(function () { 
		removeClass(document.querySelector('.line1_3'), 'state1'); 
		addClass(document.querySelector('.line1_3'), 'state2'); 
	}, 200);
	setTimeout(function () { 
		removeClass(document.querySelector('.line1_4'), 'state1'); 
		addClass(document.querySelector('.line1_4'), 'state2'); 
	}, 300);
	setTimeout(function () { 
		removeClass(document.querySelector('.line1_5'), 'state1'); 
		addClass(document.querySelector('.line1_5'), 'state2'); 
	}, 400);

	setTimeout(function() {
		setTimeout(function () { 
			removeClass(document.querySelector('.line1_1'), 'state2');
			addClass(document.querySelector('.line1_1'), 'state3');
		}, 0);
		setTimeout(function () { 
			removeClass(document.querySelector('.line1_2'), 'state2');
			addClass(document.querySelector('.line1_2'), 'state3');
		}, 100);
		setTimeout(function () { 
			removeClass(document.querySelector('.line1_3'), 'state2');
			addClass(document.querySelector('.line1_3'), 'state3');
		}, 200);
		setTimeout(function () { 
			removeClass(document.querySelector('.line1_4'), 'state2');
			addClass(document.querySelector('.line1_4'), 'state3');
		}, 300);
		setTimeout(function () { 
			removeClass(document.querySelector('.line1_5'), 'state2');
			addClass(document.querySelector('.line1_5'), 'state3');
			secondScene();
		}, 400);
	}, 2500);
}


function secondScene() {
	setTimeout(function () { 
		removeClass(document.querySelector('.line2_1'), 'state1');
		addClass(document.querySelector('.line2_1'), 'state2');
	}, 0);
	setTimeout(function () { 
		removeClass(document.querySelector('.line2_2'), 'state1');
		addClass(document.querySelector('.line2_2'), 'state2');
	}, 100);
	setTimeout(function () { 
		removeClass(document.querySelector('.line2_3'), 'state1');
		addClass(document.querySelector('.line2_3'), 'state2');
	}, 200);

	setTimeout(function () {
		removeClass(document.getElementById('car1'), 'state1');
		addClass(document.getElementById('car1'), 'state2');
	}, 600);

	setTimeout(function () {
		addClass(document.getElementById('car1'), 'stopped');
	}, 900+600);

	setTimeout(function () { 
		removeClass(document.querySelector('.line2_1'), 'state2');
		addClass(document.querySelector('.line2_1'), 'state3');
	}, 2600);
	setTimeout(function () { 
		removeClass(document.querySelector('.line2_2'), 'state2');
		addClass(document.querySelector('.line2_2'), 'state3');
	}, 2700);
	setTimeout(function () { 
		removeClass(document.querySelector('.line2_3'), 'state2');
		addClass(document.querySelector('.line2_3'), 'state3');
	}, 2800);

	setTimeout(function () { 
		removeClass(document.getElementById('car1'), 'state2');
		removeClass(document.getElementById('car1'), 'stopped');
		addClass(document.getElementById('car1'), 'state3');
	}, 3100);

	setTimeout(function () { 
		removeClass(document.getElementById('back1'), 'state2');
		addClass(document.getElementById('back1'), 'state3');
	}, 2600);

	setTimeout(function () { 
		thirdScene();
	}, 3800);


}

function thirdScene() {
	removeClass(document.getElementById('back2'), 'state1');
	addClass(document.getElementById('back2'), 'state2');
	removeClass(document.querySelector('.car2_wrapper'), 'state1');
	addClass(document.querySelector('.car2_wrapper'), 'state2');

	setTimeout(function () { 
		removeClass(document.querySelector('.line3_1'), 'state1');
		addClass(document.querySelector('.line3_1'), 'state2');
	}, 0);
	setTimeout(function () { 
		removeClass(document.querySelector('.line3_2'), 'state1');
		addClass(document.querySelector('.line3_2'), 'state2');
	}, 100);

	setTimeout(function () { 
		removeClass(document.getElementById('car2'), 'state1');
		addClass(document.getElementById('car2'), 'state2');
	}, 0);

	setTimeout(function () { 
		fourthScene();
	}, 3000);
}

function fourthScene() {
	removeClass(document.getElementById('scene3'), 'state1');
	addClass(document.getElementById('scene3'), 'state2');
	setTimeout(function () { 
		resetAll();
	}, 1000);
}

function resetAll() {
	var lines = document.querySelectorAll('.line');
	for(var i=0; i<lines.length; i++) {
		removeClass(lines[i], 'state2');
		removeClass(lines[i], 'state3');
		addClass(lines[i], 'state1');
	}

	var els = document.querySelectorAll('.state3, .state2');
	for(var i=0; i<els.length; i++) {
		removeClass(els[i], 'state2');
		removeClass(els[i], 'state3');
		addClass(els[i], 'state1');
	}
	
	removeClass(document.getElementById('scene3'), 'state1');
	addClass(document.getElementById('scene3'), 'state2');
	setTimeout(function () { 
		removeClass(document.getElementById('scene3'), 'state2');
		addClass(document.getElementById('scene3'), 'state1');
	}, 3000);
	setTimeout(function () { 
		firstScene();
	}, 3500);

}


function addClass(el, className) {
	if (el.classList)
	  el.classList.add(className);
	else
	  el.className += ' ' + className;
}

function removeClass(el, className) {
	if (el.classList)
	  el.classList.remove(className);
	else
	  el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}