var tableBody = document.querySelector('tbody'),
    lastTableRow = tableBody.lastElementChild;

lastTableRow.addEventListener('click', function() {
    var newRow = document.createElement('tr');
	
    newRow.innerHTML = '<td></td><td></td><td></td>';
	
    tableBody.insertBefore(newRow, tableBody.firstElementChild);
})

tableBody.addEventListener('click', function cellEdeting(event) {
    var target = event.target,
        input = document.createElement('input');

    if (target == lastTableRow.firstElementChild) {
        return;
    }

	input.value = target.innerHTML;
	target.innerHTML = '';
	target.appendChild(input);
	target.querySelector('input').focus();
		
	var self = target;
		
    input.addEventListener('blur', function() {
		self.innerHTML = this.value;
	});
});

document.addEventListener('keydown', function(event) {
    var keyBoard = event.key;
    
	if (keyBoard == 'Enter') {
		document.activeElement.blur();
    }
});