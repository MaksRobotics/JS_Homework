var wrapper = document.querySelector('.wrapper'),
	form = wrapper.querySelector('form'),
	inputs = form.getElementsByTagName('input'),
	button = wrapper.querySelector('.button');

form.addEventListener('keyup', function(event) {
	var target = event.target;
	
	if (target.tagName == 'INPUT') {
		target.setAttribute('write','firstWrite');
	}

	for (var i = 0; i < inputs.length; i++) {
		if (!(inputs[i].getAttribute('write')) || !inputs[i].value) {	
			button.setAttribute('disabled','disabled');
			break;
		} else {
			button.removeAttribute('disabled','disabled');
		}
	}
});

button.addEventListener('click', function(event) {	
	if (checkCorrectValue()) {
		var table = document.createElement('table');

		alert('Поля должны принимать только целые числа от 1 до 10');

		for (var i = 0; i < inputs.length; i++) {
			inputs[i].value = '';
		}

		button.setAttribute('disabled','disabled');

		deleteChessTable();

		wrapper.appendChild(table);

	} else {
		deleteChessTable();
		createChessTable();
	}
})

function checkCorrectValue() {
	for (var i = 0; i < inputs.length; i++) {
		var num = Number(inputs[i].value);
		
		if (!(num >= 1 && num <= 10) || !Number.isInteger(num)) {
			return true;
		}
	}
}

function createChessTable() {
	var chessTable = document.createElement('table');
	
	wrapper.appendChild(chessTable);
	
	for (var i = 0; i < inputs[1].value; i++) {
		var tr = document.createElement('tr');
		
		for (var j = 0; j < inputs[0].value; j++) {
			var td = document.createElement('td');
			
			if ((i + j) % 2 == 0) {
                td.setAttribute('class', 'cell whitecell');
                tr.appendChild(td);
            } else {
				td.setAttribute('class', 'cell blackcell');
				tr.appendChild(td);
			}
		}
		chessTable.appendChild(tr);
	}
	
	chessTable.addEventListener('click', function(event) {

		var tdArray = wrapper.getElementsByTagName('td');
		
		for (var i = 0; i < tdArray.length; i++) {

			if (tdArray[i].classList.contains('blackcell')) {
				tdArray[i].classList.remove('blackcell');
				tdArray[i].classList.add('whitecell');
			} else {
				tdArray[i].classList.remove('whitecell');
				tdArray[i].classList.add('blackcell');
			}
		}
	});
}

function deleteChessTable() {
	var newTable = document.querySelector('table');
	
	newTable.remove();
}
