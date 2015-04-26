window.onload = function() {
	firstScene();
	//secondScene();
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

	removeClass(document.getElementById('car1'), 'state1');
	addClass(document.getElementById('car1'), 'state2');

	setTimeout(function () { 
		removeClass(document.querySelector('.line2_1'), 'state2');
		addClass(document.querySelector('.line2_1'), 'state3');
	}, 2000);
	setTimeout(function () { 
		removeClass(document.querySelector('.line2_2'), 'state2');
		addClass(document.querySelector('.line2_2'), 'state3');
	}, 2100);
	setTimeout(function () { 
		removeClass(document.querySelector('.line2_3'), 'state2');
		addClass(document.querySelector('.line2_3'), 'state3');
	}, 2200);

	setTimeout(function () { 
		removeClass(document.getElementById('car1'), 'state2');
		addClass(document.getElementById('car1'), 'state3');
	}, 2000);

	setTimeout(function () { 
		removeClass(document.getElementById('back1'), 'state2');
		addClass(document.getElementById('back1'), 'state3');
	}, 2000);

	


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