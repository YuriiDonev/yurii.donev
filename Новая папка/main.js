var colors = [
	{ value: 0, text: "Каждый" },
	{ value: 1, text: "Охотник" },
	{ value: 2, text: "Желает" },
	{ value: 3, text: "Знать" },
	{ value: 4, text: "Где" },
	{ value: 5, text: "Сидит" },
	{ value: 6, text: "Фазан" },
];
/*
function renderList(data, wrapper) {
	wrapper = wrapper || document.body;

	var selectElement = document.createElement('select');
	data.forEach(function(color) {
		var option = document.createElement('option');
		option.value = color.value;
		option.textContent = color.text;
		selectElement.appendChild(option);
	});
	wrapper.appendChild(selectElement);
}
*/
// renderList(colors, document.querySelector('#native-select-wrapper'));

function renderCustomSelect(data, wrapper) {
	var customSelect = createElement('div', 'custom-select');
	var button = createElement('div', 'button');
	button.textContent = data[0].text;
	button.dataset.value = data[0].value;

	var dropdown = createElement('ul', 'dropdown');

	customSelect.appendChild(button);
	customSelect.appendChild(dropdown);

	data.forEach(function(color) {
		var li = createElement('li');
		li.textContent = color.text;
		li.dataset.value = color.value;
		dropdown.appendChild(li);
	});
	wrapper.appendChild(customSelect);

	button.addEventListener('click', function() {
		dropdown.classList.toggle('active');
	});
	dropdown.addEventListener('click', function(ev) {
		if (ev.target.tagName !== 'LI') return;
		var index = +ev.target.dataset.value;
		button.textContent = data[index].text;
		button.dataset.value = data[index].value;
		ev.currentTarget.classList.remove('active');
	});

	document.addEventListener('click', function(ev) {

		var current = ev.target;
		while (current && current.className.indexOf('custom-select') === -1) {
			current = current.parentElement;
		}
		if (!current) {
			dropdown.classList.remove('active');
		}
	});

}
renderCustomSelect(colors, document.querySelector('#custom-select-wrapper'));


function createElement(type, className) {
	type = type || 'div';
	var element = document.createElement(type);
	if (className) {
		element.classList.add(className);
	}
	return element;
}









