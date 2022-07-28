var container = document.getElementById('container'),
	firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var buttons = document.getElementsByTagName('button'),
	buttonFirst = buttons[0];
	
buttonFirst.onclick = function() {
	for (var i = 0; i < firstPar.children.length; i++) {
		firstPar.children[i].classList.add('classForLinks');
	}
};

secondPar.addEventListener('click', function(event) {
	event.preventDefault();
	var target = event.target;

	if (target.tagName == 'A') {
		
		if(!localStorage.getItem(target.innerHTML)) {
			localStorage.setItem(target.innerHTML, JSON.stringify({path: target.href}));
		
			target.setAttribute('href', '#');
		
			alert('Ссылка была сохранена');
		} else {
			var localPath = JSON.parse(localStorage.getItem(target.innerHTML));
		
			alert(localPath.path);
		}	
	}
})

document.addEventListener('DOMContentLoaded', function() {
	localStorage.clear();
})