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
	var firstParLInks = firstPar.children;
	
	for(item of firstParLInks) {
		item.classList.add("classForLinks");
	}
};

var secondParLinks = secondPar.children;

secondParLinks[0].addEventListener('click', function(event) {
	event.preventDefault();
	alert(this.href);
})

secondParLinks[1].addEventListener('click', function(event) {
	event.preventDefault();
	alert(this.href);
})