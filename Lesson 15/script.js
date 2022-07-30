var wrapper = document.querySelector('.wrapper'),
	blockButton = wrapper.querySelector('.block__buton'),
	button = wrapper.getElementsByTagName('button'),
	tabs = wrapper.querySelector('.tabs'),
	errorMessage = document.createElement('p'),
	resultRequest = [];

button[0].addEventListener('click', function() {
	request();
})

function request() {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://reqres.in/api/users?page=2', true); 
	xhr.send();

	xhr.onload = function() {
	    var statusType = Math.round(this.status / 100);

		if (statusType === 2 && resultRequest.length == 0) {
			resultRequest = JSON.parse(this.response).data;

			createUserList(resultRequest);
		}
    };

    xhr.onerror = function() {
		wrapper.insertBefore(errorMessage, blockButton);
		errorMessage.classList.add('errorMessage');
		errorMessage.innerHTML = 'ОШИБКА ПРИ ЗАПРОСЕ НА СЕРВЕР!';
    };

    xhr.onloadend = function() {
        console.log('Запрос завершен');
    };
}

function createUserList(result) {
	var nav = document.createElement('nav'),
		tabsBody = document.createElement('div');

	nav.classList.add('tabs__items');
	tabs.appendChild(nav);

	for (var i = 0; i < result.length; i++) {
		var linkTab = document.createElement('a');

		linkTab.innerHTML = 'User ' +  (i + 1);
		linkTab.href = '#tab_' + (i + 1);
		linkTab.classList.add('tabs__item');
		nav.appendChild(linkTab);
	}

	tabsBody.classList.add('tabs__body');
	tabs.appendChild(tabsBody);
 
	for (var i = 0; i < result.length; i++) {
		infoTab = document.createElement('div');

		infoTab.innerHTML = '<div class="tabs__block-inline"><img src="' + result[i].avatar + '" alt="image"></div><div class="tabs__block-inline"><p>First Name: ' + result[i].first_name + '</p><p>Last Name: ' + result[i].last_name + '</p><p>Email: ' + result[i].email + '</p></div>';

		infoTab.id = 'tab_' + (i + 1);
		infoTab.classList.add('tabs__block');

		tabsBody.appendChild(infoTab);
	}

	nav.firstChild.classList.add('active');
	tabsBody.firstChild.classList.add('active');

	activeStatus(nav.children, tabsBody.children);
}

function activeStatus(links, bodies) {

	for (var i = 0; i < links.length; i++)  {

		links[i].addEventListener('click', function(event) { 
			
		if (!event.target.classList.contains('active')){
			
			deleteActive(links, bodies);
			event.target.classList.add('active');
			}
		})
	}
}

function deleteActive(item1, item2) {
	for (var i = 0; i < item1.length; i++) {

		if (item1[i].classList.contains('active')) {
			item1[i].classList.remove('active');
			item2[i].classList.remove('active');
		}
	}
}

