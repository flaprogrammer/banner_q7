(function() {

var v = {};

window.onload = function() {
	getVars();
	firstScene();
	//secondScene();
	//thirdScene();
	//fourthScene();
}

function getVars() {
	v.b1 = getId('back1');
	v.b2 = getId('back2');
	v.l11 = q('.line1_1');
	v.l12 = q('.line1_2');
	v.l13 = q('.line1_3');
	v.l14 = q('.line1_4');
	v.l15 = q('.line1_5');
	v.ls1 = [v.l11,v.l12,v.l13,v.l14,v.l15];
	v.l21 = q('.line2_1');
	v.l22 = q('.line2_2');
	v.l23 = q('.line2_3');
	v.ls2 = [v.l21,v.l22,v.l23];
	v.l31 = q('.line3_1');
	v.l32 = q('.line3_2');
	v.c1 = getId('car1');
	v.c2 = getId('car2');
	v.c2w = q('.car2_wrapper');
	v.s3 = getId('scene3');

}

function firstScene() {
	rC(v.b1, 's1');
	aC(v.b1, 's2');


	for (var i = 0; i < 5; i++) {
		(function(i) {
			sT(function () { 
				rC(v.ls1[i], 's1'); 
				aC(v.ls1[i], 's2'); 
			}, i*100);
		})(i);
	}

	sT(function() {
		for (var i = 0; i < 5; i++) {
			(function(i) {
				sT(function () { 
					rC(v.ls1[i], 's2'); 
					aC(v.ls1[i], 's3'); 
					if(i==4) secondScene();
				}, i*100);
			})(i);
		}
	}, 2500);
}


function secondScene() {
	for (var i = 0; i < 3; i++) {
		(function(i) {
			sT(function () { 
				rC(v.ls2[i], 's1'); 
				aC(v.ls2[i], 's2'); 
			}, i*100);
		})(i);
	}

	sT(function () {
		rC(v.c1, 's1');
		aC(v.c1, 's2');
	}, 600);

	sT(function () {
		aC(v.c1, 'stopped');
	}, 900+600);

	for (var i = 0; i < 3; i++) {
		(function(i) {
			sT(function () { 
				rC(v.ls2[i], 's2'); 
				aC(v.ls2[i], 's3'); 
			}, 2600+i*100);
		})(i);
	}

	sT(function () { 
		rC(v.c1, 's2');
		rC(v.c1, 'stopped');
		aC(v.c1, 's3');
		rC(v.b1, 's2');
		aC(v.b1, 's3');
	}, 2600);

	sT(function () { 
		thirdScene();
	}, 3800);


}

function thirdScene() {
	rC(v.b2, 's1');
	aC(v.b2, 's2');
	rC(v.c2w, 's1');
	aC(v.c2w, 's2');

	sT(function () { 
		rC(v.l31, 's1');
		aC(v.l31, 's2');
	}, 0);
	sT(function () { 
		rC(v.l32, 's1');
		aC(v.l32, 's2');
	}, 100);

	sT(function () { 
		rC(v.c2, 's1');
		aC(v.c2, 's2');
	}, 0);

	sT(function () { 
		fourthScene();
	}, 3000);
}

function fourthScene() {
	rC(v.s3, 's1');
	aC(v.s3, 's2');
	sT(function () { 
		resetAll();
	}, 1000);
}

function resetAll() {
	var lines = document.querySelectorAll('.line');
	for(var i=0; i<lines.length; i++) {
		rC(lines[i], 's2');
		rC(lines[i], 's3');
		aC(lines[i], 's1');
	}

	var els = document.querySelectorAll('.s3, .s2');
	for(var i=0; i<els.length; i++) {
		rC(els[i], 's2');
		rC(els[i], 's3');
		aC(els[i], 's1');
	}
	
	rC(v.s3, 's1');
	aC(v.s3, 's2');
	sT(function () { 
		rC(v.s3, 's2');
		aC(v.s3, 's1');
	}, 3000);
	sT(function () { 
		firstScene();
	}, 3500);

}


function aC(el, className) {
	if (el.classList)
	  el.classList.add(className);
	else
	  el.className += ' ' + className;
}

function rC(el, className) {
	if (el.classList)
	  el.classList.remove(className);
	else
	  el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

function q(sel) {
	return document.querySelector(sel);
}

function getId(sel) {
	return document.getElementById(sel);
}

function sT(func, time) {
	return setTimeout(func, time);
}

function cC(el, oldn, newn) {

}

})();